import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Bookings — Wild Dandelion Admin',
};

type BookingStatus = 'confirmed' | 'pending' | 'cancelled' | 'completed';

type Booking = {
  id: string;
  date: string;
  time: string;
  client: string;
  service: string;
  status: BookingStatus;
};

/* Placeholder data */
const bookings: Booking[] = [
  { id: 'bk-001', date: '2026-03-28', time: '10:00 AM', client: 'Megan Torres', service: 'Balayage + Toner', status: 'confirmed' },
  { id: 'bk-002', date: '2026-03-28', time: '1:00 PM', client: 'Sarah Kim', service: 'Haircut + Style', status: 'confirmed' },
  { id: 'bk-003', date: '2026-03-28', time: '2:45 PM', client: 'Lauren Adams', service: 'Color Correction', status: 'pending' },
  { id: 'bk-004', date: '2026-03-28', time: '6:00 PM', client: 'Jessica Reyes', service: 'Bridal Trial', status: 'confirmed' },
  { id: 'bk-005', date: '2026-03-29', time: '11:00 AM', client: 'Emily Chen', service: 'Highlights + Cut', status: 'pending' },
  { id: 'bk-006', date: '2026-03-30', time: '9:00 AM', client: 'Nina Patel', service: 'Root Touch-Up', status: 'pending' },
  { id: 'bk-007', date: '2026-03-25', time: '10:00 AM', client: 'Ava Brooks', service: 'Full Color', status: 'completed' },
  { id: 'bk-008', date: '2026-03-20', time: '3:00 PM', client: 'Lily Thompson', service: 'Haircut', status: 'cancelled' },
];

const filters: { label: string; value: string }[] = [
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Past', value: 'past' },
  { label: 'Pending', value: 'pending' },
  { label: 'Cancelled', value: 'cancelled' },
];

const badgeClass: Record<BookingStatus, string> = {
  confirmed: styles.badgeConfirmed,
  pending: styles.badgePending,
  cancelled: styles.badgeCancelled,
  completed: styles.badgeCompleted,
};

function formatBookingDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return {
    day: d.getDate().toString(),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  };
}

export default function BookingsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Bookings</h1>

      <div className={styles.filters}>
        {filters.map((f, i) => (
          <button
            key={f.value}
            className={`${styles.filterTab} ${i === 0 ? styles.filterTabActive : ''}`}
            type="button"
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {bookings.map((booking) => {
          const { day, month } = formatBookingDate(booking.date);
          return (
            <Link
              key={booking.id}
              href={`/admin/bookings/${booking.id}`}
              className={styles.bookingRow}
            >
              <div className={styles.bookingDate}>
                <span className={styles.bookingDay}>{day}</span>
                <span className={styles.bookingMonth}>{month}</span>
              </div>
              <div className={styles.bookingInfo}>
                <span className={styles.bookingClient}>{booking.client}</span>
                <span className={styles.bookingMeta}>
                  {booking.time} &middot; {booking.service}
                </span>
              </div>
              <span className={`${styles.badge} ${badgeClass[booking.status]}`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
