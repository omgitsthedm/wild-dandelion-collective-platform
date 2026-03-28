import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword, generateSessionToken } from '@/lib/auth';

describe('auth', () => {
  it('hashes a password and verifies it', async () => {
    const password = 'test-admin-password';
    const hash = await hashPassword(password);

    expect(hash).not.toBe(password);
    expect(await verifyPassword(password, hash)).toBe(true);
  });

  it('rejects wrong password', async () => {
    const hash = await hashPassword('correct');
    expect(await verifyPassword('wrong', hash)).toBe(false);
  });

  it('generates a session token', () => {
    const token = generateSessionToken();
    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(32);
  });

  it('generates unique tokens', () => {
    const a = generateSessionToken();
    const b = generateSessionToken();
    expect(a).not.toBe(b);
  });
});
