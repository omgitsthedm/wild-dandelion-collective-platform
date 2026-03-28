import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader/SectionHeader';
import { Button } from '@/design-system/components/Button/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hair Salon in Longmont, CO',
  description:
    'The Wild Dandelion Collective is a premier hair salon on Main Street in Longmont, Colorado. Precision cuts, lived-in color, extensions, and bridal styling in a welcoming studio.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Wild Dandelion Collective',
  description:
    'A premier hair salon on Main Street in Longmont, Colorado offering precision cuts, lived-in color, extensions, and bridal styling.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '528 Main St',
    addressLocality: 'Longmont',
    addressRegion: 'CO',
    postalCode: '80501',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.1672,
    longitude: -105.1019,
  },
  telephone: '+1-303-555-0198',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  url: 'https://thewilddandelioncollective.com/longmont',
};

export default function LongmontPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.page}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Longmont, Colorado"
            title="Hair Care on Main Street"
          />

          <h1 className={styles.seoHeading}>Hair Salon in Longmont</h1>

          <div className={styles.content}>
            <div className={styles.copy}>
              <p>
                Tucked along the heart of Longmont&rsquo;s Main Street, The Wild
                Dandelion Collective sits among the independent shops, cafes, and
                galleries that make this stretch of town feel like something
                worth preserving. When you walk through our door, you leave the
                noise behind and step into a space that was designed to feel
                personal, unhurried, and entirely yours.
              </p>

              <p>
                This is not a high-volume salon. Every appointment is one-on-one
                with your stylist in a private suite — no assembly lines, no
                rushed color applications, no waiting in a crowded lobby. That
                intimacy is the whole point.
              </p>

              <h3 className={styles.subheading}>Services available</h3>
              <ul className={styles.serviceList}>
                <li>Precision haircuts and restorative treatments</li>
                <li>Lived-in blonde and balayage</li>
                <li>Signature color and corrective color</li>
                <li>Hand-tied and tape-in extensions</li>
                <li>Bridal and special occasion styling</li>
              </ul>

              <h3 className={styles.subheading}>Part of the community</h3>
              <p>
                Ashley built The Wild Dandelion here because Longmont is home.
                This is a place where neighbors become clients and clients become
                friends. We care about this town — we shop on Main Street, we
                run into you at the farmers market, and we take pride in being
                part of what makes this community thrive.
              </p>
            </div>

            <aside className={styles.details}>
              <div className={styles.detailBlock}>
                <h3 className={styles.detailLabel}>Address</h3>
                <p className={styles.detailText}>
                  528 Main St<br />
                  Longmont, CO 80501
                </p>
              </div>

              <div className={styles.detailBlock}>
                <h3 className={styles.detailLabel}>Hours</h3>
                <dl className={styles.hours}>
                  <div className={styles.hourRow}>
                    <dt>Tue — Fri</dt>
                    <dd>9:00 am — 6:00 pm</dd>
                  </div>
                  <div className={styles.hourRow}>
                    <dt>Saturday</dt>
                    <dd>9:00 am — 3:00 pm</dd>
                  </div>
                  <div className={styles.hourRow}>
                    <dt>Sun — Mon</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </div>

              <Button href="/book">Book Your Visit</Button>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
