import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the Collective — Salon Suite & Retail Space for Rent in Longmont',
  description:
    'Now available: 400 sq ft retail space and styling stations at The Wild Dandelion Collective on Main Street in Longmont, CO. $800/mo, all utilities included.',
  openGraph: {
    title: 'Join the Collective — Salon Suite & Retail Space for Rent in Longmont',
    description: '400 sq ft retail space and styling stations available now. $800/mo, all utilities included.',
    type: 'website',
  },
};

export default function CollectiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
