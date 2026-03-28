import type { Metadata } from 'next';
import { PhotoFrame } from '@/design-system/components/PhotoFrame';
import { SectionHeader } from '@/design-system/components/SectionHeader';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Ashley',
};

export default function AboutPage() {
  return (
    <main>
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.portrait}>
            <PhotoFrame
              src="/images/ashley-portrait.webp"
              alt="Ashley Dania DeMarco, stylist and educator"
              variant="inset"
            />
          </div>

          <div className={styles.intro}>
            <h1 className={styles.name}>Ashley Dania DeMarco</h1>
            <p className={styles.subtitle}>
              Stylist. Educator. Creator of beautiful spaces.
            </p>
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.storyInner}>
            <SectionHeader eyebrow="Her Story" title="A Career Built on Craft" />

            <p>
              With over twenty years behind the chair, Ashley has built a career
              rooted in precision, artistry, and genuine connection. Trained at
              the renowned Vidal Sassoon Academy, she developed a foundation in
              cutting and shaping that still informs every service she
              provides&mdash;technical excellence paired with an intuitive eye
              for what suits each individual.
            </p>

            <p>
              Her journey continued through advanced certifications with Bumble
              and bumble and Davines, deepening her expertise in color theory,
              sustainable haircare, and the kind of lived-in, effortless results
              her clients love. Every technique she uses has been refined through
              years of education and real-world practice.
            </p>

            <p>
              But for Ashley, it was never just about the hair. She believes
              every client deserves a personal, unhurried experience&mdash;a
              space where the conversation matters as much as the color formula,
              and where you leave feeling like the best version of yourself.
            </p>
          </div>
        </section>

        <section className={styles.credentials}>
          <h2 className={styles.credentialsTitle}>Training &amp; Credentials</h2>
          <ul className={styles.credentialsList}>
            <li>Vidal Sassoon Academy &mdash; Precision Cutting</li>
            <li>Bumble and bumble &mdash; Color &amp; Styling Certification</li>
            <li>Davines &mdash; Color &amp; Care Certified Stylist</li>
            <li>20+ years of professional salon experience</li>
            <li>Ongoing advanced education in color, cutting &amp; extensions</li>
          </ul>
        </section>

        <section className={styles.difference}>
          <div className={styles.differenceInner}>
            <SectionHeader
              eyebrow="The Approach"
              title="What Makes This Different"
            />

            <p>
              The Wild Dandelion is not a traditional salon. It is a collective
              &mdash;an intimate studio built around the idea that beauty
              services should feel personal, intentional, and completely yours.
              No assembly lines. No double-booking. Just Ashley and you.
            </p>

            <p>
              The space itself is curated with the same care as the services:
              warm, inviting, and designed to put you at ease from the moment you
              walk in. Every product on the shelf, every detail in the studio,
              has been chosen with purpose.
            </p>

            <p>
              This is hair care as it should be&mdash;thoughtful, skilled, and
              built around a relationship that grows with every visit.
            </p>

            <div className={styles.cta}>
              <Button href="/book">Book with Ashley</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
