import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/integrations/email';
import { getDb } from '@/lib/db';

const ASHLEY_EMAIL = process.env.ASHLEY_EMAIL || '';

/**
 * GET /api/notify/weekly-digest
 * Scheduled function (Monday 8am MT = 15:00 UTC via Netlify cron).
 * Sends Ashley a weekly summary: bookings, revenue placeholder, new clients, pending items.
 */
export async function GET() {
  if (!ASHLEY_EMAIL) {
    console.log('[WEEKLY-DIGEST] ASHLEY_EMAIL not configured — skipping digest.');
    return NextResponse.json({ success: true, placeholder: true, message: 'No ASHLEY_EMAIL set' });
  }

  try {
    const db = getDb();

    // Date range: last 7 days
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const weekAgoISO = weekAgo.toISOString();

    // --- Gather stats ---
    let bookingCount = 0;
    let newConsultations = 0;
    let newRentalInquiries = 0;
    let pendingConsultations = 0;
    let pendingRentals = 0;
    let notificationsSent = 0;

    try {
      const consultResult = await db.execute({
        sql: `SELECT COUNT(*) as count FROM consultations WHERE created_at >= ?`,
        args: [weekAgoISO],
      });
      newConsultations = Number(consultResult.rows[0]?.count) || 0;

      const pendingConsultResult = await db.execute({
        sql: `SELECT COUNT(*) as count FROM consultations WHERE status = 'new'`,
        args: [],
      });
      pendingConsultations = Number(pendingConsultResult.rows[0]?.count) || 0;

      const rentalResult = await db.execute({
        sql: `SELECT COUNT(*) as count FROM rental_inquiries WHERE created_at >= ?`,
        args: [weekAgoISO],
      });
      newRentalInquiries = Number(rentalResult.rows[0]?.count) || 0;

      const pendingRentalResult = await db.execute({
        sql: `SELECT COUNT(*) as count FROM rental_inquiries WHERE status = 'new'`,
        args: [],
      });
      pendingRentals = Number(pendingRentalResult.rows[0]?.count) || 0;

      const notifResult = await db.execute({
        sql: `SELECT COUNT(*) as count FROM notification_log WHERE created_at >= ?`,
        args: [weekAgoISO],
      });
      notificationsSent = Number(notifResult.rows[0]?.count) || 0;
    } catch (queryErr) {
      console.warn('[WEEKLY-DIGEST] Some stats queries failed:', queryErr);
    }

    // Booking count placeholder — requires Square sync
    // bookingCount = ... (wire when Square bookings are synced)

    const weekLabel = `${weekAgo.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    const emailResult = await sendEmail({
      to: ASHLEY_EMAIL,
      subject: `Wild Dandelion Weekly Digest — ${weekLabel}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
          <h1 style="font-size: 22px; color: #4a6741;">Weekly Digest</h1>
          <p style="color: #777; font-size: 14px;">${weekLabel}</p>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; font-weight: bold;">Bookings</td>
              <td style="padding: 10px 0; text-align: right;">${bookingCount} <span style="color:#999;">(wire Square sync)</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; font-weight: bold;">New Consultations</td>
              <td style="padding: 10px 0; text-align: right;">${newConsultations}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; font-weight: bold;">New Rental Inquiries</td>
              <td style="padding: 10px 0; text-align: right;">${newRentalInquiries}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; font-weight: bold;">Notifications Sent</td>
              <td style="padding: 10px 0; text-align: right;">${notificationsSent}</td>
            </tr>
          </table>

          ${
            pendingConsultations + pendingRentals > 0
              ? `
          <div style="background: #fef9e7; border-left: 3px solid #d4a843; padding: 12px 16px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">Needs Your Attention</p>
            ${pendingConsultations > 0 ? `<p style="margin: 4px 0 0 0;">${pendingConsultations} consultation(s) awaiting review</p>` : ''}
            ${pendingRentals > 0 ? `<p style="margin: 4px 0 0 0;">${pendingRentals} rental inquiry/ies awaiting review</p>` : ''}
          </div>`
              : ''
          }

          <p style="margin-top: 24px; font-size: 14px; color: #777;">
            Revenue summary will appear here once Square sync is active.
          </p>

          <p style="margin-top: 32px; font-size: 13px; color: #aaa;">— The Wild Dandelion Platform</p>
        </div>
      `,
    });

    // Log digest send
    try {
      await db.execute({
        sql: `INSERT INTO notification_log (id, type, recipient, subject, status, sent_at)
              VALUES (?, 'weekly_digest', ?, ?, ?, datetime('now'))`,
        args: [
          crypto.randomUUID(),
          ASHLEY_EMAIL,
          `Weekly Digest — ${weekLabel}`,
          emailResult.success ? 'sent' : 'failed',
        ],
      });
    } catch (logErr) {
      console.warn('[WEEKLY-DIGEST] Could not log:', logErr);
    }

    return NextResponse.json({
      success: emailResult.success,
      placeholder: emailResult.placeholder,
      stats: {
        bookingCount,
        newConsultations,
        newRentalInquiries,
        pendingConsultations,
        pendingRentals,
        notificationsSent,
      },
    });
  } catch (error) {
    console.error('[WEEKLY-DIGEST] Error:', error);
    return NextResponse.json({ error: 'Weekly digest failed' }, { status: 500 });
  }
}
