import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { PhotoFrame } from '@/design-system/components/PhotoFrame';
import { SectionHeader } from '@/design-system/components/SectionHeader';
import { ServiceCard } from '@/design-system/components/ServiceCard';
import { TestimonialCard } from '@/design-system/components/TestimonialCard';
import { StepIndicator } from '@/design-system/components/StepIndicator';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'The Wild Dandelion Collective | Hair Salon in Longmont, CO',
  description:
    'The Wild Dandelion Collective is a verdant space for beauty, art, and curated living in Longmont, Colorado. Book a visit with Ashley for lived-in blonde, signature color, precision cuts, and bridal styling.',
  openGraph: {
    title: 'The Wild Dandelion Collective | Hair Salon in Longmont, CO',
    description:
      'A verdant space for beauty, art, and curated living in Longmont, Colorado.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Wild Dandelion Collective',
    url: 'https://thewilddandelioncollective.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Wild Dandelion Collective — Hair Salon in Longmont, CO',
      },
    ],
  },
};

function DandelionSeed({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Stem */}
      <line
        x1="60"
        y1="200"
        x2="60"
        y2="70"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Seed head radiating lines */}
      <line x1="60" y1="70" x2="60" y2="10" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="30" y2="18" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="90" y2="18" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="18" y2="42" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="102" y2="42" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="40" y2="12" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="80" y2="12" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="22" y2="30" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="98" y2="30" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="12" y2="55" stroke="currentColor" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="108" y2="55" stroke="currentColor" strokeWidth="0.8" />
      {/* Small circles at tips */}
      <circle cx="60" cy="10" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="30" cy="18" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="90" cy="18" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="18" cy="42" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="102" cy="42" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="40" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="80" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="22" cy="30" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="98" cy="30" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="12" cy="55" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="108" cy="55" r="1.5" fill="currentColor" opacity="0.4" />
      {/* Drifting seed */}
      <g opacity="0.35">
        <line x1="95" y1="5" x2="105" y2="25" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="105" cy="25" r="1" fill="currentColor" />
        <line x1="95" y1="5" x2="90" y2="0" stroke="currentColor" strokeWidth="0.5" />
        <line x1="95" y1="5" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" />
        <line x1="95" y1="5" x2="95" y2="0" stroke="currentColor" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* ── 1. Hero ──────────────────────────── */}
      <section className={styles.hero}>
        <DandelionSeed className={styles.dandelionSeed} />
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Longmont, Colorado</p>
            <h1 className={`${styles.heroHeading} headline-reveal`}>
              The Wild Dandelion Collective
            </h1>
            <div className="prose-reveal">
              <p className={styles.heroSubtitle}>
                A verdant space for beauty, art, and curated living
              </p>
              <div className={styles.heroCtas}>
                <Button href="/book">Book a Visit</Button>
                <Button href="/services" variant="secondary">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <PhotoFrame
              src="/images/ashley-portrait.webp"
              alt="Ashley at The Wild Dandelion Collective"
              developing
            />
          </div>
        </div>
      </section>

      {/* ── 2. Services Preview ──────────────── */}
      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className={styles.container}>
          <SectionHeader eyebrow="What We Do" title="Every visit is personal" />
          <div className={styles.servicesGrid}>
            <ServiceCard
              title="I want to brighten my look"
              description="Sun-kissed highlights and lived-in blonde"
              href="/services/lived-in-blonde"
            />
            <ServiceCard
              title="I want to refresh my color"
              description="Rich, dimensional color that feels like you"
              href="/services/signature-color"
            />
            <ServiceCard
              title="My hair needs a reset"
              description="Precision cuts that move the way you do"
              href="/services/precision-cutting"
            />
            <ServiceCard
              title="I need hair for an event"
              description="Bridal styling and formal looks"
              href="/services/bridal"
            />
          </div>
        </div>
      </section>

      {/* ── 3. The Space ─────────────────────── */}
      <section className={`${styles.section} ${styles.spaceSection}`}>
        <div className={styles.container}>
          <SectionHeader eyebrow="The Collective" title="More than a salon" />
          <div className={styles.spaceContent}>
            <div className={styles.spaceCopy}>
              <p>
                Nestled on Main Street in the heart of Longmont, The Wild
                Dandelion Collective is a 2,000-square-foot space where beauty,
                art, and curated living converge. Walk through our doors and
                you&rsquo;ll find a salon that feels more like a studio &mdash;
                warm, intentional, and designed to make every visit feel like
                an escape.
              </p>
              <p>
                Beyond the chair, explore a rotating collection of local art,
                handcrafted goods, and botanicals. This is a space to slow
                down, to discover something beautiful, and to leave feeling
                more like yourself.
              </p>
              <div className={styles.spaceCtas}>
                <Button href="/shop" variant="secondary">
                  Shop the Collective
                </Button>
                <Button href="/collective" variant="ghost">
                  Join Us
                </Button>
              </div>
            </div>
            <div className={styles.spaceImage}>
              <PhotoFrame
                src="/images/studio-detail.webp"
                alt="Inside The Wild Dandelion Collective"
                variant="deckled"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Trust / About Ashley ──────────── */}
      <section className={`${styles.section} ${styles.trustSection}`}>
        <div className={styles.container}>
          <SectionHeader eyebrow="About Ashley" title="20+ years behind the chair" />
          <div className={styles.trustContent}>
            <div className={styles.trustCopy}>
              <p>
                Ashley brings two decades of experience and a genuine love for
                the craft to every appointment. Trained at some of the most
                respected institutions in the industry, she specializes in
                lived-in color, precision cutting, and creating looks that
                feel effortless and completely you.
              </p>
              <ul className={styles.credentials}>
                <li>Vidal Sassoon Academy trained</li>
                <li>Bumble and bumble certified</li>
                <li>Davines color specialist</li>
              </ul>
              <div className={styles.testimonialWrap}>
                <TestimonialCard
                  quote="Ashley has an incredible eye for color. She understood exactly what I wanted before I could even explain it."
                  attribution="Sarah M."
                />
              </div>
              <div className={styles.trustCta}>
                <Button href="/about" variant="secondary">
                  More About Ashley
                </Button>
              </div>
            </div>
            <div className={styles.trustImage}>
              <PhotoFrame
                src="/images/ashley-portrait.webp"
                alt="Ashley, owner and stylist at The Wild Dandelion Collective"
                variant="inset"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. How to Start ──────────────────── */}
      <section className={`${styles.section} ${styles.startSection}`}>
        <div className={styles.container}>
          <SectionHeader eyebrow="Getting Started" title="Three simple steps" />
          <div className={styles.stepsRow}>
            <StepIndicator
              number={1}
              title="Choose"
              description="Browse services or tell us what you need"
            />
            <StepIndicator
              number={2}
              title="Book"
              description="Pick a time that works for you"
            />
            <StepIndicator
              number={3}
              title="Arrive"
              description="Walk in, relax, and let Ashley take care of the rest"
            />
          </div>
          <div className={styles.startCta}>
            <Button href="/book">Book Your Visit</Button>
            <p className={styles.locationSnippet}>
              413 Main St, Longmont, CO 80501 &middot;{' '}
              <a
                href="https://maps.google.com/?q=413+Main+St+Longmont+CO+80501"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
