import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { sendWeeklyDigest } from '@/lib/integrations/email';
import { randomUUID } from 'crypto';

/**
 * GET /api/notify/weekly-digest
 * 
 * Scheduled function (Monday 8am MT) to send Ashley a weekly summary email.
 */
export async function GET() {
  try {
    const db = getDb();
    const ashleyEmail = process.env.ASHLEY_EMAIL;
    
    if (!ashleyEmail) {
      console.log('[weekly-digest] ASHLEY_EMAIL not set, skipping');
      return NextResponse.json({
        success: true,
        skipped: true,
        reason: 'ASHLEY_EMAIL not configured',
      });
    }

    // Calculate week boundaries (Monday to Sunday)
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday
    const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - daysSinceMonday);
    weekStart.setHours(0, 0, 0, 0);
    
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    const weekStartStr = weekStart.toISOString();
    const weekEndStr = weekEnd.toISOString();

    // Get stats for the week
    // Note: These queries work with the sync tables. If they don't exist, counts will be 0.
    
    // Bookings this week
    const bookingsResult = await db.execute({
      sql: `
        SELECT COUNT(*) as count FROM bookings_sync 
        WHERE start_at BETWEEN ? AND ? AND status = 'ACCEPTED'
      `,
      args: [weekStartStr, weekEndStr],
    }).catch(() => ({ rows: [{ count: 0 }] }));
    const bookingCount = Number(bookingsResult.rows[0]?.count || 0);

    // New clients this week
    const clientsResult = await db.execute({
      sql: `
        SELECT COUNT(*) as count FROM customers_sync 
        WHERE created_at BETWEEN ? AND ?
      `,
      args: [weekStartStr, weekEndStr],
    }).catch(() => ({ rows: [{ count: 0 }] }));
    const newClientCount = Number(clientsResult.rows[0]?.count || 0);

    // New consultations
    const consultationsResult = await db.execute({
      sql: `
        SELECT COUNT(*) as count FROM consultations 
        WHERE created_at BETWEEN ? AND ?
      `,
      args: [weekStartStr, weekEndStr],
    }).catch(() => ({ rows: [{ count: 0 }] }));
    const consultationCount = Number(consultationsResult.rows[0]?.count || 0);

    // New rental inquiries
    const rentalsResult = await db.execute({
      sql: `
        SELECT COUNT(*) as count FROM rental_inquiries 
        WHERE created_at BETWEEN ? AND ?
      `,
      args: [weekStartStr, weekEndStr],
    }).catch(() => ({ rows: [{ count: 0 }] }));
    const rentalInquiryCount = Number(rentalsResult.rows[0]?.count || 0);

    // Format dates for email
    const weekStartFormatted = weekStart.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
    const weekEndFormatted = weekEnd.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    // Send the digest
    const emailResult = await sendWeeklyDigest({
      to: ashleyEmail,
      weekStart: weekStartFormatted,
      weekEnd: weekEndFormatted,
      bookingCount,
      newClientCount,
      consultationCount,
      rentalInquiryCount,
    });

    // Log the notification
    const notificationId = randomUUID();
    await db.execute({
      sql: `
        INSERT INTO notification_log (id, type, recipient, subject, status, sent_at, created_at)
        VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `,
      args: [
        notificationId,
        'weekly_digest',
        ashleyEmail,
        `Weekly summary (${weekStartFormatted} — ${weekEndFormatted})`,
        emailResult.success ? 'sent' : 'failed',
      ],
    }).catch(() => {});

    return NextResponse.json({
      success: true,
      notificationId,
      emailSent: emailResult.success,
      stats: {
        weekStart: weekStartStr,
        weekEnd: weekEndStr,
        bookingCount,
        newClientCount,
        consultationCount,
        rentalInquiryCount,
      },
    });
  } catch (error) {
    console.error('[notify/weekly-digest] Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send weekly digest',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
