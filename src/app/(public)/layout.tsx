import { NavDock } from '@/design-system/components/NavDock';
import { Footer } from '@/design-system/components/Footer';
import { headers } from 'next/headers';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';

  return (
    <>
      {children}
      <Footer />
      <NavDock currentPath={pathname} />
    </>
  );
}
