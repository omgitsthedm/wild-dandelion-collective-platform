import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/integrations/email';
import { sendSms } from '@/lib/integrations/sms';
import { getDb } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookingId, clientName, clientEmail, clientPhone, serviceName, dateTime, location } =
      body;

    if (!bookingId || !clientEmail) {
      return NextResponse.json(
        { error: 'bookingId and clientEmail are required' },
        { status: 400 },
      );
    }

    const formattedDate = dateTime
      ? new Date(dateTime).toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          timeZone: 'America/Denver',
        })
      : 'your scheduled time';

    // --- Send confirmation email ---
    const emailResult = await sendEmail({
      to: clientEmail,
      subject: `Booking Confirmed — ${serviceName || 'Your Appointment'} with The Wild Dandelion`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
          <h1 style="font-size: 22px; color: #4a6741;">You're all set, ${clientName || 'there'}!</h1>
          <p>Your booking has been confirmed:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 8px 0; color: #777;">Service</td><td style="padding: 8px 0;">${serviceName || 'Consultation'}</td></tr>
            <tr><td style="padding: 8px 0; color: #777;">Date &amp; Time</td><td style="padding: 8px 0;">${formattedDate}</td></tr>
            ${location ? `<tr><td style="padding: 8px 0; color: #777;">Location</td><td style="padding: 8px 0;">${location}</td></tr>` : ''}
          </table>
          <p style="margin-top: 24px; font-size: 14px; color: #777;">
            Need to reschedule? Reply to this email or call us directly.
          </p>
          <p style="margin-top: 32px; font-size: 13px; color: #aaa;">— The Wild Dandelion Collective</p>
        </div>
      `,
    });

    // --- Send confirmation SMS ---
    let smsResult = { success: false, placeholder: true };
    if (clientPhone) {
      smsResult = await sendSms({
        to: clientPhone,
        body: `Confirmed! ${serviceName || 'Your appointment'} with The Wild Dandelion on ${formattedDate}. Reply HELP for questions.`,
      });
    }

    // --- Log to notification_log ---
    try {
      const db = getDb();
      const id = crypto.randomUUID();
      await db.execute({
        sql: `INSERT INTO notification_log (id, type, recipient, subject, status, related_id, sent_at)
              VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`,
        args: [
          id,
          'booking_confirmed',
          clientEmail,
          `Booking Confirmed — ${serviceName || 'Appointment'}`,
          emailResult.success ? 'sent' : 'failed',
          bookingId,
        ],
      });
    } catch (dbError) {
      console.warn('[NOTIFY] Could not log to notification_log:', dbError);
    }

    return NextResponse.json({
      success: true,
      email: { sent: emailResult.success, placeholder: emailResult.placeholder },
      sms: { sent: smsResult.success, placeholder: smsResult.placeholder },
    });
  } catch (error) {
    console.error('[NOTIFY] booking-confirmed error:', error);
    return NextResponse.json({ error: 'Failed to send booking confirmation' }, { status: 500 });
  }
}
