import { describe, it, expect, vi } from 'vitest';

describe('db', () => {
  it('exports a getDb function', async () => {
    vi.stubEnv('TURSO_DATABASE_URL', 'libsql://test.turso.io');
    vi.stubEnv('TURSO_AUTH_TOKEN', 'test-token');

    const { getDb } = await import('@/lib/db');
    expect(typeof getDb).toBe('function');

    vi.unstubAllEnvs();
  });
});
