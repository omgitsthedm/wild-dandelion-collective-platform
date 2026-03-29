import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | The Wild Dandelion Collective',
  description: 'Explore our hair services — from lived-in blonde and signature color to precision cutting, extensions, treatments, and bridal styling. Book your transformation today.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
