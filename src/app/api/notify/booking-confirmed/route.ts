import { NextResponse } from 'next/server';
import { sendBookingConfirmation } from '@/lib/integrations/email';
import { sendBookingConfirmationSms, alertNewBooking } from '@/lib/integrations/sms';
import { getDb } from '@/lib/db';
import { randomUUID } from 'crypto';

/**
 * POST /api/notify/booking-confirmed
 * 
 * Sends booking confirmation to client and alert to Ashley.
 * Logs notification for audit.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      bookingId,
      customerEmail,
      customerPhone,
      customerName,
      serviceName,
      date,
      time,
    } = body;

    // Validate required fields
    if (!customerEmail || !customerName || !serviceName || !date || !time) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const notificationId = randomUUID();
    const results = {
      email: { success: false, error: null as string | null },
      sms: { success: false, error: null as string | null },
      ashleyAlert: { success: false, error: null as string | null },
    };

    // Send email confirmation
    const emailResult = await sendBookingConfirmation({
      to: customerEmail,
      customerName,
      serviceName,
      date,
      time,
      bookingId,
    });
    results.email.success = emailResult.success;
    results.email.error = emailResult.error || null;

    // Send SMS confirmation (if phone provided)
    if (customerPhone) {
      const smsResult = await sendBookingConfirmationSms({
        to: customerPhone,
        customerName,
        serviceName,
        date,
        time,
      });
      results.sms.success = smsResult.success;
      results.sms.error = smsResult.error || null;
    }

    // Send alert to Ashley
    const ashleyResult = await alertNewBooking({
      customerName,
      serviceName,
      date,
      time,
    });
    results.ashleyAlert.success = ashleyResult.success;
    results.ashleyAlert.error = ashleyResult.error || null;

    // Log to notification_log
    const db = getDb();
    await db.execute({
      sql: `
        INSERT INTO notification_log (
          id, type, recipient, subject, status, related_id, sent_at, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `,
      args: [
        notificationId,
        'booking_confirmed',
        customerEmail,
        `Booking confirmation: ${serviceName}`,
        results.email.success ? 'sent' : 'failed',
        bookingId || null,
      ],
    });

    return NextResponse.json({
      success: true,
      notificationId,
      results,
    });
  } catch (error) {
    console.error('[notify/booking-confirmed] Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send notifications',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
