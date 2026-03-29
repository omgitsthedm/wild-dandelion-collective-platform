import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { uploadConsultationPhoto } from '@/lib/integrations/storage';
import { sendConsultationConfirmation } from '@/lib/integrations/email';
import { alertNewConsultation } from '@/lib/integrations/sms';
import { randomUUID } from 'crypto';

/**
 * POST /api/consult
 *
 * Receives a multipart/form-data consultation submission.
 * Saves to Turso, uploads photos to Netlify Blobs, notifies Ashley via SMS.
 */
export async function POST(request: Request) {
  const consultationId = randomUUID();
  
  try {
    const formData = await request.formData();

    // Extract form fields
    const serviceCategory = formData.get('serviceCategory') as string;
    const description = formData.get('description') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const preferredContact = formData.get('preferredContact') as string;
    const timing = formData.get('timing') as string;
    const eventDate = formData.get('eventDate') as string | null;

    // Validate required fields
    if (!firstName || !lastName || !email || !serviceCategory) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Extract and upload photos
    const photoUrls: string[] = [];
    const photos = [
      formData.get('photo_0') as File | null,
      formData.get('photo_1') as File | null,
      formData.get('photo_2') as File | null,
    ].filter((p): p is File => p !== null && p.size > 0);

    // Upload photos if any
    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i];
      try {
        const url = await uploadConsultationPhoto(
          consultationId,
          i,
          photo,
          photo.name
        );
        photoUrls.push(url);
      } catch (error) {
        console.error(`[consult] Failed to upload photo ${i}:`, error);
        // Continue without this photo - don't fail the whole submission
      }
    }

    // Save to database
    const fullName = `${firstName} ${lastName}`.trim();
    const db = getDb();
    await db.execute({
      sql: `
        INSERT INTO consultations (
          id, name, email, phone, service_interest, description,
          photo_urls, preferred_contact, event_date, status, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `,
      args: [
        consultationId,
        fullName,
        email,
        phone || null,
        serviceCategory,
        description || null,
        JSON.stringify(photoUrls),
        preferredContact || 'email',
        eventDate || null,
        'new',
      ],
    });

    // Log submission
    console.log('[consult] New consultation saved:', {
      id: consultationId,
      name: fullName,
      email,
      service: serviceCategory,
      photos: photoUrls.length,
      timestamp: new Date().toISOString(),
    });

    // Send confirmation email to client
    await sendConsultationConfirmation({
      to: email,
      customerName: fullName,
      serviceInterest: serviceCategory,
    });

    // Send SMS alert to Ashley
    await alertNewConsultation({
      customerName: fullName,
      serviceInterest: serviceCategory,
    });

    return NextResponse.json({
      success: true,
      consultationId,
      photoCount: photoUrls.length,
    });
  } catch (error) {
    console.error('[consult] Error processing submission:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process consultation',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/consult
 * 
 * List consultations (for admin)
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    let sql = 'SELECT * FROM consultations';
    const args: (string | number)[] = [];

    if (status) {
      sql += ' WHERE status = ?';
      args.push(status);
    }

    sql += ' ORDER BY created_at DESC LIMIT ?';
    args.push(limit);

    const db = getDb();
    const result = await db.execute({ sql, args });

    const consultations = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
      serviceInterest: row.service_interest,
      description: row.description,
      photoUrls: row.photo_urls ? JSON.parse(row.photo_urls as string) : [],
      preferredContact: row.preferred_contact,
      eventDate: row.event_date,
      status: row.status,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));

    return NextResponse.json({
      success: true,
      consultations,
    });
  } catch (error) {
    console.error('[consult] Error listing consultations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to list consultations' },
      { status: 500 }
    );
  }
}
