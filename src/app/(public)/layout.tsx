import { NavDock } from '@/design-system/components/NavDock';
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
      <NavDock currentPath={pathname} />
    </>
  );
}
