import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hair Color Correction Longmont | Fix Bad Color | The Wild Dandelion',
  description: 'Expert color correction in Longmont, CO. Ashley DeMarco specializes in fixing brassy, over-processed, and botched hair color. Safe, gradual correction plans. 20+ years experience.',
  keywords: ['hair color correction longmont', 'fix bad hair color 80501', 'color correction specialist boulder', 'brassy hair fix colorado', 'overprocessed hair repair'],
  openGraph: {
    title: 'Hair Color Correction Specialist in Longmont, CO',
    description: 'Fix brassy, over-processed, or botched color safely. Expert correction with hair health as priority.',
    images: [{ url: images.brunette.dimensional }],
  },
};

const benefits = [
  {
    title: 'Safe Approach',
    description: 'Gradual correction plans that prioritize your hair integrity over speed.',
    icon: '🛡️',
  },
  {
    title: 'Fix Any Issue',
    description: 'From brassy highlights to banding, over-processing to box dye disasters.',
    icon: '🔧',
  },
  {
    title: 'Rebuilding Treatments',
    description: 'K18, Olaplex, and bond-building protocols to restore hair strength.',
    icon: '💪',
  },
  {
    title: 'Honest Assessment',
    description: 'Realistic timelines and expectations. No false promises, just results.',
    icon: '💎',
  },
];

const correctionTypes = [
  {
    number: '01',
    title: 'Brassy to Beautiful',
    description: 'Neutralizing unwanted warm tones and creating sophisticated, expensive-looking color.',
  },
  {
    number: '02',
    title: 'Banding & Blotches',
    description: 'Smoothing uneven color application and harsh lines for seamless dimension.',
  },
  {
    number: '03',
    title: 'Over-Processed Repair',
    description: 'Gentle restoration of compromised hair while achieving your color goals.',
  },
  {
    number: '04',
    title: 'Box Dye Rescue',
    description: 'Professional correction of at-home color disasters with predictable results.',
  },
];

const faqs = [
  {
    question: 'Can any hair color be corrected?',
    answer: 'Most color issues can be improved, but the extent depends on your hair condition and color history. During your consultation, Ashley assesses your hair integrity and creates a realistic plan. Some corrections happen in one session; others require multiple appointments spaced weeks apart to maintain hair health.',
  },
  {
    question: 'How long does color correction take?',
    answer: 'Simple corrections may take 3-4 hours. Complex transformations often require 2-4 sessions over 2-3 months. We never rush the process—your hair health is our priority. Each session builds toward your goal while strengthening your hair.',
  },
  {
    question: 'Is color correction damaging to my hair?',
    answer: 'When done correctly by a specialist, correction should not cause additional damage. We use bond builders, protein treatments, and strategic processing to maintain integrity. If your hair is severely compromised, we may recommend strengthening treatments before proceeding with color.',
  },
  {
    question: 'Why is color correction more expensive?',
    answer: 'Correction requires advanced technical knowledge, specialized products, multiple color formulations, extended appointment times, and often multiple sessions. It is one of the most complex services in hair coloring—like surgery versus a routine checkup.',
  },
  {
    question: 'What should I bring to my correction consultation?',
    answer: 'Bring photos of your current hair in natural light, inspiration pictures of your goal color, and a detailed history of all chemical treatments from the past 2-3 years. The more information we have, the better we can plan your transformation.',
  },
];

const transformations = [
  {
    title: 'Box Brown to Dimensional Brunette',
    description: 'Correcting at-home dye buildup to reveal natural depth and shine',
    image: images.brunette.dimensional,
  },
  {
    title: 'Brassy Blonde to Beige Beauty',
    description: 'Neutralizing unwanted warmth for sophisticated, cool-toned blonde',
    image: images.blonde.livedIn,
  },
  {
    title: 'Banded Color to Seamless Blend',
    description: 'Smoothing harsh lines from previous highlighting sessions',
    image: images.blonde.balayage,
  },
];

export default function ColorCorrectionPage() {
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
            image: images.brunette.dimensional,
            '@id': 'https://the-wild-dandelion-collective.netlify.app',
            url: 'https://the-wild-dandelion-collective.netlify.app/hair-color-correction-longmont',
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
            priceRange: '$$$$',
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
          <img src={images.brunette.dimensional} alt="Hair color correction result" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Longmont Color Correction Expert</span>
            <h1 className={styles.heroTitle}>
              Fix your color, <span className={styles.gradientText}>save your hair</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Brassy highlights? Banding? Box dye gone wrong? Ashley DeMarco specializes 
              in gentle, strategic color correction that prioritizes your hair's health 
              while achieving beautiful results.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>⭐ 5.0 (87 Reviews)</span>
              <span className={styles.badge}>🏆 Best of Boulder County 2024</span>
              <span className={styles.badge}>🛡️ Hair Health First</span>
            </div>
            <div className={styles.heroButtons}>
              <Button href="/book" size="large">
                Book Correction Consultation
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
              <span className={styles.sectionEyebrow}>The Correction Process</span>
              <h2 className={styles.introTitle}>
                Why color correction requires a specialist
              </h2>
              <div className={styles.introText}>
                <p>
                  Color correction is the most technically demanding service in hair coloring. 
                  It requires deep understanding of color theory, chemical processes, hair 
                  structure, and the patience to work gradually toward a goal while maintaining 
                  hair integrity.
                </p>
                <p>
                  Ashley has spent 20+ years developing correction techniques that produce 
                  beautiful results without compromising hair health. She approaches each 
                  correction like a puzzle—analyzing the current state, understanding what 
                  created the problem, and mapping a strategic path forward.
                </p>
                <p>
                  Whether you are dealing with brassy blonde, banding from previous highlights, 
                  over-processed damage, or a box dye surprise, we create a personalized plan 
                  that gets you to your goal safely. Sometimes that means one intensive session; 
                  other times it requires multiple appointments over weeks or months. We always 
                  prioritize your hair's long-term health over quick fixes.
                </p>
              </div>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.introImageWrapper}>
                <img src={images.salon.station} alt="Color correction station" className={styles.introImage} />
                <div className={styles.introFloatingCard}>
                  <span className={styles.bigNumber}>100%</span>
                  <span className={styles.bigNumberLabel}>Honest Assessment</span>
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
            <span className={styles.sectionEyebrow}>The Correction Experience</span>
            <h2 className={styles.sectionTitle}>Why Clients Trust Us</h2>
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

      {/* Correction Types Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Corrections We Handle</span>
            <h2 className={styles.sectionTitle}>Color Correction Services</h2>
          </div>

          <div className={styles.processGrid}>
            {correctionTypes.map((type) => (
              <div key={type.number} className={styles.processCard}>
                <span className={styles.processNumber}>{type.number}</span>
                <h3 className={styles.processTitle}>{type.title}</h3>
                <p className={styles.processDescription}>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className={styles.transformations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Real Corrections</span>
            <h2 className={styles.sectionTitle}>Before & After Transformations</h2>
            <p className={styles.sectionSubtitle}>Every correction, a journey to beautiful, healthy hair</p>
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
              View Correction Gallery
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
              <h2 className={styles.pricingTitle}>Color Correction Pricing</h2>
              <p className={styles.pricingDescription}>
                Color correction requires extensive time, multiple product formulations, 
                and advanced expertise. Every correction includes bond-building treatments, 
                strengthening protocols, and detailed home care instructions.
              </p>
              <div className={styles.pricingTiers}>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Minor Correction</span>
                  <span className={styles.tierPrice}>$180+</span>
                  <span className={styles.tierTime}>3-4 hours</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Moderate Correction</span>
                  <span className={styles.tierPrice}>$280+</span>
                  <span className={styles.tierTime}>4-6 hours</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Major Transformation</span>
                  <span className={styles.tierPrice}>$350+</span>
                  <span className={styles.tierTime}>Multi-session</span>
                </div>
              </div>
              <p className={styles.pricingNote}>
                * Correction pricing varies significantly based on hair length, thickness, 
                current condition, and desired result. A detailed quote is provided during 
                your consultation.
              </p>
            </div>
            <div className={styles.pricingVisual}>
              <img src={images.treatment.mask} alt="Hair treatment" className={styles.pricingImage} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Color Correction FAQs</h2>
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
              <img src={images.people.consultation} alt="Happy client after correction" className={styles.testimonialImage} />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote className={styles.testimonialQuote}>
                "I came in with box dye disasters and over-processed breakage from a chain salon. 
                Ashley was honest about what we could achieve and created a 3-month plan. My hair 
                looks and feels healthier than it has in years, and the color is exactly what I 
                wanted. She literally saved my hair!"
              </blockquote>
              <cite className={styles.testimonialAuthor}>
                <strong>Amanda T.</strong>
                <span>Boulder, CO</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to fix your color?</h2>
            <p className={styles.ctaText}>
              Stop hiding your hair under hats and ponytails. Book a correction consultation 
              and let's create a plan to get you the color you deserve.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Schedule Correction Consult
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="tel:+13038347572" variant="outline" size="large">
                Call Now
              </Button>
            </div>
            <div className={styles.ctaTrust}>
              <span>✓ Honest assessment</span>
              <span>✓ Realistic timelines</span>
              <span>✓ Hair health priority</span>
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
