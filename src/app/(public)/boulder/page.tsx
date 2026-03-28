import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader/SectionHeader';
import { PhotoFrame } from '@/design-system/components/PhotoFrame/PhotoFrame';
import { Button } from '@/design-system/components/Button/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Bridal Hair Stylist Near Boulder, CO',
  description:
    'On-location bridal hair styling for Boulder, Colorado weddings. The Wild Dandelion Collective offers intimate, one-on-one bridal consultations and day-of styling.',
};

export default function BoulderPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Boulder, Colorado"
          title="Bridal Hair & On-Location Styling"
        />

        <div className={styles.content}>
          <div className={styles.copy}>
            <p>
              Getting married in Boulder or anywhere along the Front Range? The
              Wild Dandelion Collective brings bridal styling expertise to your
              venue, hotel, or home — so your wedding morning feels calm,
              beautiful, and completely taken care of.
            </p>

            <p>
              Our studio in Longmont is a short drive from Boulder, and many of
              our bridal clients make the trip for their trial run. The private
              suite setting lets us focus entirely on you — no distractions, no
              rushing, just the kind of attention your wedding day deserves.
            </p>

            <h3 className={styles.subheading}>
              Why Boulder brides choose Wild Dandelion
            </h3>
            <p>
              Boulder is full of talented stylists, but many brides tell us they
              come to us for the intimacy. No open-floor chaos on the most
              important morning of your life. Just a private suite, a stylist who
              already knows your hair from the trial, and the calm confidence
              that everything is handled.
            </p>

            <h3 className={styles.subheading}>Bridal services</h3>
            <ul className={styles.serviceList}>
              <li>In-studio bridal trial and consultation</li>
              <li>Day-of bridal styling (on-location or in-studio)</li>
              <li>Bridal party hair for up to 6 attendants</li>
              <li>Updo and formal event styling</li>
              <li>Hair accessories and veil placement</li>
            </ul>

            <p>
              We begin every bridal relationship with a consultation — a
              relaxed conversation about your vision, your dress, your venue,
              and the feeling you want on your wedding day. From there, we
              schedule a full trial so there are no surprises, only confidence.
            </p>
          </div>

          <div className={styles.imageCol}>
            <PhotoFrame
              src="/images/bridal-1.webp"
              alt="Bridal hair styling by The Wild Dandelion Collective"
            />
          </div>
        </div>

        <div className={styles.ctaSection}>
          <Button href="/book/consult">Start Your Bridal Consultation</Button>
        </div>
      </div>
    </main>
  );
}
