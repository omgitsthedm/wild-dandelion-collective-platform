import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Clients — Wild Dandelion Admin',
};

type Client = {
  id: string;
  name: string;
  lastVisit: string;
  category: 'color' | 'cutting' | 'bridal';
};

/* Placeholder data */
const clients: Client[] = [
  { id: 'cl-001', name: 'Megan Torres', lastVisit: 'Mar 14, 2026', category: 'color' },
  { id: 'cl-002', name: 'Sarah Kim', lastVisit: 'Mar 21, 2026', category: 'cutting' },
  { id: 'cl-003', name: 'Lauren Adams', lastVisit: 'Mar 10, 2026', category: 'color' },
  { id: 'cl-004', name: 'Jessica Reyes', lastVisit: 'Feb 28, 2026', category: 'bridal' },
  { id: 'cl-005', name: 'Emily Chen', lastVisit: 'Mar 18, 2026', category: 'color' },
  { id: 'cl-006', name: 'Nina Patel', lastVisit: 'Mar 5, 2026', category: 'color' },
  { id: 'cl-007', name: 'Ava Brooks', lastVisit: 'Mar 25, 2026', category: 'cutting' },
  { id: 'cl-008', name: 'Lily Thompson', lastVisit: 'Feb 15, 2026', category: 'cutting' },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function ClientsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Clients</h1>

      <div className={styles.searchWrap}>
        <svg
          className={styles.searchIcon}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search clients..."
          aria-label="Search clients"
        />
      </div>

      <div className={styles.list}>
        {clients.map((client) => (
          <Link
            key={client.id}
            href={`/admin/clients/${client.id}`}
            className={styles.clientRow}
          >
            <div className={styles.avatar}>{getInitials(client.name)}</div>
            <div className={styles.clientInfo}>
              <span className={styles.clientName}>{client.name}</span>
              <span className={styles.clientMeta}>Last visit: {client.lastVisit}</span>
            </div>
            <span className={styles.categoryDot} data-category={client.category} />
          </Link>
        ))}
      </div>
    </div>
  );
}
