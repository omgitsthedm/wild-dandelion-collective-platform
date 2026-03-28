import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Wild Dandelion Collective',
  description:
    'A verdant space for beauty, art, and curated living in Longmont, Colorado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
