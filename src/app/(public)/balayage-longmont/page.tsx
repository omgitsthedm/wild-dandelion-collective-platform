import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Balayage Longmont | Premium Hand-Painted Highlights | The Wild Dandelion',
  description: 'Award-winning balayage in Longmont, CO. Ashley DeMarco specializes in natural, sun-kissed balayage with seamless grow-out. Vidal Sassoon trained. Book your consultation.',
  keywords: ['balayage longmont', 'hand painted highlights colorado', 'best balayage 80501', 'natural balayage boulder county'],
  openGraph: {
    title: 'Balayage Specialists in Longmont, CO',
    description: 'Natural, lived-in balayage by Ashley DeMarco - 20+ years experience, Vidal Sassoon trained',
    images: [{ url: images.blonde.balayage }],
  },
};

const benefits = [
  {
    title: 'Seamless Grow-Out',
    description: 'No harsh lines means 3-4 months between appointments, saving you time and money.',
    icon: '✨',
  },
  {
    title: 'Custom Color Mixing',
    description: 'Every formula is mixed specifically for your hair type, tone, and desired result.',
    icon: '🎨',
  },
  {
    title: 'Davines Color',
    description: 'Premium Italian color line with conditioning properties for healthy, shiny hair.',
    icon: '🌿',
  },
  {
    title: '20+ Years Experience',
    description: 'Ashley has perfected the art of balayage through thousands of transformations.',
    icon: '💎',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your hair history, lifestyle, and desired outcome. Bring inspiration photos!',
  },
  {
    number: '02',
    title: 'Color Analysis',
    description: 'Ashley assesses your natural base, undertones, and hair condition to create your custom formula.',
  },
  {
    number: '03',
    title: 'Hand-Painting',
    description: 'Each section is carefully painted freehand for natural dimension and movement.',
  },
  {
    number: '04',
    title: 'Perfect Finish',
    description: 'Custom gloss, blow-dry styling, and personalized take-home care instructions.',
  },
];

const faqs = [
  {
    question: 'How long does balayage take?',
    answer: 'A full balayage service typically takes 3-4 hours, including consultation, color application, processing time, gloss, and styling. First-time appointments may take longer for a thorough consultation.',
  },
  {
    question: 'How much does balayage cost in Longmont?',
    answer: 'At The Wild Dandelion, balayage starts at $220. The final price depends on hair length, thickness, and desired lightness. We provide a detailed quote during your consultation.',
  },
  {
    question: 'Is balayage better than foil highlights?',
    answer: 'Balayage creates a more natural, sun-kissed look with softer grow-out lines compared to traditional foils. It is perfect for low-maintenance clients who want dimension without frequent touch-ups.',
  },
  {
    question: 'Will balayage damage my hair?',
    answer: 'When done correctly by a trained professional, balayage is actually gentler than traditional highlighting. We use premium Davines color and can add bond builders like Olaplex for extra protection.',
  },
  {
    question: 'How do I maintain my balayage?',
    answer: 'Use sulfate-free shampoo, purple shampoo once weekly to prevent brassiness, and regular deep conditioning treatments. We provide a complete care guide at your appointment.',
  },
];

const transformations = [
  {
    title: 'The Bronde Transformation',
    description: 'From solid brown to dimensional bronde balayage',
    image: images.blonde.balayage,
  },
  {
    title: 'Honey Blonde Refresh',
    description: 'Adding warmth and brightness to dull blonde',
    image: images.blonde.honey,
  },
  {
    title: 'Platinum Dream',
    description: 'Multi-session transformation to platinum balayage',
    image: images.blonde.platinum,
  },
];

export default function BalayagePage() {
  return (
    <main className={styles.main}>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            name: 'The Wild Dandelion Collective',
            image: images.blonde.balayage,
            '@id': 'https://the-wild-dandelion-collective.netlify.app',
            url: 'https://the-wild-dandelion-collective.netlify.app/balayage-longmont',
            telephone: '+1-303-834-7572',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '413 Main Street',
              addressLocality: 'Longmont',
              addressRegion: 'CO',
              postalCode: '80501',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 40.1672,
              longitude: -105.1028,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '19:00',
              },
            ],
            priceRange: '$$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '87',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img src={images.blonde.balayage} alt="Balayage hair color" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Longmont Balayage Experts</span>
            <h1 className={styles.heroTitle}>
              Artistry in <span className={styles.gradientText}>every stroke</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Hand-painted highlights that look like you spent the summer on the Mediterranean. 
              Natural, dimensional, and perfectly you.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>⭐ 5.0 (87 Reviews)</span>
              <span className={styles.badge}>🏆 Best of Boulder County 2024</span>
              <span className={styles.badge}>✨ Vidal Sassoon Trained</span>
            </div>
            <div className={styles.heroButtons}>
              <Button href="/book" size="large">
                Book Balayage Consultation
              </Button>
              <Button href="tel:+13038347572" variant="outline" size="large">
                Call (303) 834-7572
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <span className={styles.sectionEyebrow}>The Art of Balayage</span>
              <h2 className={styles.introTitle}>
                What makes our balayage different?
              </h2>
              <div className={styles.introText}>
                <p>
                  Balayage is not just a technique—it is an art form. At The Wild Dandelion, 
                  we do not use foils or caps. Every highlight is hand-painted, section by section, 
                  creating a completely custom color that moves with your hair.
                </p>
                <p>
                  Ashley's approach combines technical precision with artistic intuition. 
                  She considers your face shape, skin tone, natural hair movement, and lifestyle 
                  to create a look that is uniquely yours—not a copy of someone else's Pinterest board.
                </p>
                <p>
                  The result? Color that looks like you were born with it, grows out beautifully, 
                  and turns heads wherever you go.
                </p>
              </div>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.introImageWrapper}>
                <img src={images.salon.mirror} alt="Stylist at work" className={styles.introImage} />
                <div className={styles.introFloatingCard}>
                  <span className={styles.bigNumber}>20+</span>
                  <span className={styles.bigNumberLabel}>Years Perfecting Balayage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Why Choose Us</span>
            <h2 className={styles.sectionTitle}>The Wild Dandelion Difference</h2>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{benefit.icon}</span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Your Experience</span>
            <h2 className={styles.sectionTitle}>The Balayage Journey</h2>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div key={step.number} className={styles.processCard}>
                <span className={styles.processNumber}>{step.number}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className={styles.transformations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Portfolio</span>
            <h2 className={styles.sectionTitle}>Real Transformations</h2>
            <p className={styles.sectionSubtitle}>Every client, every story, uniquely theirs</p>
          </div>

          <div className={styles.transformationsGrid}>
            {transformations.map((item) => (
              <div key={item.title} className={styles.transformationCard}>
                <div className={styles.transformationImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.transformationImage} />
                </div>
                <div className={styles.transformationContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.transformationsCta}>
            <Button href="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <div className={styles.container}>
          <div className={styles.pricingCard}>
            <div className={styles.pricingContent}>
              <span className={styles.sectionEyebrow}>Investment</span>
              <h2 className={styles.pricingTitle}>Balayage Pricing</h2>
              <p className={styles.pricingDescription}>
                Every balayage service includes a thorough consultation, custom color mixing, 
                premium Davines products, bond builder treatment, gloss/toner, and professional styling.
              </p>
              <div className={styles.pricingTiers}>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Partial Balayage</span>
                  <span className={styles.tierPrice}>$180+</span>
                  <span className={styles.tierTime}>2.5-3 hours</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Full Balayage</span>
                  <span className={styles.tierPrice}>$220+</span>
                  <span className={styles.tierTime}>3-4 hours</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Balayage + Cut</span>
                  <span className={styles.tierPrice}>$280+</span>
                  <span className={styles.tierTime}>4-5 hours</span>
                </div>
              </div>
              <p className={styles.pricingNote}>
                * Final pricing depends on hair length, thickness, and current color condition. 
                A detailed quote is provided during your consultation.
              </p>
            </div>
            <div className={styles.pricingVisual}>
              <img src={images.blonde.honey} alt="Balayage result" className={styles.pricingImage} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Balayage FAQs</h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonial}>
        <div className={styles.container}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialImageWrapper}>
              <img src={images.people.client} alt="Happy client" className={styles.testimonialImage} />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote className={styles.testimonialQuote}>
                "I have been to salons all over Boulder and Denver, and Ashley's balayage is truly 
                the best. She understood exactly what I wanted—even better than I did! My hair 
                looks natural, expensive, and I get compliments constantly. Worth every penny."
              </blockquote>
              <cite className={styles.testimonialAuthor}>
                <strong>Sarah M.</strong>
                <span>Longmont, CO</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for your transformation?</h2>
            <p className={styles.ctaText}>
              Join the hundreds of Longmont women who trust Ashley with their balayage. 
              Book your consultation today and discover what is possible.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Schedule Consultation
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="/gallery" variant="outline" size="large">
                See More Work
              </Button>
            </div>
            <div className={styles.ctaTrust}>
              <span>✓ Free consultation</span>
              <span>✓ No commitment required</span>
              <span>✓ Expert color analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className={styles.location}>
        <div className={styles.container}>
          <div className={styles.locationContent}>
            <h3>The Wild Dandelion Collective</h3>
            <p>413 Main Street, Longmont, CO 80501</p>
            <p>Monday-Saturday: 9am - 7pm</p>
            <p>
              <a href="tel:+13038347572">(303) 834-7572</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
