import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/design-system/components/Card';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Dashboard — Wild Dandelion Admin',
};

/* Placeholder data — will be wired to Square/Turso */
const nextAppointment = {
  client: 'Megan Torres',
  service: 'Balayage + Toner',
  time: '10:00 AM',
};

const todaySchedule = [
  { time: '10:00', client: 'Megan Torres', service: 'Balayage + Toner', duration: '2.5 hrs', category: 'color' as const },
  { time: '1:00', client: 'Sarah Kim', service: 'Haircut + Style', duration: '1 hr', category: 'cutting' as const },
  { gap: true, label: '45 min break' },
  { time: '2:45', client: 'Lauren Adams', service: 'Color Correction', duration: '3 hrs', category: 'color' as const },
  { time: '6:00', client: 'Jessica Reyes', service: 'Bridal Trial', duration: '2 hrs', category: 'bridal' as const },
] as const;

const actionItems = {
  confirmations: 3,
  consultations: 2,
  rentals: 1,
};

const alerts = [
  'Low stock: Olaplex No. 3 (2 left)',
  'Unconfirmed booking: Lauren Adams, tomorrow 11 AM',
];

const weeklyStats = {
  bookings: 18,
  revenue: '$4,260',
  newClients: 4,
};

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function formatDate(): string {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export default function AdminDashboard() {
  return (
    <div className={styles.page}>
      {/* Greeting */}
      <div className={styles.greeting}>
        <h1 className={styles.greetingText}>{getGreeting()}, Ashley</h1>
        <p className={styles.dateText}>{formatDate()}</p>
      </div>

      {/* Next Up */}
      <section>
        <p className={styles.nextUpLabel}>Next up</p>
        <Card variant="elevated">
          <div className={styles.nextUpCard}>
            <span className={styles.nextUpTime}>{nextAppointment.time}</span>
            <span className={styles.nextUpClient}>{nextAppointment.client}</span>
            <span className={styles.nextUpService}>{nextAppointment.service}</span>
          </div>
        </Card>
      </section>

      {/* Today's Schedule */}
      <section className={styles.scheduleSection}>
        <p className={styles.sectionTitle}>Today&rsquo;s Schedule</p>
        <div className={styles.timeline}>
          {todaySchedule.map((item, i) => {
            if ('gap' in item && item.gap) {
              return (
                <div key={`gap-${i}`} className={styles.timelineGap}>
                  {item.label}
                </div>
              );
            }
            if ('time' in item) {
              return (
                <div
                  key={`appt-${i}`}
                  className={styles.timelineItem}
                  data-category={item.category}
                >
                  <span className={styles.timelineTime}>{item.time}</span>
                  <div className={styles.timelineDetails}>
                    <span className={styles.timelineClient}>{item.client}</span>
                    <span className={styles.timelineService}>{item.service}</span>
                    <span className={styles.timelineDuration}>{item.duration}</span>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* Action Items */}
      <section>
        <p className={styles.sectionTitle}>Action Items</p>
        <div className={styles.actionItems}>
          <Link href="/admin/bookings?filter=pending" className={styles.actionCard}>
            <span className={styles.actionCount}>{actionItems.confirmations}</span>
            <span className={styles.actionLabel}>Pending</span>
          </Link>
          <Link href="/admin/inquiries?tab=consultations" className={styles.actionCard}>
            <span className={styles.actionCount}>{actionItems.consultations}</span>
            <span className={styles.actionLabel}>Consults</span>
          </Link>
          <Link href="/admin/inquiries?tab=rental" className={styles.actionCard}>
            <span className={styles.actionCount}>{actionItems.rentals}</span>
            <span className={styles.actionLabel}>Rentals</span>
          </Link>
        </div>
      </section>

      {/* Alerts */}
      {alerts.length > 0 && (
        <section className={styles.alerts}>
          <p className={styles.alertsTitle}>Heads up</p>
          {alerts.map((alert, i) => (
            <p key={i} className={styles.alertItem}>{alert}</p>
          ))}
        </section>
      )}

      {/* Quick Stats */}
      <section>
        <p className={styles.sectionTitle}>This Week</p>
        <div className={styles.quickStats}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{weeklyStats.bookings}</span>
            <span className={styles.statLabel}>Bookings</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{weeklyStats.revenue}</span>
            <span className={styles.statLabel}>Revenue</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{weeklyStats.newClients}</span>
            <span className={styles.statLabel}>New Clients</span>
          </div>
        </div>
      </section>
    </div>
  );
}
