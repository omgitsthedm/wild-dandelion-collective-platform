import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { sendAshleyAlert } from '@/lib/integrations/sms';
import { randomUUID } from 'crypto';

/**
 * POST /api/notify/ashley-alert
 * 
 * Send an SMS alert to Ashley. Respects quiet hours unless critical.
 * Also logs to notification_log for audit.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type,
      message,
      critical = false,
    } = body as {
      type: 'new_booking' | 'cancellation' | 'zero_stock' | 'consultation' | 'rental_inquiry';
      message: string;
      critical?: boolean;
    };

    // Validate
    const validTypes = ['new_booking', 'cancellation', 'zero_stock', 'consultation', 'rental_inquiry'];
    if (!type || !validTypes.includes(type)) {
      return NextResponse.json(
        { success: false, error: `Invalid type. Must be one of: ${validTypes.join(', ')}` },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    const notificationId = randomUUID();
    
    // Send the alert
    const smsResult = await sendAshleyAlert({
      type,
      message,
      critical,
    });

    // Log to notification_log
    const db = getDb();
    await db.execute({
      sql: `
        INSERT INTO notification_log (id, type, recipient, subject, status, sent_at, created_at)
        VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `,
      args: [
        notificationId,
        type,
        process.env.ASHLEY_PHONE_NUMBER || 'unknown',
        message.slice(0, 100),
        smsResult.success ? 'sent' : 'failed',
      ],
    }).catch(() => {});

    return NextResponse.json({
      success: smsResult.success,
      notificationId,
      placeholder: smsResult.placeholder,
      critical,
      error: smsResult.error,
    });
  } catch (error) {
    console.error('[notify/ashley-alert] Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send alert',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/notify/ashley-alert
 * 
 * Check quiet hours status (for admin dashboard)
 */
export async function GET() {
  const now = new Date();
  const mtTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Denver' }));
  const hour = mtTime.getHours();
  const isQuietHours = hour >= 21 || hour < 8;

  return NextResponse.json({
    isQuietHours,
    quietHoursWindow: '9:00 PM - 8:00 AM Mountain Time',
    currentTime: mtTime.toLocaleString('en-US', { timeZone: 'America/Denver' }),
  });
}
