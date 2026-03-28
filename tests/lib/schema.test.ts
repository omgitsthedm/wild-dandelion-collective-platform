import { describe, it, expect } from 'vitest';
import { SCHEMA_STATEMENTS } from '@/lib/schema';

describe('schema', () => {
  it('exports an array of SQL statements', () => {
    expect(Array.isArray(SCHEMA_STATEMENTS)).toBe(true);
    expect(SCHEMA_STATEMENTS.length).toBeGreaterThan(0);
  });

  it('includes all required tables', () => {
    const joined = SCHEMA_STATEMENTS.join(' ');
    expect(joined).toContain('CREATE TABLE');
    expect(joined).toContain('notes');
    expect(joined).toContain('client_tags');
    expect(joined).toContain('consultations');
    expect(joined).toContain('rental_inquiries');
    expect(joined).toContain('notification_log');
    expect(joined).toContain('admin_sessions');
    expect(joined).toContain('product_recommendations');
  });

  it('each statement is valid SQL starting with CREATE TABLE', () => {
    for (const stmt of SCHEMA_STATEMENTS) {
      expect(stmt.trim()).toMatch(/^CREATE TABLE IF NOT EXISTS/);
    }
  });
});
