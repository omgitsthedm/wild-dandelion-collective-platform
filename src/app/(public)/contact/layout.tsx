import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | The Wild Dandelion Collective',
  description: 'Get in touch with The Wild Dandelion Collective. We\'d love to hear from you.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
