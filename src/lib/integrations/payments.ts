type CreateCheckoutParams = {
  amount: number;
  currency?: string;
  description: string;
  customerEmail?: string;
};

type CheckoutResult = {
  success: boolean;
  placeholder: boolean;
  url?: string;
  sessionId?: string;
};

export async function createCheckout(
  params: CreateCheckoutParams
): Promise<CheckoutResult> {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.log(`[PAYMENT PLACEHOLDER] Amount: ${params.amount}, Desc: ${params.description}`);
    return { success: true, placeholder: true, url: '#stripe-placeholder' };
  }

  // Wire Stripe here when ready
  return { success: true, placeholder: true, url: '#stripe-placeholder' };
}

type CaptureDepositParams = {
  amount: number;
  bookingId: string;
  customerEmail: string;
};

export async function captureDeposit(
  params: CaptureDepositParams
): Promise<CheckoutResult> {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.log(`[DEPOSIT PLACEHOLDER] Booking: ${params.bookingId}, Amount: ${params.amount}`);
    return { success: true, placeholder: true };
  }

  // Wire Stripe deposit flow here when ready
  return { success: true, placeholder: true };
}
