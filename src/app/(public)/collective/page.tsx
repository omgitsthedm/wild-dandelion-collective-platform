import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader/SectionHeader';
import { PhotoFrame } from '@/design-system/components/PhotoFrame/PhotoFrame';
import { Input } from '@/design-system/components/Input/Input';
import { Button } from '@/design-system/components/Button/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Join the Collective — Suite Rental',
  description:
    'Rent a private suite at The Wild Dandelion Collective in Longmont, CO. A shared space for independent stylists who value craft, community, and creative autonomy.',
};

const amenities = [
  'Private suite spaces',
  'Shared reception area',
  'Laundry facilities',
  'WiFi and utilities included',
  'Flexible lease terms',
  'Beautiful, curated environment',
  'Longmont Main Street location',
  'Supportive creative community',
];

export default function CollectivePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <SectionHeader eyebrow="Join Us" title="The Collective" />

        <p className={styles.intro}>
          A shared space for independent stylists who value craft, community,
          and creative autonomy. The Wild Dandelion Collective is more than a
          salon — it is a place where talented professionals find a home for
          their practice, surrounded by people who care about the same things
          they do.
        </p>

        <div className={styles.photoWrap}>
          <PhotoFrame
            variant="deckled"
            src="/images/studio-detail.webp"
            alt="The Wild Dandelion Collective studio"
          />
        </div>

        <section className={styles.amenitiesSection}>
          <h3 className={styles.amenitiesHeading}>What we offer</h3>
          <ul className={styles.amenitiesGrid}>
            {amenities.map((item) => (
              <li key={item} className={styles.amenityItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.formSection}>
          <h3 className={styles.formHeading}>Interested in joining?</h3>
          <p className={styles.formIntro}>
            Tell us a little about yourself and your practice. We will be in
            touch within a few business days.
          </p>

          <form
            name="rental-inquiry"
            method="POST"
            data-netlify="true"
            className={styles.form}
          >
            <input type="hidden" name="form-name" value="rental-inquiry" />
            <p className={styles.honeypot}>
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>

            <Input label="Name" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Phone" name="phone" type="tel" />
            <Input label="Specialty" name="specialty" />
            <Input label="Portfolio URL" name="portfolio" type="url" />
            <Input label="Message" name="message" type="textarea" />

            <div className={styles.submitWrap}>
              <Button type="submit">Submit Inquiry</Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
