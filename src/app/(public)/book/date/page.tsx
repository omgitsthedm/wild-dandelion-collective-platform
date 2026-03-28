'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useBooking, useBookingDispatch } from '../BookingContext';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

/** Placeholder availability: weekdays open, Sat limited (morning only), Sun closed */
function isAvailable(date: Date): boolean {
  const day = date.getDay();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) return false;
  if (day === 0) return false; // Sunday closed
  return true;
}

export default function DatePage() {
  const router = useRouter();
  const booking = useBooking();
  const dispatch = useBookingDispatch();

  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<Date | null>(
    booking.selectedDate ?? null,
  );

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const monthLabel = new Date(viewYear, viewMonth).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  }

  function handleSelect(day: number) {
    const date = new Date(viewYear, viewMonth, day);
    if (!isAvailable(date)) return;
    setSelected(date);
  }

  function handleContinue() {
    if (selected) {
      dispatch({ type: 'setDate', payload: selected });
      router.push('/book/time');
    }
  }

  const isPastMonth =
    viewYear < today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth <= today.getMonth());

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Pick a day</h1>
        <p className={styles.subtitle}>
          Choose a date that works for you. Ashley keeps her schedule
          intentional, so every appointment gets her full attention.
        </p>
      </div>

      <div className={styles.calendar}>
        <div className={styles.calendarNav}>
          <button
            className={styles.navButton}
            onClick={prevMonth}
            disabled={isPastMonth}
            aria-label="Previous month"
            type="button"
            style={isPastMonth ? { opacity: 0.3, cursor: 'not-allowed' } : {}}
          >
            &larr;
          </button>
          <span className={styles.monthLabel}>{monthLabel}</span>
          <button
            className={styles.navButton}
            onClick={nextMonth}
            aria-label="Next month"
            type="button"
          >
            &rarr;
          </button>
        </div>

        <div className={styles.weekdays}>
          {WEEKDAYS.map((wd) => (
            <span key={wd} className={styles.weekday}>
              {wd}
            </span>
          ))}
        </div>

        <div className={styles.days}>
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className={`${styles.day} ${styles.dayEmpty}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const date = new Date(viewYear, viewMonth, dayNum);
            const available = isAvailable(date);
            const isToday =
              date.toDateString() === today.toDateString();
            const isSelected =
              selected?.toDateString() === date.toDateString();

            const dayClasses = [
              styles.day,
              available ? styles.dayAvailable : styles.dayUnavailable,
              isSelected ? styles.daySelected : '',
              isToday ? styles.dayToday : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <button
                key={dayNum}
                className={dayClasses}
                onClick={() => handleSelect(dayNum)}
                disabled={!available}
                type="button"
                aria-label={`${date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}${!available ? ', unavailable' : ''}${isSelected ? ', selected' : ''}`}
                aria-pressed={isSelected}
              >
                <span>{dayNum}</span>
              </button>
            );
          })}
        </div>
      </div>

      {selected && (
        <div className={styles.footer}>
          <Button onClick={handleContinue}>Continue</Button>
        </div>
      )}
    </div>
  );
}
