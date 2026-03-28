import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { PhotoFrame } from '@/design-system/components/PhotoFrame/PhotoFrame';
import { Button } from '@/design-system/components/Button/Button';
import styles from './page.module.css';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
  };
}

const categoryLabels: Record<string, string> = {
  blonde: 'Blonde & Highlights',
  color: 'Color',
  cutting: 'Cutting & Shape',
  extensions: 'Extensions',
  treatments: 'Treatments',
  events: 'Events & Bridal',
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.hero}>
          <PhotoFrame
            src={service.heroImage}
            alt={service.name}
            developing
            className={styles.heroFrame}
          />
        </div>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.category}>
            {categoryLabels[service.category] ?? service.category}
          </p>
          <h1 className={styles.title}>{service.name}</h1>
        </div>

        {/* Content sections */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>What it is</h2>
            <p className={styles.sectionBody}>{service.whatItIs}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Who it&#8217;s for</h2>
            <p className={styles.sectionBody}>{service.whoItsFor}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>What to expect</h2>
            <p className={styles.sectionBody}>{service.whatToExpect}</p>
          </section>
        </div>

        {/* Pricing & duration info block */}
        <div className={styles.infoBlock}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Pricing</span>
            <span className={styles.infoValue}>{service.pricingRange}</span>
          </div>
          <div className={styles.infoDivider} />
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Duration</span>
            <span className={styles.infoValue}>{service.duration}</span>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          {service.consultationRequired ? (
            <Button href="/book/consult" variant="primary" fullWidth>
              Start a Consultation
            </Button>
          ) : (
            <Button href="/book" variant="primary" fullWidth>
              Book This Service
            </Button>
          )}
        </div>

        {/* Ashley's note */}
        <aside className={styles.ashleyNote}>
          <p className={styles.noteLabel}>A note from Ashley</p>
          <p className={styles.noteText}>{service.ashleyNote}</p>
        </aside>
      </div>
    </main>
  );
}
