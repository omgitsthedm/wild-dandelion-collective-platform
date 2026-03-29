import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-03-25.dahlia',
    })
  : null;

type CreateCheckoutParams = {
  amount: number;
  currency?: string;
  description: string;
  customerEmail?: string;
  successUrl?: string;
  cancelUrl?: string;
  metadata?: Record<string, string>;
};

type CheckoutResult = {
  success: boolean;
  placeholder: boolean;
  url?: string;
  sessionId?: string;
  error?: string;
};

export async function createCheckout(
  params: CreateCheckoutParams
): Promise<CheckoutResult> {
  if (!stripe) {
    console.log(`[PAYMENT PLACEHOLDER] Amount: ${params.amount}, Desc: ${params.description}`);
    return { success: true, placeholder: true, url: '#stripe-placeholder' };
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: params.currency || 'usd',
            product_data: {
              name: params.description,
            },
            unit_amount: Math.round(params.amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: params.successUrl || `${process.env.NEXT_PUBLIC_URL}/book/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: params.cancelUrl || `${process.env.NEXT_PUBLIC_URL}/book/deposit`,
      customer_email: params.customerEmail,
      metadata: params.metadata || {},
    });

    return {
      success: true,
      placeholder: false,
      url: session.url || undefined,
      sessionId: session.id,
    };
  } catch (error) {
    console.error('[STRIPE] createCheckout error:', error);
    return {
      success: false,
      placeholder: false,
      error: error instanceof Error ? error.message : 'Payment creation failed',
    };
  }
}

type CaptureDepositParams = {
  amount: number;
  bookingId: string;
  customerEmail: string;
  customerName?: string;
  serviceName?: string;
  appointmentDate?: string;
};

export async function captureDeposit(
  params: CaptureDepositParams
): Promise<CheckoutResult> {
  if (!stripe) {
    console.log(`[DEPOSIT PLACEHOLDER] Booking: ${params.bookingId}, Amount: ${params.amount}`);
    return { success: true, placeholder: true };
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Booking Deposit - ${params.serviceName || 'Appointment'}`,
              description: `Deposit for appointment on ${params.appointmentDate || 'TBD'}`,
            },
            unit_amount: Math.round(params.amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/book/confirmation?session_id={CHECKOUT_SESSION_ID}&booking_id=${params.bookingId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/book/deposit?booking_id=${params.bookingId}`,
      customer_email: params.customerEmail,
      metadata: {
        bookingId: params.bookingId,
        type: 'deposit',
        customerName: params.customerName || '',
        serviceName: params.serviceName || '',
      },
    });

    return {
      success: true,
      placeholder: false,
      url: session.url || undefined,
      sessionId: session.id,
    };
  } catch (error) {
    console.error('[STRIPE] captureDeposit error:', error);
    return {
      success: false,
      placeholder: false,
      error: error instanceof Error ? error.message : 'Deposit capture failed',
    };
  }
}

/**
 * Verify a checkout session was successfully paid
 */
export async function verifyCheckout(sessionId: string): Promise<{
  success: boolean;
  paid: boolean;
  amount?: number;
  customerEmail?: string;
  metadata?: Record<string, string>;
  error?: string;
}> {
  if (!stripe) {
    return { success: true, paid: true }; // Placeholder mode
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    return {
      success: true,
      paid: session.payment_status === 'paid',
      amount: session.amount_total ? session.amount_total / 100 : undefined,
      customerEmail: session.customer_email || undefined,
      metadata: session.metadata || undefined,
    };
  } catch (error) {
    console.error('[STRIPE] verifyCheckout error:', error);
    return {
      success: false,
      paid: false,
      error: error instanceof Error ? error.message : 'Verification failed',
    };
  }
}
