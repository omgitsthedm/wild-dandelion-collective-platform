import type { Metadata } from 'next';
import { HairSalonSchema } from '@/components/schema/HairSalonSchema';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Wild Dandelion Collective',
    template: '%s | The Wild Dandelion Collective',
  },
  description:
    'A verdant space for beauty, art, and curated living in Longmont, Colorado. Curated goods, professional hair care, and an intimate micro salon.',
  metadataBase: new URL('https://thewilddandelioncollective.com'),
  openGraph: {
    title: 'The Wild Dandelion Collective',
    description:
      'A verdant space for beauty, art, and curated living in Longmont, Colorado.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <HairSalonSchema />
        {children}
      </body>
    </html>
  );
}
