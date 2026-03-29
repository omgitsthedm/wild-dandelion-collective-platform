import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { sendBookingReminder } from '@/lib/integrations/sms';
import { sendEmail } from '@/lib/integrations/email';
import { randomUUID } from 'crypto';

/**
 * GET /api/notify/reminder
 * 
 * Scheduled function (hourly cron) to send 24-hour SMS reminders.
 * This checks for bookings starting in ~24 hours and sends reminders.
 * 
 * Note: This requires a local sync of Square bookings to work fully.
 * For now, it operates on placeholder data or can be extended to query Square API.
 */
export async function GET() {
  try {
    const db = getDb();
    
    // Calculate the 24-hour window
    const now = new Date();
    const tomorrowStart = new Date(now.getTime() + 23 * 60 * 60 * 1000); // 23 hours from now
    const tomorrowEnd = new Date(now.getTime() + 25 * 60 * 60 * 1000);   // 25 hours from now
    
    // Query for bookings in the 24-hour window that haven't had reminders sent
    // This requires a bookings_sync table that mirrors Square bookings locally
    const result = await db.execute({
      sql: `
        SELECT b.*, c.phone, c.email, c.name as customer_name
        FROM bookings_sync b
        LEFT JOIN customers_sync c ON b.customer_id = c.id
        WHERE b.start_at BETWEEN ? AND ?
          AND b.reminder_sent = 0
          AND b.status = 'ACCEPTED'
        LIMIT 50
      `,
      args: [
        tomorrowStart.toISOString(),
        tomorrowEnd.toISOString(),
      ],
    }).catch(() => ({ rows: [] })); // Graceful fallback if table doesn't exist

    const reminders = [];
    
    for (const row of result.rows) {
      const notificationId = randomUUID();
      
      // Send SMS reminder if phone available
      if (row.phone) {
        const smsResult = await sendBookingReminder({
          to: row.phone as string,
          customerName: (row.customer_name as string) || 'there',
          serviceName: (row.service_name as string) || 'your appointment',
          date: new Date(row.start_at as string).toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          }),
          time: new Date(row.start_at as string).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
          }),
        });
        
        reminders.push({
          bookingId: row.id,
          type: 'sms',
          success: smsResult.success,
          notificationId,
        });
      }
      
      // Also send email as backup
      if (row.email) {
        const emailResult = await sendEmail({
          to: row.email as string,
          subject: 'Reminder: Your appointment is tomorrow',
          html: `
            <p>Hi ${row.customer_name || 'there'},</p>
            <p>This is a friendly reminder that you have an appointment tomorrow:</p>
            <p><strong>${row.service_name}</strong><br>
            ${new Date(row.start_at as string).toLocaleString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit'
            })}</p>
            <p>See you then!<br>Ashley at The Wild Dandelion Collective</p>
          `,
        });
        
        reminders.push({
          bookingId: row.id,
          type: 'email',
          success: emailResult.success,
        });
      }
      
      // Mark reminder as sent
      await db.execute({
        sql: 'UPDATE bookings_sync SET reminder_sent = 1 WHERE id = ?',
        args: [row.id],
      }).catch(() => {}); // Graceful fallback
      
      // Log notification
      await db.execute({
        sql: `
          INSERT INTO notification_log (id, type, recipient, subject, status, related_id, sent_at, created_at)
          VALUES (?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
        `,
        args: [
          notificationId,
          'reminder',
          row.phone || row.email || 'unknown',
          '24-hour appointment reminder',
          'sent',
          row.id as string,
        ],
      }).catch(() => {});
    }

    return NextResponse.json({
      success: true,
      checkedWindow: {
        start: tomorrowStart.toISOString(),
        end: tomorrowEnd.toISOString(),
      },
      remindersSent: reminders.length,
      reminders,
    });
  } catch (error) {
    console.error('[notify/reminder] Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process reminders',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
