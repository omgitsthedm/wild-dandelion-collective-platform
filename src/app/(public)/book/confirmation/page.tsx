'use client';

import { useBooking, useBookingDispatch } from '../BookingContext';
import { services } from '@/data/services';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

export default function ConfirmationPage() {
  const booking = useBooking();
  const dispatch = useBookingDispatch();

  const service = booking.selectedService
    ? services.find((s) => s.slug === booking.selectedService)
    : null;

  const dateLabel = booking.selectedDate
    ? booking.selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Not selected';

  return (
    <div className={styles.page}>
      <div className={styles.checkmark} aria-hidden="true">
        &#10003;
      </div>

      <h1 className={styles.title}>You are all set</h1>
      <p className={styles.subtitle}>
        Ashley is looking forward to seeing you. Your time is reserved.
      </p>

      <div className={styles.summaryCard}>
        <p className={styles.summaryTitle}>Your appointment</p>

        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Service</span>
          <span className={styles.summaryValue}>
            {service?.name ?? 'Not selected'}
          </span>
        </div>

        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Date</span>
          <span className={styles.summaryValue}>{dateLabel}</span>
        </div>

        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Time</span>
          <span className={styles.summaryValue}>
            {booking.selectedTime ?? 'Not selected'}
          </span>
        </div>

        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Deposit</span>
          <span className={styles.depositStatus}>
            {booking.depositPaid ? '$50 paid' : 'Skipped'}
          </span>
        </div>
      </div>

      <div className={styles.expectSection}>
        <h2 className={styles.expectTitle}>What to expect</h2>
        <p className={styles.expectText}>
          Arrive a few minutes early so you can settle in. Your appointment
          starts with a conversation at the chair where Ashley learns what you
          are looking for. From there she takes care of everything. No rush, no
          upselling, just focused time dedicated to you.
        </p>
      </div>

      <div className={styles.actions}>
        <Button variant="secondary" href="/">
          Return Home
        </Button>
        <Button href="/services">View Services</Button>
      </div>
    </div>
  );
}
