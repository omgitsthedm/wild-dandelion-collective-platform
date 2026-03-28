import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultation',
  description:
    'Start your consultation with Ashley at The Wild Dandelion Collective. Share your hair goals, upload photos, and connect for a personalized plan.',
};

export default function ConsultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
