import { NextResponse } from 'next/server';
import { sendSms } from '@/lib/integrations/sms';
import { getDb } from '@/lib/db';

/**
 * GET /api/notify/reminder
 * Scheduled function (hourly via Netlify cron).
 * Finds bookings happening in 23-25 hours and sends SMS reminders.
 */
export async function GET() {
  const results: { bookingId: string; phone: string; sent: boolean }[] = [];

  try {
    const db = getDb();

    // Find bookings in the 23-25 hour window from now
    const now = new Date();
    const windowStart = new Date(now.getTime() + 23 * 60 * 60 * 1000);
    const windowEnd = new Date(now.getTime() + 25 * 60 * 60 * 1000);

    // Query Square bookings via our local cache/mirror, or fall back to placeholder
    // In production this would query Square Bookings API or a synced local table.
    // For now, we query a bookings view if it exists, otherwise return empty.
    let bookings: {
      id: string;
      client_name: string;
      client_phone: string;
      service_name: string;
      start_at: string;
    }[] = [];

    try {
      const rows = await db.execute({
        sql: `SELECT id, client_name, client_phone, service_name, start_at
              FROM bookings
              WHERE start_at >= ? AND start_at <= ?
                AND reminder_sent = 0
                AND client_phone IS NOT NULL`,
        args: [windowStart.toISOString(), windowEnd.toISOString()],
      });
      bookings = rows.rows as unknown as typeof bookings;
    } catch {
      // bookings table may not exist yet — that's fine, return empty
      console.log('[REMINDER] No bookings table found — skipping. Wire Square sync to populate.');
    }

    for (const booking of bookings) {
      const formattedTime = new Date(booking.start_at).toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'America/Denver',
      });

      const smsResult = await sendSms({
        to: booking.client_phone,
        body: `Reminder: ${booking.service_name || 'Your appointment'} with The Wild Dandelion is tomorrow at ${formattedTime}. See you then!`,
      });

      results.push({
        bookingId: booking.id,
        phone: booking.client_phone,
        sent: smsResult.success,
      });

      // Log the reminder
      try {
        await db.execute({
          sql: `INSERT INTO notification_log (id, type, recipient, subject, status, related_id, sent_at)
                VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`,
          args: [
            crypto.randomUUID(),
            'reminder_sms',
            booking.client_phone,
            'Booking Reminder',
            smsResult.success ? 'sent' : 'failed',
            booking.id,
          ],
        });

        // Mark reminder as sent
        if (smsResult.success) {
          await db.execute({
            sql: `UPDATE bookings SET reminder_sent = 1 WHERE id = ?`,
            args: [booking.id],
          });
        }
      } catch (logErr) {
        console.warn('[REMINDER] Failed to log notification:', logErr);
      }
    }

    return NextResponse.json({
      success: true,
      reminders_sent: results.filter((r) => r.sent).length,
      total_checked: bookings.length,
      results,
    });
  } catch (error) {
    console.error('[REMINDER] Error:', error);
    return NextResponse.json({ error: 'Reminder job failed' }, { status: 500 });
  }
}
