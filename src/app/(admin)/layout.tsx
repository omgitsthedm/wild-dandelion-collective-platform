import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { AdminNav } from '@/design-system/components/AdminNav';
import { SESSION_COOKIE_NAME } from '@/lib/auth';

async function getSessionValid(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return !!session?.value;
}

async function getCurrentPath(): Promise<string> {
  const hdrs = await headers();
  const url = hdrs.get('x-invoke-path') || hdrs.get('x-nextjs-page') || '/admin';
  return url;
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname =
    headersList.get('x-invoke-path') ||
    headersList.get('x-nextjs-page') ||
    '/admin';

  /* Allow login page without auth */
  const isLoginPage = pathname === '/admin/login';

  if (!isLoginPage) {
    const isAuthenticated = await getSessionValid();
    if (!isAuthenticated) {
      redirect('/admin/login');
    }
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: 'var(--color-parchment)',
        paddingBottom: isLoginPage ? 0 : '80px',
      }}
    >
      <main style={{ padding: 'var(--space-lg)', maxWidth: '600px', marginInline: 'auto' }}>
        {children}
      </main>
      {!isLoginPage && <AdminNav currentPath={pathname} />}
    </div>
  );
}
