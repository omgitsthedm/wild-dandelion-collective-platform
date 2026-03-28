/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { Availability, Booking } from 'square';
import { squareClient } from './client';
import { findOrCreateCustomer } from './customers';
import type { SquareBooking, SquareTimeSlot } from './types';

function isConfigured(): boolean {
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    console.warn(
      '[SQUARE] SQUARE_ACCESS_TOKEN is not set — returning mock data'
    );
    return false;
  }
  return true;
}

/** Convert BigInt-safe value to number. */
function toNumber(value: bigint | number | undefined | null): number {
  if (value === undefined || value === null) return 0;
  return typeof value === 'bigint' ? Number(value) : value;
}

/** Map a Square Booking + optional customer info into our clean type. */
function mapBooking(
  booking: Booking,
  customer?: { name: string; email: string; phone: string }
): SquareBooking {
  return {
    id: booking.id ?? '',
    status: booking.status ?? '',
    startAt: booking.startAt ?? '',
    customerName: customer?.name ?? '',
    customerEmail: customer?.email ?? '',
    customerPhone: customer?.phone ?? '',
    serviceName: booking.appointmentSegments?.[0]?.serviceVariationId ?? '',
    durationMinutes: toNumber(
      booking.appointmentSegments?.[0]?.durationMinutes
    ),
    note: booking.customerNote ?? undefined,
    createdAt: booking.createdAt ?? '',
  };
}

/** Best-effort customer lookup by ID. */
async function resolveCustomer(
  customerId: string | null | undefined
): Promise<{ name: string; email: string; phone: string }> {
  const empty = { name: '', email: '', phone: '' };
  if (!customerId) return empty;
  try {
    const res = await squareClient.customers.get({ customerId });
    const c = res.customer;
    if (!c) return empty;
    return {
      name: [c.givenName, c.familyName].filter(Boolean).join(' '),
      email: c.emailAddress ?? '',
      phone: c.phoneNumber ?? '',
    };
  } catch {
    return empty;
  }
}

/**
 * Search for available booking time slots within a date range.
 */
export async function getAvailability(
  serviceId: string,
  startDate: string,
  endDate: string
): Promise<SquareTimeSlot[]> {
  if (!isConfigured()) return [];

  try {
    const locationId = process.env.SQUARE_LOCATION_ID;
    if (!locationId) {
      console.warn('[SQUARE] SQUARE_LOCATION_ID is not set');
      return [];
    }

    const response = await squareClient.bookings.searchAvailability({
      query: {
        filter: {
          startAtRange: {
            startAt: new Date(startDate).toISOString(),
            endAt: new Date(endDate).toISOString(),
          },
          locationId,
          segmentFilters: [{ serviceVariationId: serviceId }],
        },
      },
    });

    const availabilities = response.availabilities ?? [];

    return availabilities.map((a: Availability) => ({
      startAt: a.startAt ?? '',
      serviceVariationId:
        a.appointmentSegments?.[0]?.serviceVariationId ?? serviceId,
      teamMemberId: a.appointmentSegments?.[0]?.teamMemberId ?? undefined,
    }));
  } catch (error) {
    console.error('[SQUARE] getAvailability error:', error);
    return [];
  }
}

/**
 * Create a booking for a customer. Creates or finds the customer first.
 */
export async function createBooking(params: {
  serviceVariationId: string;
  startAt: string;
  customerNote?: string;
  customer: {
    givenName: string;
    familyName: string;
    emailAddress: string;
    phoneNumber?: string;
  };
}): Promise<SquareBooking> {
  if (!isConfigured()) {
    console.log('[SQUARE PLACEHOLDER] createBooking:', params);
    return {
      id: 'placeholder-booking-id',
      status: 'ACCEPTED',
      startAt: params.startAt,
      customerName: `${params.customer.givenName} ${params.customer.familyName}`,
      customerEmail: params.customer.emailAddress,
      customerPhone: params.customer.phoneNumber ?? '',
      serviceName: 'Placeholder Service',
      durationMinutes: 60,
      note: params.customerNote,
      createdAt: new Date().toISOString(),
    };
  }

  try {
    const locationId = process.env.SQUARE_LOCATION_ID;
    if (!locationId) throw new Error('SQUARE_LOCATION_ID is not set');

    const customer = await findOrCreateCustomer(params.customer);

    const response = await squareClient.bookings.create({
      booking: {
        startAt: params.startAt,
        locationId,
        customerId: customer.id,
        customerNote: params.customerNote,
        appointmentSegments: [
          { serviceVariationId: params.serviceVariationId },
        ],
      },
      idempotencyKey: `booking-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    });

    const booking = response.booking;
    if (!booking) throw new Error('No booking returned from Square');

    return mapBooking(booking, {
      name: `${params.customer.givenName} ${params.customer.familyName}`,
      email: params.customer.emailAddress,
      phone: params.customer.phoneNumber ?? '',
    });
  } catch (error) {
    console.error('[SQUARE] createBooking error:', error);
    throw error;
  }
}

/**
 * Cancel an existing booking.
 */
export async function cancelBooking(bookingId: string): Promise<void> {
  if (!isConfigured()) {
    console.log('[SQUARE PLACEHOLDER] cancelBooking:', bookingId);
    return;
  }

  try {
    const current = await squareClient.bookings.get({ bookingId });
    const version = current.booking?.version;

    await squareClient.bookings.cancel({
      bookingId,
      bookingVersion: version ?? undefined,
    });
  } catch (error) {
    console.error('[SQUARE] cancelBooking error:', error);
    throw error;
  }
}

/**
 * Retrieve a single booking by ID.
 */
export async function getBooking(bookingId: string): Promise<SquareBooking> {
  if (!isConfigured()) {
    return {
      id: bookingId,
      status: 'PLACEHOLDER',
      startAt: new Date().toISOString(),
      customerName: 'Placeholder Customer',
      customerEmail: 'placeholder@example.com',
      customerPhone: '',
      serviceName: 'Placeholder Service',
      durationMinutes: 60,
      createdAt: new Date().toISOString(),
    };
  }

  try {
    const response = await squareClient.bookings.get({ bookingId });
    const booking = response.booking;
    if (!booking) throw new Error(`Booking ${bookingId} not found`);

    const customer = await resolveCustomer(booking.customerId);
    return mapBooking(booking, customer);
  } catch (error) {
    console.error('[SQUARE] getBooking error:', error);
    throw error;
  }
}

/**
 * List upcoming bookings from today forward.
 */
export async function listUpcomingBookings(): Promise<SquareBooking[]> {
  if (!isConfigured()) return [];

  try {
    const locationId = process.env.SQUARE_LOCATION_ID;
    if (!locationId) {
      console.warn('[SQUARE] SQUARE_LOCATION_ID is not set');
      return [];
    }

    const page = await squareClient.bookings.list({
      locationId,
      startAtMin: new Date().toISOString(),
    });

    const bookings: Booking[] = page.data ?? [];

    return Promise.all(
      bookings.map(async (booking: Booking) => {
        const customer = await resolveCustomer(booking.customerId);
        return mapBooking(booking, customer);
      })
    );
  } catch (error) {
    console.error('[SQUARE] listUpcomingBookings error:', error);
    return [];
  }
}
