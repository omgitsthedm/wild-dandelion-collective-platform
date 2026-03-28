import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h1)' }}>
        Good morning, Ashley
      </h1>
      <p style={{ color: 'var(--color-ink-light)', marginTop: 'var(--space-sm)' }}>
        Dashboard coming soon.
      </p>
    </div>
  );
}
