import type { Metadata } from 'next';
import { BookingProvider } from './BookingContext';
import { BookingShell } from './BookingShell';

export const metadata: Metadata = {
  title: 'Book',
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingProvider>
      <BookingShell>{children}</BookingShell>
    </BookingProvider>
  );
}
