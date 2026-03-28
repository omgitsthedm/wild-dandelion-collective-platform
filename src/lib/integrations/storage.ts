/**
 * Netlify Blobs storage wrapper.
 * When NETLIFY_BLOBS_TOKEN is missing (local dev), logs and returns mock URLs.
 */

const STORE_NAME = 'wild-dandelion-assets';

function getBlobsAvailable(): boolean {
  return !!(process.env.NETLIFY_BLOBS_TOKEN && process.env.NETLIFY_SITE_ID);
}

/**
 * Upload a blob to Netlify Blobs.
 * Returns the public URL of the stored blob.
 */
export async function uploadBlob(
  key: string,
  data: Buffer | ReadableStream,
  contentType: string,
): Promise<string> {
  if (!getBlobsAvailable()) {
    console.log(`[STORAGE PLACEHOLDER] uploadBlob: key=${key}, contentType=${contentType}`);
    return `https://mock-blobs.local/${STORE_NAME}/${key}`;
  }

  // Wire Netlify Blobs when ready:
  // import { getStore } from '@netlify/blobs';
  // const store = getStore({ name: STORE_NAME, siteID: process.env.NETLIFY_SITE_ID!, token: process.env.NETLIFY_BLOBS_TOKEN! });
  // await store.set(key, data, { metadata: { contentType } });
  // return store.get(key, { type: 'blob' }) URL

  const siteId = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN;

  const raw = Buffer.isBuffer(data) ? data : await streamToBuffer(data as ReadableStream);
  const body = new Uint8Array(raw);

  const response = await fetch(
    `https://api.netlify.com/api/v1/blobs/${siteId}/${STORE_NAME}/${encodeURIComponent(key)}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': contentType,
      },
      body,
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Blob upload failed (${response.status}): ${text}`);
  }

  return `https://api.netlify.com/api/v1/blobs/${siteId}/${STORE_NAME}/${encodeURIComponent(key)}`;
}

/**
 * Get the URL for a stored blob.
 */
export async function getBlobUrl(key: string): Promise<string> {
  if (!getBlobsAvailable()) {
    console.log(`[STORAGE PLACEHOLDER] getBlobUrl: key=${key}`);
    return `https://mock-blobs.local/${STORE_NAME}/${key}`;
  }

  const siteId = process.env.NETLIFY_SITE_ID;
  return `https://api.netlify.com/api/v1/blobs/${siteId}/${STORE_NAME}/${encodeURIComponent(key)}`;
}

/** Helper to convert ReadableStream to Buffer */
async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }

  return Buffer.concat(chunks);
}
