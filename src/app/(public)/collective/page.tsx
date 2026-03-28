import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader/SectionHeader';
import { PhotoFrame } from '@/design-system/components/PhotoFrame/PhotoFrame';
import { Input } from '@/design-system/components/Input/Input';
import { Button } from '@/design-system/components/Button/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Join the Collective — Salon Suite & Retail Space for Rent in Longmont',
  description:
    'Now available: 400 sq ft retail space and styling stations at The Wild Dandelion Collective on Main Street in Longmont, CO. $800/mo, all utilities included.',
};

const stationAmenities = [
  'WiFi included',
  'Laundry service included',
  'All utilities included',
  'Davines wet back bar',
  'Main Street Longmont location',
  'Supportive creative community',
  'Beautiful, curated environment',
  'Flexible lease terms',
];

export default function CollectivePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <SectionHeader eyebrow="Now Available" title="Join the Collective" />

        <p className={styles.intro}>
          The Wild Dandelion Collective is looking for talented beauty
          professionals to fill our space. If you have a full clientele and
          want a home that feels as good as your work, we should talk.
        </p>

        <div className={styles.photoWrap}>
          <PhotoFrame
            variant="deckled"
            src="/images/studio-detail.webp"
            alt="The Wild Dandelion Collective studio"
          />
        </div>

        {/* Available Spaces */}
        <section className={styles.spacesSection}>
          <h2 className={styles.spacesHeading}>Available Spaces</h2>

          <div className={styles.spaceCard}>
            <div className={styles.spaceCardHeader}>
              <h3 className={styles.spaceCardTitle}>Retail Space</h3>
              <span className={styles.spaceCardPrice}>$800<span className={styles.perMonth}>/month</span></span>
            </div>
            <p className={styles.spaceCardDescription}>
              A private 400 sq ft retail space with its own door and storefront
              on Main Street. Perfect for a curated shop, wellness studio, or
              creative practice. All utilities included.
            </p>
            <ul className={styles.spaceCardFeatures}>
              <li>400 sq ft private space</li>
              <li>Private entrance and storefront</li>
              <li>Main Street frontage</li>
              <li>All utilities included</li>
            </ul>
          </div>

          <div className={styles.spaceCard}>
            <div className={styles.spaceCardHeader}>
              <h3 className={styles.spaceCardTitle}>Styling Stations</h3>
              <span className={styles.spaceCardPrice}>$800<span className={styles.perMonth}>/month</span></span>
            </div>
            <p className={styles.spaceCardDescription}>
              We have two styling chairs and one makeup artist station available
              for experienced professionals with a full clientele. Stylists,
              barbers, and beauty professionals welcome.
            </p>
            <ul className={styles.spaceCardFeatures}>
              <li>2 styling chairs available</li>
              <li>1 makeup artist station available</li>
              <li>All utilities + WiFi included</li>
              <li>Laundry service included</li>
              <li>Davines wet back bar access</li>
            </ul>
          </div>
        </section>

        <section className={styles.amenitiesSection}>
          <h3 className={styles.amenitiesHeading}>Every station includes</h3>
          <ul className={styles.amenitiesGrid}>
            {stationAmenities.map((item) => (
              <li key={item} className={styles.amenityItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Ashley would love to have a conversation with you about joining the
            Collective. Reach out below or call directly — the best way to see
            if this is the right fit is to talk.
          </p>
        </section>

        <section className={styles.formSection}>
          <h3 className={styles.formHeading}>Get in touch</h3>
          <p className={styles.formIntro}>
            Tell us a little about yourself and your practice. Ashley will reach
            out personally to set up a time to chat.
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
