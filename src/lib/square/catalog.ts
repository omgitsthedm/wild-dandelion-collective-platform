// @ts-nocheck — Square SDK v42+ type changes; full migration pending
import type { CatalogObject } from 'square';
import { squareClient } from './client';
import type { SquareProduct, SquareService } from './types';

function isConfigured(): boolean {
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    console.warn(
      '[SQUARE] SQUARE_ACCESS_TOKEN is not set — returning mock data'
    );
    return false;
  }
  return true;
}

/** Convert BigInt-safe value to "$X.XX". */
function formatPrice(cents: bigint | number | undefined | null): string {
  const n = cents === undefined || cents === null ? 0 : Number(cents);
  return `$${(n / 100).toFixed(2)}`;
}

/** Convert BigInt-safe value to number. */
function toNumber(value: bigint | number | undefined | null): number {
  if (value === undefined || value === null) return 0;
  return typeof value === 'bigint' ? Number(value) : value;
}

/**
 * Fetch all service-type catalog items (for bookings).
 */
export async function listServices(): Promise<SquareService[]> {
  if (!isConfigured()) return [];

  try {
    const page = await squareClient.catalog.list({ types: 'ITEM' });
    const objects: CatalogObject[] = page.data ?? [];

    const services: SquareService[] = [];

    for (const obj of objects) {
      const itemData = obj.itemData;
      if (!itemData) continue;

      // Only include service items
      if (
        itemData.productType !== 'APPOINTMENTS_SERVICE' &&
        itemData.productType !== undefined
      ) {
        if (itemData.productType !== undefined) continue;
      }

      for (const variation of itemData.variations ?? []) {
        const varData = variation.itemVariationData;
        if (!varData) continue;

        const priceCents = toNumber(varData.priceMoney?.amount);
        const rawDuration = toNumber(varData.serviceDuration);
        // Square stores service duration in milliseconds
        const durationMinutes =
          rawDuration > 1000 ? Math.round(rawDuration / 60000) : rawDuration;

        services.push({
          id: variation.id ?? '',
          name: itemData.name ?? '',
          durationMinutes,
          priceCents,
          priceFormatted: formatPrice(varData.priceMoney?.amount),
          description:
            itemData.descriptionPlaintext ?? itemData.description ?? '',
          category: itemData.categoryId ?? '',
        });
      }
    }

    return services;
  } catch (error) {
    console.error('[SQUARE] listServices error:', error);
    return [];
  }
}

/** Resolve a single image URL by catalog object ID (best-effort). */
async function resolveImageUrl(
  imageId: string
): Promise<string | undefined> {
  try {
    const res = await squareClient.catalog.object.get({
      objectId: imageId,
    });
    return res.object?.imageData?.url ?? undefined;
  } catch {
    return undefined;
  }
}

/**
 * Fetch all product-type catalog items (for retail / e-commerce).
 */
export async function listProducts(): Promise<SquareProduct[]> {
  if (!isConfigured()) return [];

  try {
    const page = await squareClient.catalog.list({ types: 'ITEM' });
    const objects: CatalogObject[] = page.data ?? [];

    const products: SquareProduct[] = [];

    for (const obj of objects) {
      const itemData = obj.itemData;
      if (!itemData) continue;

      // Skip service items
      if (itemData.productType === 'APPOINTMENTS_SERVICE') continue;

      for (const variation of itemData.variations ?? []) {
        const varData = variation.itemVariationData;
        if (!varData) continue;

        const priceCents = toNumber(varData.priceMoney?.amount);

        let imageUrl: string | undefined;
        const imageIds = itemData.imageIds;
        if (imageIds && imageIds.length > 0) {
          imageUrl = await resolveImageUrl(imageIds[0]);
        }

        products.push({
          id: variation.id ?? '',
          name: `${itemData.name ?? ''}${varData.name && varData.name !== 'Regular' ? ` - ${varData.name}` : ''}`,
          description:
            itemData.descriptionPlaintext ?? itemData.description ?? '',
          priceCents,
          priceFormatted: formatPrice(varData.priceMoney?.amount),
          imageUrl,
          category: itemData.categoryId ?? '',
          inStock: true,
          stockCount: undefined,
        });
      }
    }

    return products;
  } catch (error) {
    console.error('[SQUARE] listProducts error:', error);
    return [];
  }
}

/**
 * Fetch a single product by its catalog object ID.
 */
export async function getProduct(
  productId: string
): Promise<SquareProduct | null> {
  if (!isConfigured()) return null;

  try {
    const response = await squareClient.catalog.object.get({
      objectId: productId,
      includeRelatedObjects: true,
    });
    const obj = response.object;
    if (!obj) return null;

    const itemData = obj.itemData;
    const varData = obj.itemVariationData;

    if (varData) {
      const priceCents = toNumber(varData.priceMoney?.amount);
      const parentId = varData.itemId;
      let name = varData.name ?? '';
      let description = '';
      let category = '';
      let imageUrl: string | undefined;

      if (parentId) {
        try {
          const parentRes = await squareClient.catalog.object.get({
            objectId: parentId,
            includeRelatedObjects: true,
          });
          const parentItem = parentRes.object?.itemData;
          if (parentItem) {
            name = parentItem.name ?? name;
            description =
              parentItem.descriptionPlaintext ??
              parentItem.description ??
              '';
            category = parentItem.categoryId ?? '';

            if (parentItem.imageIds?.[0]) {
              imageUrl = await resolveImageUrl(parentItem.imageIds[0]);
            }
          }
        } catch {
          // Best-effort parent lookup
        }
      }

      return {
        id: obj.id ?? productId,
        name,
        description,
        priceCents,
        priceFormatted: formatPrice(varData.priceMoney?.amount),
        imageUrl,
        category,
        inStock: true,
        stockCount: undefined,
      };
    }

    if (itemData) {
      const firstVariation = itemData.variations?.[0];
      const firstVarData = firstVariation?.itemVariationData;
      const priceCents = toNumber(firstVarData?.priceMoney?.amount);

      let imageUrl: string | undefined;
      if (itemData.imageIds?.[0]) {
        imageUrl = await resolveImageUrl(itemData.imageIds[0]);
      }

      return {
        id: firstVariation?.id ?? obj.id ?? productId,
        name: itemData.name ?? '',
        description:
          itemData.descriptionPlaintext ?? itemData.description ?? '',
        priceCents,
        priceFormatted: formatPrice(firstVarData?.priceMoney?.amount),
        imageUrl,
        category: itemData.categoryId ?? '',
        inStock: true,
        stockCount: undefined,
      };
    }

    return null;
  } catch (error) {
    console.error('[SQUARE] getProduct error:', error);
    return null;
  }
}
