'use client';

import { useEffect, useState } from 'react';
import { useBooking, useBookingDispatch } from '../BookingContext';
import { services } from '@/data/services';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

export default function ConfirmationPage() {
  const booking = useBooking();
  const dispatch = useBookingDispatch();
  const [notificationSent, setNotificationSent] = useState(false);
  const [isAddingToCalendar, setIsAddingToCalendar] = useState(false);

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

  // Send notification on mount
  useEffect(() => {
    if (
      !notificationSent &&
      service &&
      booking.selectedDate &&
      booking.selectedTime &&
      booking.customerDetails?.email
    ) {
      // Send confirmation notification
      fetch('/api/notify/booking-confirmed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingId: undefined,
          customerEmail: booking.customerDetails.email,
          customerPhone: booking.customerDetails.phone,
          customerName: `${booking.customerDetails.firstName} ${booking.customerDetails.lastName}`,
          serviceName: service.name,
          date: dateLabel,
          time: booking.selectedTime,
        }),
      }).then(() => {
        setNotificationSent(true);
      }).catch((err) => {
        console.error('Failed to send notification:', err);
      });
    }
  }, [notificationSent, service, booking, dateLabel]);

  function handleAddToCalendar() {
    setIsAddingToCalendar(true);
    
    if (!service || !booking.selectedDate || !booking.selectedTime) {
      setIsAddingToCalendar(false);
      return;
    }

    // Parse the time to create proper datetime
    const [timeStr, period] = booking.selectedTime.split(' ');
    const [hours, minutes] = timeStr.split(':').map(Number);
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) hour24 += 12;
    if (period === 'AM' && hours === 12) hour24 = 0;

    const startDate = new Date(booking.selectedDate);
    startDate.setHours(hour24, minutes, 0, 0);

    // Estimate end time (default 1 hour if unknown)
    // Parse duration string (e.g., "30 min+" -> 30, "2 hr+" -> 120)
    const durationMatch = service.duration.match(/(\d+)\s*(min|hr)/i);
    let durationMinutes = 60;
    if (durationMatch) {
      const value = parseInt(durationMatch[1], 10);
      const unit = durationMatch[2].toLowerCase();
      durationMinutes = unit === 'hr' ? value * 60 : value;
    }
    const endDate = new Date(startDate.getTime() + durationMinutes * 60000);

    const event = {
      title: `Hair Appointment - ${service.name}`,
      description: `Your appointment with Ashley at The Wild Dandelion Collective\n\nService: ${service.name}\nLocation: 413 Main St, Longmont, CO 80501\nPhone: (303) 834-7572`,
      location: '413 Main St, Longmont, CO 80501',
      startTime: startDate.toISOString(),
      endTime: endDate.toISOString(),
    };

    // Create Google Calendar link
    const googleUrl = new URL('https://calendar.google.com/calendar/render');
    googleUrl.searchParams.set('action', 'TEMPLATE');
    googleUrl.searchParams.set('text', event.title);
    googleUrl.searchParams.set('dates', `${startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`);
    googleUrl.searchParams.set('details', event.description);
    googleUrl.searchParams.set('location', event.location);

    window.open(googleUrl.toString(), '_blank');
    setIsAddingToCalendar(false);
  }

  function handleReset() {
    dispatch({ type: 'reset' });
  }

  return (
    <div className={styles.page}>
      <div className={styles.checkmark} aria-hidden="true">
        <svg viewBox="0 0 52 52" className={styles.checkmarkSvg}>
          <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
          <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
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
          <span className={booking.depositPaid ? styles.depositPaid : styles.depositStatus}>
            {booking.depositPaid ? '$50 paid ✓' : 'No deposit required'}
          </span>
        </div>
      </div>

      <div className={styles.calendarSection}>
        <p className={styles.calendarText}>
          Add this to your calendar so you don&apos;t forget:
        </p>
        <Button 
          variant="secondary" 
          onClick={handleAddToCalendar}
          disabled={isAddingToCalendar}
        >
          {isAddingToCalendar ? 'Opening...' : 'Add to Google Calendar'}
        </Button>
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

      <div className={styles.contactSection}>
        <p className={styles.contactText}>
          Need to reschedule? Call or text{' '}
          <a href="tel:3038347572" className={styles.contactLink}>
            (303) 834-7572
          </a>
        </p>
        <p className={styles.contactSubtext}>
          Please give at least 48 hours notice for cancellations.
        </p>
      </div>

      <div className={styles.actions}>
        <Button variant="secondary" href="/" onClick={handleReset}>
          Return Home
        </Button>
        <Button href="/services" onClick={handleReset}>
          View Services
        </Button>
      </div>
    </div>
  );
}
