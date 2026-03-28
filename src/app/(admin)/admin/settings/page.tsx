'use client';

import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

export default function SettingsPage() {
  async function handleLogout() {
    /* Placeholder — will call /api/admin/logout */
    document.cookie = 'wd_admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location.href = '/admin/login';
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Settings</h1>

      {/* Notifications */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Notifications</p>

        <div className={styles.toggleRow}>
          <div>
            <p className={styles.toggleLabel}>SMS Notifications</p>
            <p className={styles.toggleSublabel}>New bookings, cancellations, reminders</p>
          </div>
          <label className={styles.switch}>
            <input type="checkbox" className={styles.switchInput} defaultChecked />
            <span className={styles.switchTrack} />
          </label>
        </div>

        <div className={styles.toggleRow}>
          <div>
            <p className={styles.toggleLabel}>Email Notifications</p>
            <p className={styles.toggleSublabel}>Daily summary, inquiry alerts</p>
          </div>
          <label className={styles.switch}>
            <input type="checkbox" className={styles.switchInput} defaultChecked />
            <span className={styles.switchTrack} />
          </label>
        </div>
      </section>

      {/* Quiet Hours */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Quiet Hours</p>
        <div className={styles.quietHours}>
          Notifications paused from{' '}
          <span className={styles.quietHoursTime}>9:00 PM</span> to{' '}
          <span className={styles.quietHoursTime}>8:00 AM</span>
        </div>
      </section>

      {/* Business Info */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Business</p>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Name</span>
          <span className={styles.infoValue}>The Wild Dandelion Collective</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Location</span>
          <span className={styles.infoValue}>Boulder, CO</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Owner</span>
          <span className={styles.infoValue}>Ashley</span>
        </div>
      </section>

      {/* Admin Links */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Admin</p>
        <Button variant="secondary" href="/admin/products" fullWidth>
          Products
        </Button>
        <Button variant="secondary" href="/admin/inquiries" fullWidth>
          Inquiries
        </Button>
      </section>

      {/* Logout */}
      <div className={styles.logoutSection}>
        <Button variant="ghost" fullWidth onClick={handleLogout}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}
