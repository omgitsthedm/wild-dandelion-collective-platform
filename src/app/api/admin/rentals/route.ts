import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

/**
 * GET /api/admin/rentals
 * List rental inquiries from Turso. Supports ?status= filter.
 */
export async function GET(request: NextRequest) {
  try {
    const db = getDb();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let sql = `SELECT * FROM rental_inquiries`;
    const args: string[] = [];

    if (status) {
      sql += ` WHERE status = ?`;
      args.push(status);
    }

    sql += ` ORDER BY created_at DESC`;

    const result = await db.execute({ sql, args });

    return NextResponse.json({
      success: true,
      rentalInquiries: result.rows,
    });
  } catch (error) {
    console.error('[ADMIN/RENTALS] GET error:', error);
    return NextResponse.json({ error: 'Failed to list rental inquiries' }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/rentals
 * Update a rental inquiry's status.
 */
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'id and status are required' }, { status: 400 });
    }

    const validStatuses = ['new', 'contacted', 'approved', 'active', 'completed', 'declined'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` },
        { status: 400 },
      );
    }

    const db = getDb();
    const now = new Date().toISOString();

    await db.execute({
      sql: `UPDATE rental_inquiries SET status = ?, updated_at = ? WHERE id = ?`,
      args: [status, now, id],
    });

    return NextResponse.json({ success: true, id, status, updatedAt: now });
  } catch (error) {
    console.error('[ADMIN/RENTALS] PATCH error:', error);
    return NextResponse.json({ error: 'Failed to update rental inquiry' }, { status: 500 });
  }
}
