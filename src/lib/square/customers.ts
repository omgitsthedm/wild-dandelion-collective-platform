/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { squareClient } from './client';
import type { SquareCustomer } from './types';

function isConfigured(): boolean {
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    console.warn(
      '[SQUARE] SQUARE_ACCESS_TOKEN is not set — returning mock data'
    );
    return false;
  }
  return true;
}

/**
 * Search for a customer by email. If not found, create a new one.
 */
export async function findOrCreateCustomer(params: {
  givenName: string;
  familyName: string;
  emailAddress: string;
  phoneNumber?: string;
}): Promise<SquareCustomer> {
  if (!isConfigured()) {
    console.log('[SQUARE PLACEHOLDER] findOrCreateCustomer:', params);
    return {
      id: 'placeholder-customer-id',
      givenName: params.givenName,
      familyName: params.familyName,
      emailAddress: params.emailAddress,
      phoneNumber: params.phoneNumber,
      createdAt: new Date().toISOString(),
    };
  }

  try {
    const searchResponse = await squareClient.customers.search({
      query: {
        filter: {
          emailAddress: {
            exact: params.emailAddress,
          },
        },
      },
    });

    const existing = searchResponse.customers?.[0];
    if (existing) {
      return {
        id: existing.id ?? '',
        givenName: existing.givenName ?? params.givenName,
        familyName: existing.familyName ?? params.familyName,
        emailAddress: existing.emailAddress ?? params.emailAddress,
        phoneNumber: existing.phoneNumber ?? params.phoneNumber,
        createdAt: existing.createdAt ?? '',
      };
    }

    const createResponse = await squareClient.customers.create({
      givenName: params.givenName,
      familyName: params.familyName,
      emailAddress: params.emailAddress,
      phoneNumber: params.phoneNumber,
      idempotencyKey: `customer-${params.emailAddress}-${Date.now()}`,
    });

    const created = createResponse.customer;
    if (!created) throw new Error('No customer returned from Square');

    return {
      id: created.id ?? '',
      givenName: created.givenName ?? params.givenName,
      familyName: created.familyName ?? params.familyName,
      emailAddress: created.emailAddress ?? params.emailAddress,
      phoneNumber: created.phoneNumber ?? params.phoneNumber,
      createdAt: created.createdAt ?? new Date().toISOString(),
    };
  } catch (error) {
    console.error('[SQUARE] findOrCreateCustomer error:', error);
    throw error;
  }
}

/**
 * Retrieve a single customer by their Square customer ID.
 */
export async function getCustomer(
  customerId: string
): Promise<SquareCustomer | null> {
  if (!isConfigured()) return null;

  try {
    const response = await squareClient.customers.get({ customerId });
    const customer = response.customer;
    if (!customer) return null;

    return {
      id: customer.id ?? '',
      givenName: customer.givenName ?? '',
      familyName: customer.familyName ?? '',
      emailAddress: customer.emailAddress ?? undefined,
      phoneNumber: customer.phoneNumber ?? undefined,
      createdAt: customer.createdAt ?? '',
    };
  } catch (error) {
    console.error('[SQUARE] getCustomer error:', error);
    return null;
  }
}
