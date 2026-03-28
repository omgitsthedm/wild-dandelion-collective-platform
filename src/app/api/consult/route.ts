import { NextResponse } from 'next/server';

/**
 * POST /api/consult
 *
 * Receives a multipart/form-data consultation submission.
 * Placeholder for: save to Turso, upload photos to Netlify Blobs, notify Ashley via SMS.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const submission = {
      serviceCategory: formData.get('serviceCategory') as string,
      description: formData.get('description') as string,
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      preferredContact: formData.get('preferredContact') as string,
      timing: formData.get('timing') as string,
      photoCount: [
        formData.get('photo_0'),
        formData.get('photo_1'),
        formData.get('photo_2'),
      ].filter(Boolean).length,
    };

    // Log submission for now
    console.log('[consult] New consultation submission:', {
      ...submission,
      timestamp: new Date().toISOString(),
    });

    // TODO: Save to Turso database
    // const db = createClient({ url: process.env.TURSO_URL!, authToken: process.env.TURSO_AUTH_TOKEN! });
    // await db.execute({ sql: 'INSERT INTO consultations ...', args: [...] });

    // TODO: Upload photos to Netlify Blobs
    // const photos = [formData.get('photo_0'), formData.get('photo_1'), formData.get('photo_2')].filter(Boolean);
    // for (const photo of photos) { ... }

    // TODO: Notify Ashley via SMS (Twilio)
    // await sendSMS(process.env.ASHLEY_PHONE!, `New consultation from ${submission.firstName} ...`);

    return NextResponse.json({
      success: true,
      consultationId: `consult_${Date.now()}`,
    });
  } catch (error) {
    console.error('[consult] Error processing submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process consultation' },
      { status: 500 }
    );
  }
}
