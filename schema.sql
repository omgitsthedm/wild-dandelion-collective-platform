-- The Wild Dandelion Collective Database Schema
-- Run this in Turso: turso db shell your-db-name < schema.sql

-- Client/booking notes (with optional voice recording)
CREATE TABLE IF NOT EXISTS notes (
  id TEXT PRIMARY KEY,
  square_customer_id TEXT,
  square_booking_id TEXT,
  content TEXT NOT NULL,
  voice_audio_url TEXT,
  voice_transcript TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Custom tags for client categorization
CREATE TABLE IF NOT EXISTS client_tags (
  id TEXT PRIMARY KEY,
  square_customer_id TEXT NOT NULL,
  tag TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(square_customer_id, tag)
);

-- Extension/color change consultation requests
CREATE TABLE IF NOT EXISTS consultations (
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
);

-- Studio/station rental inquiries
CREATE TABLE IF NOT EXISTS rental_inquiries (
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
);

-- Audit log for all outbound notifications
CREATE TABLE IF NOT EXISTS notification_log (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  recipient TEXT NOT NULL,
  subject TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  related_id TEXT,
  sent_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Admin session tokens (7-day expiry)
CREATE TABLE IF NOT EXISTS admin_sessions (
  id TEXT PRIMARY KEY,
  token_hash TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Ashley's featured product picks
CREATE TABLE IF NOT EXISTS product_recommendations (
  id TEXT PRIMARY KEY,
  square_product_id TEXT NOT NULL UNIQUE,
  ashley_note TEXT,
  featured INTEGER DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Square bookings sync (for reminders/notifications)
CREATE TABLE IF NOT EXISTS bookings_sync (
  id TEXT PRIMARY KEY,
  square_booking_id TEXT NOT NULL UNIQUE,
  customer_id TEXT,
  service_name TEXT,
  start_at TEXT NOT NULL,
  status TEXT DEFAULT 'ACCEPTED',
  reminder_sent INTEGER DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Square customers sync
CREATE TABLE IF NOT EXISTS customers_sync (
  id TEXT PRIMARY KEY,
  square_customer_id TEXT NOT NULL UNIQUE,
  name TEXT,
  email TEXT,
  phone TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);
CREATE INDEX IF NOT EXISTS idx_rental_inquiries_status ON rental_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_notes_customer ON notes(square_customer_id);
CREATE INDEX IF NOT EXISTS idx_bookings_start ON bookings_sync(start_at);
CREATE INDEX IF NOT EXISTS idx_notification_log_type ON notification_log(type);
