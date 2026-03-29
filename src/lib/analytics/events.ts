/**
 * Premium Analytics Event Tracking
 * Track user behavior, conversions, and salon-specific metrics
 */

// Event categories
export type EventCategory = 
  | 'booking'
  | 'engagement'
  | 'conversion'
  | 'referral'
  | 'page_view'
  | 'interaction'
  | 'ecommerce';

// Event types
export interface AnalyticsEvent {
  eventName: string;
  category: EventCategory;
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

// Booking funnel events
export const BookingEvents = {
  STARTED: 'booking_started',
  SERVICE_SELECTED: 'booking_service_selected',
  DATE_SELECTED: 'booking_date_selected',
  TIME_SELECTED: 'booking_time_selected',
  DETAILS_COMPLETED: 'booking_details_completed',
  DEPOSIT_PAID: 'booking_deposit_paid',
  CONFIRMED: 'booking_confirmed',
  ABANDONED: 'booking_abandoned',
} as const;

// Engagement events
export const EngagementEvents = {
  CTA_CLICK: 'cta_click',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  GALLERY_VIEW: 'gallery_view',
  GALLERY_IMAGE_CLICK: 'gallery_image_click',
  VIDEO_PLAY: 'video_play',
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
} as const;

// Referral events
export const ReferralEvents = {
  PROGRAM_VIEW: 'referral_program_view',
  LINK_GENERATED: 'referral_link_generated',
  LINK_SHARED: 'referral_link_shared',
  REFERRAL_COMPLETED: 'referral_completed',
  CREDIT_EARNED: 'referral_credit_earned',
} as const;

// Service interest events
export const ServiceEvents = {
  SERVICE_VIEW: 'service_view',
  PRICING_VIEW: 'pricing_view',
  CONSULTATION_REQUEST: 'consultation_request',
  FAQ_EXPAND: 'faq_expand',
} as const;

// Local storage key for session tracking
const SESSION_KEY = 'twd_session_id';
const USER_KEY = 'twd_user_id';

/**
 * Generate or retrieve session ID
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';
  
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

/**
 * Generate or retrieve user ID
 */
export function getUserId(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  
  let userId = localStorage.getItem(USER_KEY);
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(USER_KEY, userId);
  }
  return userId;
}

/**
 * Track an analytics event
 */
export function trackEvent(
  eventName: string,
  category: EventCategory,
  action: string,
  label?: string,
  value?: number,
  metadata?: Record<string, unknown>
): void {
  const event: AnalyticsEvent = {
    eventName,
    category,
    action,
    label,
    value,
    metadata,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    userId: getUserId(),
    path: typeof window !== 'undefined' ? window.location.pathname : '',
    referrer: typeof document !== 'undefined' ? document.referrer : undefined,
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event);
  }

  // Send to analytics endpoint
  sendToAnalytics(event);

  // Also send to Google Analytics 4 if available
  const gtagWindow = window as Window & { gtag?: Function };
  if (typeof window !== 'undefined' && gtagWindow.gtag) {
    gtagWindow.gtag('event', eventName, {
      event_category: category,
      event_action: action,
      event_label: label,
      value,
      ...metadata,
    });
  }
}

/**
 * Send event to analytics API
 */
async function sendToAnalytics(event: AnalyticsEvent): Promise<void> {
  try {
    // Don't block the UI - fire and forget
    fetch('/api/analytics/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
      keepalive: true,
    }).catch(() => {
      // Silently fail - analytics should never break the user experience
    });
  } catch {
    // Ignore errors
  }
}

/**
 * Track booking funnel step
 */
export function trackBookingStep(
  step: string,
  metadata?: { service?: string; date?: string; value?: number }
): void {
  trackEvent(
    step,
    'booking',
    'funnel_progress',
    step,
    metadata?.value,
    metadata
  );
}

/**
 * Track CTA click
 */
export function trackCTA(
  ctaText: string,
  location: string,
  destination?: string
): void {
  trackEvent(
    EngagementEvents.CTA_CLICK,
    'engagement',
    'click',
    ctaText,
    undefined,
    { location, destination }
  );
}

/**
 * Track phone call click
 */
export function trackPhoneClick(location: string): void {
  trackEvent(
    EngagementEvents.PHONE_CLICK,
    'conversion',
    'click',
    '(303) 834-7572',
    undefined,
    { location }
  );
}

/**
 * Track service page view with details
 */
export function trackServiceView(
  serviceName: string,
  price?: string
): void {
  trackEvent(
    ServiceEvents.SERVICE_VIEW,
    'engagement',
    'view',
    serviceName,
    undefined,
    { service: serviceName, price }
  );
}

/**
 * Track gallery interaction
 */
export function trackGalleryView(imageId: string, category: string): void {
  trackEvent(
    EngagementEvents.GALLERY_IMAGE_CLICK,
    'engagement',
    'click',
    category,
    undefined,
    { imageId, category }
  );
}

/**
 * Track referral activity
 */
export function trackReferral(action: string, metadata?: Record<string, unknown>): void {
  trackEvent(
    `referral_${action}`,
    'referral',
    action,
    undefined,
    undefined,
    metadata
  );
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number): void {
  trackEvent(
    EngagementEvents.SCROLL_DEPTH,
    'engagement',
    'scroll',
    `${depth}%`,
    depth
  );
}

/**
 * Track time on page
 */
export function trackTimeOnPage(seconds: number): void {
  trackEvent(
    EngagementEvents.TIME_ON_PAGE,
    'engagement',
    'time',
    undefined,
    seconds,
    { seconds }
  );
}

/**
 * Initialize scroll depth tracking
 */
export function initScrollTracking(): void {
  if (typeof window === 'undefined') return;

  const depths = [25, 50, 75, 90, 100];
  const tracked = new Set<number>();

  const checkScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    depths.forEach((depth) => {
      if (scrollPercent >= depth && !tracked.has(depth)) {
        tracked.add(depth);
        trackScrollDepth(depth);
      }
    });
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
}

/**
 * Initialize time on page tracking
 */
export function initTimeTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const startTime = Date.now();
  const intervals = [30, 60, 120, 180, 300]; // seconds
  const tracked = new Set<number>();

  const interval = setInterval(() => {
    const seconds = Math.round((Date.now() - startTime) / 1000);
    
    intervals.forEach((intervalTime) => {
      if (seconds >= intervalTime && !tracked.has(intervalTime)) {
        tracked.add(intervalTime);
        trackTimeOnPage(intervalTime);
      }
    });
  }, 5000);

  // Return cleanup function
  return () => clearInterval(interval);
}

/**
 * Track outbound link clicks
 */
export function trackOutboundLink(url: string, label?: string): void {
  trackEvent(
    'outbound_link',
    'engagement',
    'click',
    label || url,
    undefined,
    { url }
  );
}

/**
 * Track form submissions
 */
export function trackFormSubmit(
  formName: string,
  success: boolean,
  metadata?: Record<string, unknown>
): void {
  trackEvent(
    success ? 'form_submit_success' : 'form_submit_error',
    'conversion',
    success ? 'submit' : 'error',
    formName,
    undefined,
    { form: formName, success, ...metadata }
  );
}

/**
 * Track ecommerce event (booking as purchase)
 */
export function trackPurchase(
  bookingId: string,
  value: number,
  service: string
): void {
  trackEvent(
    'purchase',
    'ecommerce',
    'purchase',
    service,
    value,
    { bookingId, service, value }
  );

  // Send to GA4 ecommerce
  const gtagWindow = window as Window & { gtag?: Function };
  if (typeof window !== 'undefined' && gtagWindow.gtag) {
    gtagWindow.gtag('event', 'purchase', {
      transaction_id: bookingId,
      value,
      currency: 'USD',
      items: [{
        item_name: service,
        item_category: 'Hair Service',
        price: value,
        quantity: 1,
      }],
    });
  }
}
