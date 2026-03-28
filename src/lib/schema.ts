export const SCHEMA_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS notes (
    id TEXT PRIMARY KEY,
    square_customer_id TEXT,
    square_booking_id TEXT,
    content TEXT NOT NULL,
    voice_audio_url TEXT,
    voice_transcript TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE TABLE IF NOT EXISTS client_tags (
    id TEXT PRIMARY KEY,
    square_customer_id TEXT NOT NULL,
    tag TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE(square_customer_id, tag)
  )`,

  `CREATE TABLE IF NOT EXISTS consultations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service_interest TEXT,
    description TEXT,
    photo_urls TEXT,
    preferred_contact TEXT,
    event_date TEXT,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE TABLE IF NOT EXISTS rental_inquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    specialty TEXT,
    portfolio_url TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE TABLE IF NOT EXISTS notification_log (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    recipient TEXT NOT NULL,
    subject TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    related_id TEXT,
    sent_at TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE TABLE IF NOT EXISTS admin_sessions (
    id TEXT PRIMARY KEY,
    token_hash TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,

  `CREATE TABLE IF NOT EXISTS product_recommendations (
    id TEXT PRIMARY KEY,
    square_product_id TEXT NOT NULL UNIQUE,
    ashley_note TEXT,
    featured INTEGER DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,
];

export async function runMigrations(db: { execute: (sql: string) => Promise<unknown> }) {
  for (const stmt of SCHEMA_STATEMENTS) {
    await db.execute(stmt);
  }
}
