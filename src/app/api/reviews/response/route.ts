/**
 * Review Response Webhook
 * Handles incoming SMS responses from clients
 * Processes satisfaction ratings and routes accordingly
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendSms } from '@/lib/integrations/sms';

// Using Node.js runtime for Twilio SDK compatibility

// In-memory store for active review requests (use Redis in production)
const activeReviewRequests = new Map<string, {
  clientName: string;
  serviceType: string;
  timestamp: string;
}>();

/**
 * Webhook endpoint for Twilio incoming SMS
 * Processes client satisfaction responses
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse Twilio webhook payload
    const formData = await request.formData();
    const from = formData.get('From') as string;
    const body = (formData.get('Body') as string || '').trim();
    
    if (!from || !body) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get client data from active requests
    const clientData = activeReviewRequests.get(from);
    
    if (!clientData) {
      // No active review request - send generic response
      await sendGenericResponse(from);
      return NextResponse.json({ success: true });
    }

    // Process satisfaction response
    await processSatisfactionResponse(from, body, clientData);
    
    // Remove from active requests
    activeReviewRequests.delete(from);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Review response webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Process client's satisfaction rating
 */
async function processSatisfactionResponse(
  phone: string,
  response: string,
  clientData: { clientName: string; serviceType: string; timestamp: string }
): Promise<void> {
  const normalizedResponse = response.toUpperCase();
  const firstName = clientData.clientName.split(' ')[0];
  
  // Parse numeric rating
  const rating = parseInt(normalizedResponse);
  
  // Determine satisfaction level
  const isHighlySatisfied = 
    normalizedResponse === 'LOVE' ||
    normalizedResponse === 'YES' ||
    (!isNaN(rating) && rating >= 4);

  const isNeutral = !isNaN(rating) && rating === 3;
  const isUnsatisfied = !isNaN(rating) && rating <= 2;

  if (isHighlySatisfied) {
    // Send Google review request
    const reviewUrl = process.env.GOOGLE_REVIEW_URL || 
      'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID';
    
    await sendSms({
      to: phone,
      body: `Thank you so much ${firstName}! 🌟 

Would you mind sharing your experience on Google? It helps other Longmont locals find us!

${reviewUrl}

You are entered in our monthly product giveaway! 🎁

- Ashley 💕`,
    });

    console.log(`✓ Review request sent to satisfied client: ${clientData.clientName}`);
    
  } else if (isNeutral || isUnsatisfied) {
    // Send internal feedback request
    await sendSms({
      to: phone,
      body: `Hi ${firstName}, thank you for your honest feedback. 

I want to make sure every client leaves thrilled. Would you be open to a quick call so I can understand what happened and make it right?

Reply YES or call me at (303) 834-7572.

- Ashley 💕`,
    });

    // Alert Ashley
    await sendSms({
      to: process.env.ASHLEY_PHONE_NUMBER || '',
      body: `⚠️ Client feedback needed: ${clientData.clientName} (${phone}) rated their ${clientData.serviceType} ${isNaN(rating) ? '"' + response + '"' : rating + '/5'}. Follow up required.`,
    });

    console.log(`⚠️ Feedback request sent to unsatisfied client: ${clientData.clientName}`);
  } else {
    // Unclear response - ask for clarity
    await sendSms({
      to: phone,
      body: `Hi ${firstName}! I want to make sure I understand - could you reply with a number 1-5 (5 = loved it) or just say LOVE if you were thrilled? Thanks! 💕`,
    });
  }
}

/**
 * Send generic response for unrecognized numbers
 */
async function sendGenericResponse(phone: string): Promise<void> {
  await sendSms({
    to: phone,
    body: `Hi there! 👋 This is The Wild Dandelion. If you are looking to book an appointment, please call us at (303) 834-7572 or visit our website. We look forward to seeing you! 💕`,
  });
}

/**
 * Store active review request (called when initial review SMS is sent)
 */
export function storeReviewRequest(
  phone: string,
  clientName: string,
  serviceType: string
): void {
  activeReviewRequests.set(phone, {
    clientName,
    serviceType,
    timestamp: new Date().toISOString(),
  });

  // Auto-expire after 7 days
  setTimeout(() => {
    activeReviewRequests.delete(phone);
  }, 7 * 24 * 60 * 60 * 1000);
}

/**
 * GET endpoint for webhook verification
 * Required for some SMS provider setups
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ 
    status: 'Review response webhook active',
    timestamp: new Date().toISOString(),
  });
}
