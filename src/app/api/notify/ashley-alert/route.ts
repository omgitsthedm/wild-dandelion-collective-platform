import { NextRequest, NextResponse } from 'next/server';
import { sendSms } from '@/lib/integrations/sms';
import { getDb } from '@/lib/db';

type AlertType = 'new_booking' | 'cancellation' | 'zero_stock' | 'consultation' | 'rental_inquiry';

const ASHLEY_PHONE = process.env.ASHLEY_PHONE_NUMBER || '';

/** Critical alerts bypass quiet hours */
const CRITICAL_ALERTS: AlertType[] = ['cancellation', 'zero_stock'];

/**
 * Check if current time is within quiet hours (9pm - 8am Mountain Time).
 * Returns true if we should suppress non-critical alerts.
 */
function isQuietHours(): boolean {
  const now = new Date();
  // Convert to Mountain Time
  const mtTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Denver' }));
  const hour = mtTime.getHours();
  return hour >= 21 || hour < 8;
}

function buildAlertMessage(type: AlertType, details: Record<string, string>): string {
  switch (type) {
    case 'new_booking':
      return `[Wild Dandelion] New booking! ${details.clientName || 'A client'} booked ${details.serviceName || 'a service'} for ${details.dateTime || 'soon'}.`;
    case 'cancellation':
      return `[Wild Dandelion] CANCELLATION: ${details.clientName || 'A client'} cancelled ${details.serviceName || 'their booking'}${details.dateTime ? ` on ${details.dateTime}` : ''}.`;
    case 'zero_stock':
      return `[Wild Dandelion] STOCK ALERT: ${details.productName || 'A product'} is out of stock.`;
    case 'consultation':
      return `[Wild Dandelion] New consultation request from ${details.clientName || 'someone'}${details.serviceInterest ? ` for ${details.serviceInterest}` : ''}.`;
    case 'rental_inquiry':
      return `[Wild Dandelion] New rental inquiry from ${details.name || 'someone'}${details.specialty ? ` (${details.specialty})` : ''}.`;
    default:
      return `[Wild Dandelion] Alert: ${JSON.stringify(details)}`;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, details } = body as { type: AlertType; details: Record<string, string> };

    if (!type) {
      return NextResponse.json({ error: 'Alert type is required' }, { status: 400 });
    }

    if (!ASHLEY_PHONE) {
      console.log(`[ASHLEY-ALERT] No ASHLEY_PHONE_NUMBER set. Alert type: ${type}`, details);
      return NextResponse.json({
        success: true,
        placeholder: true,
        message: 'ASHLEY_PHONE_NUMBER not configured — alert logged only',
      });
    }

    const isCritical = CRITICAL_ALERTS.includes(type);
    const quiet = isQuietHours();
    const message = buildAlertMessage(type, details || {});

    if (quiet && !isCritical) {
      // Queue for later — log as pending
      try {
        const db = getDb();
        await db.execute({
          sql: `INSERT INTO notification_log (id, type, recipient, subject, status, related_id, sent_at)
                VALUES (?, ?, ?, ?, 'queued', ?, NULL)`,
          args: [
            crypto.randomUUID(),
            `ashley_alert_${type}`,
            ASHLEY_PHONE,
            message.substring(0, 200),
            details?.bookingId || details?.productId || null,
          ],
        });
      } catch (dbErr) {
        console.warn('[ASHLEY-ALERT] Could not queue to DB:', dbErr);
      }

      return NextResponse.json({
        success: true,
        queued: true,
        reason: 'Quiet hours (9pm-8am MT) — non-critical alert queued',
      });
    }

    // Send immediately
    const smsResult = await sendSms({
      to: ASHLEY_PHONE,
      body: message,
    });

    // Log
    try {
      const db = getDb();
      await db.execute({
        sql: `INSERT INTO notification_log (id, type, recipient, subject, status, related_id, sent_at)
              VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`,
        args: [
          crypto.randomUUID(),
          `ashley_alert_${type}`,
          ASHLEY_PHONE,
          message.substring(0, 200),
          smsResult.success ? 'sent' : 'failed',
          details?.bookingId || details?.productId || null,
        ],
      });
    } catch (dbErr) {
      console.warn('[ASHLEY-ALERT] Could not log to DB:', dbErr);
    }

    return NextResponse.json({
      success: smsResult.success,
      placeholder: smsResult.placeholder,
      queued: false,
    });
  } catch (error) {
    console.error('[ASHLEY-ALERT] Error:', error);
    return NextResponse.json({ error: 'Failed to process alert' }, { status: 500 });
  }
}
