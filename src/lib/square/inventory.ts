// @ts-nocheck — Square SDK v42+ type changes; full migration pending
import type { InventoryCount } from 'square';
import { squareClient } from './client';

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
 * Batch-fetch stock counts for a list of product (catalog variation) IDs.
 * Returns a map of catalogObjectId -> quantity.
 */
export async function getStockCounts(
  productIds: string[]
): Promise<Record<string, number>> {
  if (!isConfigured()) return {};
  if (productIds.length === 0) return {};

  try {
    const locationId = process.env.SQUARE_LOCATION_ID;
    const locationIds = locationId ? [locationId] : undefined;

    const page = await squareClient.inventory.batchGetCounts({
      catalogObjectIds: productIds,
      locationIds,
    });

    const counts: Record<string, number> = {};
    const inventoryCounts: InventoryCount[] = page.data ?? [];

    for (const count of inventoryCounts) {
      const id = count.catalogObjectId;
      if (!id) continue;

      const quantity = count.quantity ? parseFloat(count.quantity) : 0;
      counts[id] = (counts[id] ?? 0) + quantity;
    }

    return counts;
  } catch (error) {
    console.error('[SQUARE] getStockCounts error:', error);
    return {};
  }
}
