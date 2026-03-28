'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBooking, useBookingDispatch } from '../BookingContext';
import { services } from '@/data/services';
import { TimeSlot } from '@/design-system/components/TimeSlot';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

type SlotData = {
  time: string;
  available: boolean;
  spotsLeft?: number;
};

/** Placeholder time slots. Saturdays get fewer, weekdays full. */
function getPlaceholderSlots(date: Date | null): SlotData[] {
  const isSaturday = date?.getDay() === 6;

  const allSlots: SlotData[] = [
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true, spotsLeft: 2 },
    { time: '12:00 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true, spotsLeft: 1 },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:00 PM', available: true, spotsLeft: 3 },
  ];

  if (isSaturday) {
    return allSlots.slice(0, 4).map((s, i) => ({
      ...s,
      available: i < 3,
    }));
  }

  return allSlots;
}

export default function TimePage() {
  const router = useRouter();
  const booking = useBooking();
  const dispatch = useBookingDispatch();

  const [selected, setSelected] = useState<string | null>(
    booking.selectedTime ?? null,
  );

  const slots = getPlaceholderSlots(booking.selectedDate);

  const service = booking.selectedService
    ? services.find((s) => s.slug === booking.selectedService)
    : null;

  const dateLabel = booking.selectedDate
    ? booking.selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    : '';

  function handleContinue() {
    if (selected) {
      dispatch({ type: 'setTime', payload: selected });
      router.push('/book/details');
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Choose a time</h1>
        <p className={styles.subtitle}>
          Each time slot is reserved just for you. No double-booking, no
          rushing.
        </p>
      </div>

      {dateLabel && <p className={styles.dateLabel}>{dateLabel}</p>}

      <div className={styles.grid}>
        {slots.map((slot) => (
          <TimeSlot
            key={slot.time}
            time={slot.time}
            available={slot.available}
            selected={selected === slot.time}
            spotsLeft={slot.spotsLeft}
            duration={service?.duration}
            onClick={() => slot.available && setSelected(slot.time)}
          />
        ))}
      </div>

      {selected && (
        <div className={styles.footer}>
          <Button onClick={handleContinue}>Continue</Button>
        </div>
      )}
    </div>
  );
}
