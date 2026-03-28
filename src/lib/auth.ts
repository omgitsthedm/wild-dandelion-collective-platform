import { randomBytes, scrypt, timingSafeEqual } from 'crypto';

const SALT_LENGTH = 16;
const KEY_LENGTH = 64;

export async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const salt = randomBytes(SALT_LENGTH).toString('hex');
    scrypt(password, salt, KEY_LENGTH, (err, derived) => {
      if (err) reject(err);
      resolve(`${salt}:${derived.toString('hex')}`);
    });
  });
}

export async function verifyPassword(
  password: string,
  stored: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const [salt, hash] = stored.split(':');
    scrypt(password, salt, KEY_LENGTH, (err, derived) => {
      if (err) reject(err);
      const storedBuf = Buffer.from(hash, 'hex');
      resolve(timingSafeEqual(storedBuf, derived));
    });
  });
}

export function generateSessionToken(): string {
  return randomBytes(32).toString('hex');
}

export async function hashToken(token: string): Promise<string> {
  const { createHash } = await import('crypto');
  return createHash('sha256').update(token).digest('hex');
}

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function sessionExpiresAt(): string {
  return new Date(Date.now() + SESSION_DURATION_MS).toISOString();
}

export const SESSION_COOKIE_NAME = 'wd_admin_session';
