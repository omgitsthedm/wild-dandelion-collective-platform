'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/design-system/components/Card';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

/* Placeholder data — will come from Square/Turso by booking id */
const booking = {
  id: 'bk-001',
  client: 'Megan Torres',
  clientId: 'cl-001',
  service: 'Balayage + Toner',
  date: 'Saturday, March 28, 2026',
  time: '10:00 AM',
  duration: '2.5 hours',
  deposit: 'Paid ($75)',
  status: 'confirmed' as const,
  notes: '',
};

export default function BookingDetailPage() {
  const [showToast, setShowToast] = useState(false);

  function handleVoiceNote() {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  }

  return (
    <div className={styles.page}>
      <Link href="/admin/bookings" className={styles.backLink}>
        &larr; Bookings
      </Link>

      <Card variant="elevated">
        <div className={styles.infoCard}>
          <Link href={`/admin/clients/${booking.clientId}`} className={styles.clientLink}>
            {booking.client}
          </Link>

          <span
            className={`${styles.badge} ${
              booking.status === 'confirmed' ? styles.badgeConfirmed : styles.badgePending
            }`}
          >
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>

          <div className={styles.detailGrid}>
            <span className={styles.detailLabel}>Service</span>
            <span className={styles.detailValue}>{booking.service}</span>
            <span className={styles.detailLabel}>Date</span>
            <span className={styles.detailValue}>{booking.date}</span>
            <span className={styles.detailLabel}>Time</span>
            <span className={styles.detailValue}>{booking.time}</span>
            <span className={styles.detailLabel}>Duration</span>
            <span className={styles.detailValue}>{booking.duration}</span>
            <span className={styles.detailLabel}>Deposit</span>
            <span className={styles.detailValue}>{booking.deposit}</span>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <section className={styles.notesSection}>
        <p className={styles.sectionLabel}>Notes</p>
        <textarea
          className={styles.notesTextarea}
          placeholder="Add notes about this appointment..."
          defaultValue={booking.notes}
        />
        <div className={styles.voiceRow}>
          <button
            type="button"
            className={styles.voiceBtn}
            onClick={handleVoiceNote}
            aria-label="Record voice note"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="7" y="2" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 9a6 6 0 0012 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 15v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <span className={styles.voiceHint}>Hold to record a voice note</span>
        </div>
      </section>

      {/* Actions */}
      <div className={styles.actions}>
        <Button variant="primary" fullWidth>Confirm Booking</Button>
        <Button variant="secondary" fullWidth>Reschedule</Button>
        <Button variant="ghost" fullWidth>Cancel Booking</Button>
      </div>

      {showToast && (
        <div className={styles.toast} role="status" aria-live="polite">
          Voice notes coming soon
        </div>
      )}
    </div>
  );
}
