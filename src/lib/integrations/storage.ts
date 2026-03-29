import { getStore } from '@netlify/blobs';

// Netlify Blobs store for consultation photos
function getPhotoStore() {
  // In Netlify environment, this uses the built-in env vars
  // In local dev, you need NETLIFY_BLOBS_TOKEN and NETLIFY_SITE_ID
  return getStore({
    name: 'consultation-photos',
    siteID: process.env.NETLIFY_SITE_ID,
    token: process.env.NETLIFY_BLOBS_TOKEN,
  });
}

function isConfigured(): boolean {
  const hasNetlify = !!(process.env.NETLIFY_BLOBS_TOKEN && process.env.NETLIFY_SITE_ID);
  const isNetlifyDeploy = !!process.env.NETLIFY;
  // In Netlify deploy context, the token is auto-provisioned
  return hasNetlify || isNetlifyDeploy;
}

/**
 * Upload a file to Netlify Blobs
 */
export async function uploadBlob(
  key: string,
  data: Buffer | Blob,
  contentType: string
): Promise<string> {
  if (!isConfigured()) {
    console.log(`[STORAGE PLACEHOLDER] Would upload: ${key} (${contentType})`);
    // Return a placeholder URL that includes the key for debugging
    return `https://placeholder.storage/${key}`;
  }

  try {
    const store = getPhotoStore();
    // Convert Buffer to Blob for Netlify Blobs compatibility
    const blob = data instanceof Buffer 
      ? new Blob([data as unknown as BlobPart], { type: contentType })
      : data;
    await store.set(key, blob as Blob, {
      metadata: { contentType },
    });

    // Return the public URL
    return `https://${process.env.NETLIFY_SITE_ID}.netlify.app/.netlify/blobs/photo/${key}`;
  } catch (error) {
    console.error('[STORAGE] upload error:', error);
    throw new Error(`Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Get a signed URL for a blob
 */
export async function getBlobUrl(key: string): Promise<string | null> {
  if (!isConfigured()) {
    return `https://placeholder.storage/${key}`;
  }

  try {
    const store = getPhotoStore();
    const blob = await store.get(key);
    
    if (!blob) {
      return null;
    }

    // Return the public URL
    return `https://${process.env.NETLIFY_SITE_ID}.netlify.app/.netlify/blobs/photo/${key}`;
  } catch (error) {
    console.error('[STORAGE] get error:', error);
    return null;
  }
}

/**
 * Delete a blob
 */
export async function deleteBlob(key: string): Promise<boolean> {
  if (!isConfigured()) {
    console.log(`[STORAGE PLACEHOLDER] Would delete: ${key}`);
    return true;
  }

  try {
    const store = getPhotoStore();
    await store.delete(key);
    return true;
  } catch (error) {
    console.error('[STORAGE] delete error:', error);
    return false;
  }
}

/**
 * Upload a consultation photo
 * Returns the public URL of the uploaded photo
 */
export async function uploadConsultationPhoto(
  consultationId: string,
  photoIndex: number,
  file: File | Buffer,
  originalName: string
): Promise<string> {
  const extension = originalName.split('.').pop() || 'jpg';
  const key = `consultations/${consultationId}/photo-${photoIndex}.${extension}`;
  
  let buffer: Buffer;
  if (file instanceof File) {
    const arrayBuffer = await file.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  } else {
    buffer = file;
  }

  const contentType = file instanceof File 
    ? file.type 
    : `image/${extension === 'jpg' ? 'jpeg' : extension}`;

  return uploadBlob(key, buffer, contentType);
}

/**
 * List photos for a consultation
 */
export async function listConsultationPhotos(consultationId: string): Promise<string[]> {
  if (!isConfigured()) {
    return [];
  }

  try {
    const store = getPhotoStore();
    const { blobs } = await store.list({
      prefix: `consultations/${consultationId}/`,
    });

    return blobs.map(blob => blob.key);
  } catch (error) {
    console.error('[STORAGE] list error:', error);
    return [];
  }
}
