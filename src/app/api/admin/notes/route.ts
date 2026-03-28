import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

/**
 * POST /api/admin/notes
 * Save a note to a client or booking.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, squareCustomerId, squareBookingId } = body;

    if (!content) {
      return NextResponse.json({ error: 'content is required' }, { status: 400 });
    }

    if (!squareCustomerId && !squareBookingId) {
      return NextResponse.json(
        { error: 'Either squareCustomerId or squareBookingId is required' },
        { status: 400 },
      );
    }

    const db = getDb();
    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    await db.execute({
      sql: `INSERT INTO notes (id, square_customer_id, square_booking_id, content, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [id, squareCustomerId || null, squareBookingId || null, content, now, now],
    });

    return NextResponse.json({
      success: true,
      note: {
        id,
        squareCustomerId: squareCustomerId || null,
        squareBookingId: squareBookingId || null,
        content,
        createdAt: now,
        updatedAt: now,
      },
    });
  } catch (error) {
    console.error('[ADMIN/NOTES] Error:', error);
    return NextResponse.json({ error: 'Failed to save note' }, { status: 500 });
  }
}
