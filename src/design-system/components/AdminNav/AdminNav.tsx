'use client';

import Link from 'next/link';
import styles from './AdminNav.module.css';

type AdminNavProps = {
  currentPath: string;
  badges?: Record<string, number>;
};

const tabs = [
  { label: 'Today', href: '/admin', icon: 'today' },
  { label: 'Bookings', href: '/admin/bookings', icon: 'bookings' },
  { label: 'Clients', href: '/admin/clients', icon: 'clients' },
  { label: 'More', href: '/admin/settings', icon: 'more' },
] as const;

function isActive(currentPath: string, href: string): boolean {
  if (href === '/admin') return currentPath === '/admin';
  return currentPath.startsWith(href);
}

function TabIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'today':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 7h16" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'bookings':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 7h14" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 1v4M13 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'clients':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'more':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function AdminNav({ currentPath, badges }: AdminNavProps) {
  return (
    <nav className={styles.nav} aria-label="Admin navigation">
      {tabs.map((tab) => {
        const active = isActive(currentPath, tab.href);
        const badge = badges?.[tab.label.toLowerCase()];
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${styles.tab} ${active ? styles.active : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className={styles.iconWrap}>
              <TabIcon icon={tab.icon} />
              {badge && badge > 0 && (
                <span className={styles.badge} aria-label={`${badge} pending`}>
                  {badge > 99 ? '99+' : badge}
                </span>
              )}
            </span>
            <span className={styles.label}>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
