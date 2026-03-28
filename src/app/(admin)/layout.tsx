export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--color-parchment)' }}>
      <header
        style={{
          padding: 'var(--space-md) var(--space-lg)',
          borderBottom: '1px solid var(--color-line)',
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--text-small)',
          fontWeight: 500,
          color: 'var(--color-ink-light)',
        }}
      >
        Wild Dandelion Admin
      </header>
      <main style={{ padding: 'var(--space-lg)' }}>{children}</main>
    </div>
  );
}
