import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { alertNewRentalInquiry } from '@/lib/integrations/sms';
import { randomUUID } from 'crypto';

/**
 * POST /api/rentals
 * 
 * Create a new rental inquiry. Called from the public form.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      specialty,
      portfolioUrl,
      message,
      spaceType, // 'retail' | 'station'
    } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const id = randomUUID();
    const db = getDb();

    // Save to database
    await db.execute({
      sql: `
        INSERT INTO rental_inquiries (
          id, name, email, phone, specialty, portfolio_url, message, status, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `,
      args: [
        id,
        name,
        email,
        phone || null,
        specialty || null,
        portfolioUrl || null,
        message || null,
        'new',
      ],
    });

    console.log('[rentals] New inquiry saved:', {
      id,
      name,
      email,
      specialty,
      spaceType,
      timestamp: new Date().toISOString(),
    });

    // Send SMS alert to Ashley
    await alertNewRentalInquiry({
      name,
      spaceType: spaceType || (specialty ? 'station' : 'space'),
    });

    return NextResponse.json({
      success: true,
      inquiryId: id,
    });
  } catch (error) {
    console.error('[rentals] POST error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit inquiry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/rentals
 * 
 * Public endpoint to check inquiry status (optional - for future use)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const inquiryId = searchParams.get('id');

  if (!inquiryId) {
    return NextResponse.json(
      { success: false, error: 'Inquiry ID required' },
      { status: 400 }
    );
  }

  try {
    const db = getDb();
    const result = await db.execute({
      sql: 'SELECT id, status, created_at, updated_at FROM rental_inquiries WHERE id = ?',
      args: [inquiryId],
    });

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    const row = result.rows[0];
    return NextResponse.json({
      success: true,
      inquiry: {
        id: row.id,
        status: row.status,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
      },
    });
  } catch (error) {
    console.error('[rentals] GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch inquiry' },
      { status: 500 }
    );
  }
}
