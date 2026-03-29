import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Wild Dandelion Collective | Hair Salon in Longmont, CO',
  description:
    'A playful, warm space for beauty and self-expression in Longmont, Colorado. Book your transformation with Ashley.',
  openGraph: {
    title: 'The Wild Dandelion Collective | Hair Salon in Longmont, CO',
    description: 'Where beauty meets joy. Book your transformation in Longmont, Colorado.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Wild Dandelion Collective',
    url: 'https://thewilddandelioncollective.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Wild Dandelion Collective — Hair Salon in Longmont, CO',
      },
    ],
  },
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
