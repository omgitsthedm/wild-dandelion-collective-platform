import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader/SectionHeader';
import { ServiceCard } from '@/design-system/components/ServiceCard/ServiceCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore hair services at The Wild Dandelion Collective — from lived-in blonde and signature color to precision cutting, extensions, treatments, and bridal styling.',
};

const serviceEntries = [
  {
    title: 'I want to brighten my look',
    description: 'Blonde, highlights, and sun-kissed dimension placed by hand.',
    href: '/services/lived-in-blonde',
  },
  {
    title: 'I want to refresh or change my color',
    description: 'Rich, lasting color crafted with Davines formulations.',
    href: '/services/signature-color',
  },
  {
    title: 'My hair needs a reset',
    description: 'A tailored cut built on Sassoon-trained technique, plus repair treatments.',
    href: '/services/precision-cutting',
  },
  {
    title: 'I want more fullness or length',
    description: 'Custom extensions for natural-looking volume and length.',
    href: '/services/extensions',
    badge: 'Consultation Required',
  },
  {
    title: 'I need hair for an event',
    description: 'Bridal, formal, and special occasion styling that lasts.',
    href: '/services/bridal',
  },
  {
    title: "I'm not sure \u2014 help me decide",
    description:
      'Book a consultation and we will figure out the perfect plan together.',
    href: '/book/consult',
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <SectionHeader eyebrow="Services" title="What brings you in?" />

        <ul className={styles.list}>
          {serviceEntries.map((entry) => (
            <li key={entry.href} className={styles.item}>
              <ServiceCard
                title={entry.title}
                description={entry.description}
                href={entry.href}
                badge={entry.badge}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
