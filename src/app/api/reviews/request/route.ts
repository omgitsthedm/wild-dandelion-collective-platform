/**
 * Review Request Automation API
 * Sends SMS review requests 24 hours after appointment
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendSms } from '@/lib/integrations/sms';

// Using Node.js runtime for Twilio SDK compatibility

interface ReviewRequestPayload {
  clientName: string;
  clientPhone: string;
  appointmentDate: string;
  serviceType: string;
  stylistName: string;
}

/**
 * Send review request SMS to client
 * Triggered 24 hours after appointment completion
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const payload: ReviewRequestPayload = await request.json();
    
    // Validate required fields
    if (!payload.clientName || !payload.clientPhone) {
      return NextResponse.json(
        { error: 'Client name and phone are required' },
        { status: 400 }
      );
    }

    // Format phone number (E.164 format)
    const formattedPhone = formatPhoneNumber(payload.clientPhone);
    if (!formattedPhone) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Send initial satisfaction check SMS
    const satisfactionMessage = generateSatisfactionMessage(payload);
    const satisfactionResult = await sendSms({
      to: formattedPhone,
      body: satisfactionMessage,
    });

    if (!satisfactionResult.success) {
      console.error('Failed to send satisfaction SMS:', satisfactionResult.error);
      return NextResponse.json(
        { error: 'Failed to send review request' },
        { status: 500 }
      );
    }

    // Log the review request for analytics
    await logReviewRequest(payload);

    return NextResponse.json({
      success: true,
      message: 'Review request sent successfully',
      phone: formattedPhone.slice(-4).padStart(formattedPhone.length, '*'), // Masked for security
    });
  } catch (error) {
    console.error('Review request error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Format phone number to E.164 format
 */
function formatPhoneNumber(phone: string): string | null {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Handle US numbers
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`;
  }
  if (cleaned.startsWith('+')) {
    return cleaned;
  }
  
  return null;
}

/**
 * Generate satisfaction check message
 * Asks if they loved their hair (filters negative reviews)
 */
function generateSatisfactionMessage(payload: ReviewRequestPayload): string {
  const firstName = payload.clientName.split(' ')[0];
  
  return `Hi ${firstName}! 👋 It is Ashley from The Wild Dandelion. 

How did you love your ${payload.serviceType} yesterday? 

Reply 1-5 (5 = loved it!) 🌸

Or just reply "LOVE" if you are thrilled! 💕`;
}

/**
 * Generate Google review request message
 * Only sent if client indicates satisfaction
 */
export function generateReviewMessage(payload: ReviewRequestPayload): string {
  const firstName = payload.clientName.split(' ')[0];
  const reviewUrl = 'https://g.page/r/CYlM_your_google_review_link/review'; // Replace with actual GBP review link
  
  return `Thank you so much ${firstName}! 🌟 

Would you mind sharing your experience on Google? It means the world to small businesses like mine and helps other Longmont locals find us!

${reviewUrl}

As a thank you, you are entered into our monthly product giveaway! 🎁

- Ashley & The Wild Dandelion Team 💕`;
}

/**
 * Generate feedback collection message for unsatisfied clients
 * Keeps negative feedback internal
 */
export function generateFeedbackMessage(payload: ReviewRequestPayload): string {
  const firstName = payload.clientName.split(' ')[0];
  
  return `Hi ${firstName}, thank you for your honesty. 

I am committed to making sure every client leaves thrilled. Would you be open to a quick call so I can understand what happened and make it right?

Reply YES and I will call you today, or call me directly at (303) 834-7572.

- Ashley 💕`;
}

/**
 * Log review request for tracking
 */
async function logReviewRequest(payload: ReviewRequestPayload): Promise<void> {
  try {
    // In production, save to database
    const logEntry = {
      timestamp: new Date().toISOString(),
      clientName: payload.clientName,
      clientPhone: payload.clientPhone.slice(-4).padStart(payload.clientPhone.length, '*'), // Masked
      serviceType: payload.serviceType,
      stylistName: payload.stylistName,
      status: 'sent',
    };
    
    console.log('Review request logged:', logEntry);
    
    // TODO: Save to database
    // await db.insert(reviewRequests).values(logEntry);
  } catch (error) {
    console.error('Failed to log review request:', error);
  }
}
