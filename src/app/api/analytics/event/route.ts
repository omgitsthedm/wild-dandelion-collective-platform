/**
 * Analytics Event Collection API
 * Receives and stores analytics events
 */

import { NextRequest, NextResponse } from 'next/server';

// Using Node.js runtime for compatibility

interface AnalyticsEventPayload {
  eventName: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
  timestamp: string;
  sessionId: string;
  userId?: string;
  path: string;
  referrer?: string;
}

/**
 * Receive analytics events from client
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const event: AnalyticsEventPayload = await request.json();

    // Validate required fields
    if (!event.eventName || !event.category || !event.action) {
      return NextResponse.json(
        { error: 'Missing required event fields' },
        { status: 400 }
      );
    }

    // Add server-side metadata
    const enrichedEvent = {
      ...event,
      // IP tracking requires additional middleware in Next.js App Router
      userAgent: request.headers.get('user-agent') || 'unknown',
      // Geolocation available in Vercel Edge Runtime with additional config
      
      receivedAt: new Date().toISOString(),
    };

    // In production, save to database or analytics platform
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics Event]', enrichedEvent);
    }

    // Process high-value events
    if (isHighValueEvent(event)) {
      await processHighValueEvent(enrichedEvent);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ success: true });
  }
}

function isHighValueEvent(event: AnalyticsEventPayload): boolean {
  const highValueEvents = [
    'booking_confirmed',
    'booking_deposit_paid',
    'consultation_request',
    'referral_completed',
  ];
  return highValueEvents.includes(event.eventName);
}

async function processHighValueEvent(event: Record<string, unknown>): Promise<void> {
  console.log('[High Value Event]', event.eventName, event);
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: 'Analytics endpoint active',
    version: '1.0',
    timestamp: new Date().toISOString(),
  });
}
