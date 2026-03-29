import twilio from 'twilio';

const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
  ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null;

const FROM_PHONE = process.env.TWILIO_PHONE_NUMBER;
const ASHLEY_PHONE = process.env.ASHLEY_PHONE_NUMBER;

type SendSmsParams = {
  to: string;
  body: string;
};

type SendSmsResult = {
  success: boolean;
  placeholder: boolean;
  sid?: string;
  error?: string;
};

/**
 * Check if current time is within quiet hours (9pm - 8am Mountain Time)
 */
function isQuietHours(): boolean {
  const now = new Date();
  const mtTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Denver' }));
  const hour = mtTime.getHours();
  return hour >= 21 || hour < 8; // 9pm - 8am
}

export async function sendSms(params: SendSmsParams): Promise<SendSmsResult> {
  if (!twilioClient || !FROM_PHONE) {
    console.log(`[SMS PLACEHOLDER] To: ${params.to}, Body: ${params.body}`);
    return { success: true, placeholder: true };
  }

  try {
    const message = await twilioClient.messages.create({
      body: params.body,
      from: FROM_PHONE,
      to: params.to,
    });

    return {
      success: true,
      placeholder: false,
      sid: message.sid,
    };
  } catch (error) {
    console.error('[TWILIO] send error:', error);
    return {
      success: false,
      placeholder: false,
      error: error instanceof Error ? error.message : 'SMS sending failed',
    };
  }
}

/**
 * Send SMS to Ashley (respects quiet hours unless critical)
 */
export async function sendAshleyAlert(params: {
  type: 'new_booking' | 'cancellation' | 'zero_stock' | 'consultation' | 'rental_inquiry';
  message: string;
  critical?: boolean;
}): Promise<SendSmsResult> {
  if (!ASHLEY_PHONE) {
    console.log('[SMS PLACEHOLDER] Ashley alert:', params.message);
    return { success: true, placeholder: true };
  }

  // Check quiet hours unless critical
  if (!params.critical && isQuietHours()) {
    console.log('[SMS] Quiet hours - message queued:', params.message);
    // In production, you'd queue this for later delivery
    return { success: true, placeholder: true };
  }

  const prefix = params.critical ? '🚨 ' : '';
  const fullMessage = `${prefix}Wild Dandelion: ${params.message}`;

  return sendSms({
    to: ASHLEY_PHONE,
    body: fullMessage,
  });
}

/**
 * Send booking reminder to client (24 hours before)
 */
export async function sendBookingReminder(params: {
  to: string;
  customerName: string;
  serviceName: string;
  date: string;
  time: string;
}): Promise<SendSmsResult> {
  const { to, customerName, serviceName, date, time } = params;

  const message = `Hi ${customerName.split(' ')[0]}! Reminder: You have a ${serviceName} appointment tomorrow (${date}) at ${time} with Ashley at The Wild Dandelion Collective. See you then! Reply STOP to opt out.`;

  return sendSms({ to, body: message });
}

/**
 * Send booking confirmation SMS
 */
export async function sendBookingConfirmationSms(params: {
  to: string;
  customerName: string;
  serviceName: string;
  date: string;
  time: string;
}): Promise<SendSmsResult> {
  const { to, customerName, serviceName, date, time } = params;

  const message = `Hi ${customerName.split(' ')[0]}! Your ${serviceName} appointment is confirmed for ${date} at ${time} with Ashley at The Wild Dandelion Collective (413 Main St, Longmont). Need to reschedule? Call (303) 834-7572. Reply STOP to opt out.`;

  return sendSms({ to, body: message });
}

// ─────────────────────────────────────────────────────────────────────────────
// ASHLEY ALERT TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export async function alertNewBooking(params: {
  customerName: string;
  serviceName: string;
  date: string;
  time: string;
}): Promise<SendSmsResult> {
  const { customerName, serviceName, date, time } = params;
  return sendAshleyAlert({
    type: 'new_booking',
    message: `New booking: ${customerName} booked ${serviceName} on ${date} at ${time}`,
  });
}

export async function alertCancellation(params: {
  customerName: string;
  serviceName: string;
  date: string;
  time: string;
}): Promise<SendSmsResult> {
  const { customerName, serviceName, date, time } = params;
  return sendAshleyAlert({
    type: 'cancellation',
    message: `CANCELLATION: ${customerName} cancelled ${serviceName} on ${date} at ${time}`,
    critical: true,
  });
}

export async function alertNewConsultation(params: {
  customerName: string;
  serviceInterest: string;
}): Promise<SendSmsResult> {
  const { customerName, serviceInterest } = params;
  return sendAshleyAlert({
    type: 'consultation',
    message: `New consultation request from ${customerName} for ${serviceInterest}`,
  });
}

export async function alertNewRentalInquiry(params: {
  name: string;
  spaceType: string;
}): Promise<SendSmsResult> {
  const { name, spaceType } = params;
  return sendAshleyAlert({
    type: 'rental_inquiry',
    message: `New rental inquiry: ${name} interested in ${spaceType}`,
  });
}

export async function alertZeroStock(params: {
  productName: string;
}): Promise<SendSmsResult> {
  const { productName } = params;
  return sendAshleyAlert({
    type: 'zero_stock',
    message: `OUT OF STOCK: ${productName}`,
    critical: true,
  });
}
