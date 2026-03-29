import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL = process.env.FROM_EMAIL || 'hello@thewilddandelioncollective.com';
const FROM_NAME = 'The Wild Dandelion Collective';

type SendEmailParams = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

type SendEmailResult = {
  success: boolean;
  placeholder: boolean;
  id?: string;
  error?: string;
};

export async function sendEmail(params: SendEmailParams): Promise<SendEmailResult> {
  if (!resend) {
    console.log(`[EMAIL PLACEHOLDER] To: ${params.to}, Subject: ${params.subject}`);
    return { success: true, placeholder: true };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: params.to,
      subject: params.subject,
      html: params.html,
      text: params.text,
      replyTo: params.replyTo,
    });

    if (error) {
      console.error('[RESEND] send error:', error);
      return {
        success: false,
        placeholder: false,
        error: error.message,
      };
    }

    return {
      success: true,
      placeholder: false,
      id: data?.id,
    };
  } catch (error) {
    console.error('[RESEND] send error:', error);
    return {
      success: false,
      placeholder: false,
      error: error instanceof Error ? error.message : 'Email sending failed',
    };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATED EMAILS
// ─────────────────────────────────────────────────────────────────────────────

export async function sendBookingConfirmation(params: {
  to: string;
  customerName: string;
  serviceName: string;
  date: string;
  time: string;
  bookingId?: string;
}): Promise<SendEmailResult> {
  const { to, customerName, serviceName, date, time, bookingId } = params;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Appointment is Confirmed</title>
  <style>
    body { font-family: 'Source Serif 4', Georgia, serif; line-height: 1.6; color: #2C2420; background: #F7F3E9; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { text-align: center; margin-bottom: 32px; }
    .logo { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; color: #8FA68E; margin-bottom: 8px; }
    .title { font-size: 24px; margin-bottom: 24px; }
    .details { background: white; border-radius: 16px; padding: 24px; margin: 24px 0; }
    .detail-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(44,36,32,0.1); }
    .detail-row:last-child { border-bottom: none; }
    .label { font-weight: 600; color: #5C5348; }
    .value { color: #2C2420; }
    .message { margin: 24px 0; padding: 20px; background: #EDE6D6; border-radius: 12px; border-left: 4px solid #8FA68E; }
    .footer { text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(44,36,32,0.1); font-size: 14px; color: #5C5348; }
    .address { margin-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">The Wild Dandelion Collective</div>
    </div>
    
    <h1 class="title">Your appointment is confirmed, ${customerName.split(' ')[0]}</h1>
    
    <p>Ashley is looking forward to seeing you. Here are your appointment details:</p>
    
    <div class="details">
      <div class="detail-row">
        <span class="label">Service</span>
        <span class="value">${serviceName}</span>
      </div>
      <div class="detail-row">
        <span class="label">Date</span>
        <span class="value">${date}</span>
      </div>
      <div class="detail-row">
        <span class="label">Time</span>
        <span class="value">${time}</span>
      </div>
      ${bookingId ? `
      <div class="detail-row">
        <span class="label">Booking ID</span>
        <span class="value">${bookingId}</span>
      </div>
      ` : ''}
    </div>
    
    <div class="message">
      <strong>What to expect:</strong><br>
      Please arrive a few minutes early to settle in. Your appointment starts with a conversation at the chair where Ashley learns what you're looking for. From there she takes care of everything — no rush, no upselling, just focused time dedicated to you.
    </div>
    
    <p>Need to reschedule? Please give us at least 48 hours notice. You can reply to this email or call us at (303) 834-7572.</p>
    
    <div class="footer">
      <div class="address">
        <strong>The Wild Dandelion Collective</strong><br>
        413 Main St, Longmont, CO 80501<br>
        (303) 834-7572
      </div>
      <p style="margin-top: 16px; font-size: 12px;">
        <a href="https://thewilddandelioncollective.com">thewilddandelioncollective.com</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;

  const text = `
Your appointment is confirmed!

Hi ${customerName.split(' ')[0]},

Ashley is looking forward to seeing you.

APPOINTMENT DETAILS
Service: ${serviceName}
Date: ${date}
Time: ${time}
${bookingId ? `Booking ID: ${bookingId}` : ''}

WHAT TO EXPECT
Please arrive a few minutes early to settle in. Your appointment starts with a conversation at the chair where Ashley learns what you're looking for. From there she takes care of everything.

NEED TO RESCHEDULE?
Please give us at least 48 hours notice. Reply to this email or call (303) 834-7572.

---
The Wild Dandelion Collective
413 Main St, Longmont, CO 80501
(303) 834-7572
https://thewilddandelioncollective.com
  `;

  return sendEmail({
    to,
    subject: 'Your appointment is confirmed ✓',
    html,
    text,
  });
}

export async function sendConsultationConfirmation(params: {
  to: string;
  customerName: string;
  serviceInterest: string;
}): Promise<SendEmailResult> {
  const { to, customerName, serviceInterest } = params;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Request Received</title>
  <style>
    body { font-family: 'Source Serif 4', Georgia, serif; line-height: 1.6; color: #2C2420; background: #F7F3E9; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { text-align: center; margin-bottom: 32px; }
    .logo { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; color: #8FA68E; margin-bottom: 8px; }
    .message { margin: 24px 0; padding: 24px; background: #EDE6D6; border-radius: 12px; border-left: 4px solid #8FA68E; }
    .footer { text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(44,36,32,0.1); font-size: 14px; color: #5C5348; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">The Wild Dandelion Collective</div>
    </div>
    
    <h1>Thank you, ${customerName.split(' ')[0]}</h1>
    
    <p>We've received your consultation request for <strong>${serviceInterest}</strong>.</p>
    
    <div class="message">
      Ashley will review your photos and notes within 24 hours. If she has everything she needs, she'll reach out to schedule your consultation. If she needs more information, she'll be in touch.
    </div>
    
    <p>In the meantime, feel free to browse our <a href="https://thewilddandelioncollective.com/services">services</a> or <a href="https://thewilddandelioncollective.com/gallery">gallery</a> for inspiration.</p>
    
    <div class="footer">
      <p>Questions? Reply to this email or call (303) 834-7572</p>
    </div>
  </div>
</body>
</html>
  `;

  return sendEmail({
    to,
    subject: 'We received your consultation request',
    html,
  });
}

export async function sendWeeklyDigest(params: {
  to: string;
  weekStart: string;
  weekEnd: string;
  bookingCount: number;
  newClientCount: number;
  consultationCount: number;
  rentalInquiryCount: number;
}): Promise<SendEmailResult> {
  const { to, weekStart, weekEnd, bookingCount, newClientCount, consultationCount, rentalInquiryCount } = params;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Weekly Summary</title>
  <style>
    body { font-family: 'Source Serif 4', Georgia, serif; line-height: 1.6; color: #2C2420; background: #F7F3E9; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { text-align: center; margin-bottom: 32px; }
    .logo { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; color: #8FA68E; }
    .date-range { color: #5C5348; font-size: 14px; margin-top: 8px; }
    .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 32px 0; }
    .stat { background: white; border-radius: 16px; padding: 24px; text-align: center; }
    .stat-number { font-size: 32px; font-weight: 600; color: #8FA68E; }
    .stat-label { font-size: 14px; color: #5C5348; margin-top: 4px; }
    .cta { text-align: center; margin: 32px 0; }
    .button { display: inline-block; background: #8FA68E; color: white; padding: 12px 24px; border-radius: 100px; text-decoration: none; }
    .footer { text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(44,36,32,0.1); font-size: 14px; color: #5C5348; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">The Wild Dandelion Collective</div>
      <div class="date-range">${weekStart} — ${weekEnd}</div>
    </div>
    
    <h1 style="text-align: center;">Your week at a glance</h1>
    
    <div class="stats">
      <div class="stat">
        <div class="stat-number">${bookingCount}</div>
        <div class="stat-label">Bookings</div>
      </div>
      <div class="stat">
        <div class="stat-number">${newClientCount}</div>
        <div class="stat-label">New Clients</div>
      </div>
      <div class="stat">
        <div class="stat-number">${consultationCount}</div>
        <div class="stat-label">Consultations</div>
      </div>
      <div class="stat">
        <div class="stat-number">${rentalInquiryCount}</div>
        <div class="stat-label">Rental Inquiries</div>
      </div>
    </div>
    
    <div class="cta">
      <a href="https://thewilddandelioncollective.com/admin" class="button">View Dashboard</a>
    </div>
    
    <div class="footer">
      <p>You're receiving this because you're the owner of The Wild Dandelion Collective.</p>
    </div>
  </div>
</body>
</html>
  `;

  return sendEmail({
    to,
    subject: `Your weekly summary (${weekStart} — ${weekEnd})`,
    html,
  });
}
