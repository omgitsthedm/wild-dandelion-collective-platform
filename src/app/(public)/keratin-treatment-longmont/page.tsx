import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Keratin Treatment Longmont | Smoothing & Frizz Control | The Wild Dandelion',
  description: 'Professional keratin smoothing treatments in Longmont, CO. Eliminate frizz, reduce styling time, and achieve silky, manageable hair. Formaldehyde-free options. 20+ years experience.',
  keywords: ['keratin treatment longmont', 'smoothing treatment 80501', 'frizz control boulder county', 'brazilian blowout colorado', 'keratin hair treatment'],
  openGraph: {
    title: 'Keratin Smoothing Treatments in Longmont, CO',
    description: 'Eliminate frizz and cut styling time in half. Professional smoothing treatments with formaldehyde-free options.',
    images: [{ url: images.treatment.products }],
  },
};

const benefits = [
  {
    title: 'Frizz Elimination',
    description: 'Goodbye humidity-induced frizz. Your hair stays smooth even in Colorado changing weather.',
    icon: '✨',
  },
  {
    title: 'Cut Styling Time',
    description: 'Blow-drying takes half the time. Many clients air-dry with beautiful results.',
    icon: '⏱️',
  },
  {
    title: 'Formaldehyde-Free',
    description: 'Safe, gentle formulas that smooth without harsh chemicals or dangerous fumes.',
    icon: '🌿',
  },
  {
    title: '3-5 Month Results',
    description: 'Long-lasting smoothness that gradually fades without awkward grow-out lines.',
    icon: '💎',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation & Analysis',
    description: 'We assess your hair type, condition, and goals to recommend the perfect treatment formula.',
  },
  {
    number: '02',
    title: 'Deep Cleansing',
    description: 'Clarifying wash removes buildup and prepares hair for maximum treatment absorption.',
  },
  {
    number: '03',
    title: 'Treatment Application',
    description: 'Keratin formula is applied section by section, then processed under controlled heat.',
  },
  {
    number: '04',
    title: 'Seal & Finish',
    description: 'Flat ironing seals the keratin into the hair shaft for lasting smoothness and shine.',
  },
];

const faqs = [
  {
    question: 'What is the difference between keratin and a Brazilian Blowout?',
    answer: 'Keratin treatments deposit keratin protein into the hair shaft, smoothing and strengthening from within. Brazilian Blowouts create a coating on the hair surface. Keratin typically lasts longer (3-5 months vs 2-3 months) and provides more conditioning benefits. We offer both and will recommend the best option for your hair goals.',
  },
  {
    question: 'Will keratin straighten my curl pattern?',
    answer: 'Keratin treatments relax curl and wave patterns but do not fully straighten most hair types. You will likely keep some wave or loose curl, but it will be smoother, more defined, and frizz-free. If you want bone-straight results, we may recommend a different treatment.',
  },
  {
    question: 'Is keratin safe for color-treated hair?',
    answer: 'Yes! In fact, keratin can extend the life of your color by sealing the cuticle and reducing fading. We recommend doing keratin 1-2 weeks after color services for best results. The treatment also adds incredible shine to color-treated hair.',
  },
  {
    question: 'What is the aftercare for keratin treatments?',
    answer: 'Wait 48-72 hours before washing. Use sulfate-free, sodium chloride-free shampoo and conditioner. Avoid salt water and chlorine when possible. We provide a complete aftercare guide and product recommendations at your appointment.',
  },
  {
    question: 'How much does a keratin treatment cost in Longmont?',
    answer: 'Keratin treatments at The Wild Dandelion start at $275 for shoulder-length hair and range to $450+ for long, thick hair. The investment includes the treatment, take-home aftercare products, and detailed styling instructions. Results last 3-5 months.',
  },
];

const transformations = [
  {
    title: 'Frizz to Fabulous',
    description: 'Eliminating humidity-induced frizz for effortless styling',
    image: images.cuts.long,
  },
  {
    title: 'Curl Control',
    description: 'Defining and smoothing natural waves for manageable texture',
    image: images.cuts.layers,
  },
  {
    title: 'Shine Enhancement',
    description: 'Maximum gloss and reflection for healthy-looking hair',
    image: images.blonde.honey,
  },
];

export default function KeratinTreatmentPage() {
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
            image: images.treatment.products,
            '@id': 'https://the-wild-dandelion-collective.netlify.app',
            url: 'https://the-wild-dandelion-collective.netlify.app/keratin-treatment-longmont',
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
          <img src={images.treatment.products} alt="Keratin treatment products" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Longmont Smoothing Specialists</span>
            <h1 className={styles.heroTitle}>
              Silky, smooth hair <span className={styles.gradientText}>that lasts</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Tired of frizz and endless blow-drying? Our professional keratin smoothing 
              treatments transform unruly hair into manageable, silky perfection that 
              lasts for months.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>⭐ 5.0 (87 Reviews)</span>
              <span className={styles.badge}>🌿 Formaldehyde-Free Options</span>
              <span className={styles.badge}>✨ 3-5 Month Results</span>
            </div>
            <div className={styles.heroButtons}>
              <Button href="/book" size="large">
                Book Keratin Treatment
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
              <span className={styles.sectionEyebrow}>The Keratin Experience</span>
              <h2 className={styles.introTitle}>
                What makes our smoothing treatments different?
              </h2>
              <div className={styles.introText}>
                <p>
                  Keratin is more than just a treatment—it is a transformation in how you 
                  live with your hair. Imagine stepping out of the shower, giving your hair 
                  a quick rough-dry, and having it look salon-perfect. That is the keratin 
                  promise, and it is why so many of our clients call it "life-changing."
                </p>
                <p>
                  At The Wild Dandelion, we use only premium, formaldehyde-free keratin 
                  formulas that prioritize your health alongside beautiful results. Ashley 
                  has spent years perfecting application techniques that ensure even 
                  distribution, optimal processing, and maximum longevity of results.
                </p>
                <p>
                  Whether you are battling Colorado humidity-induced frizz, managing 
                  unruly texture, or simply want to cut your styling time in half, 
                  keratin smoothing delivers silky, manageable hair that makes every day 
                  a good hair day.
                </p>
              </div>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.introImageWrapper}>
                <img src={images.treatment.mask} alt="Hair treatment mask" className={styles.introImage} />
                <div className={styles.introFloatingCard}>
                  <span className={styles.bigNumber}>50%</span>
                  <span className={styles.bigNumberLabel}>Less Styling Time</span>
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
            <span className={styles.sectionEyebrow}>Why Choose Keratin</span>
            <h2 className={styles.sectionTitle}>The Smoothing Difference</h2>
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
            <h2 className={styles.sectionTitle}>The Keratin Journey</h2>
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
            <span className={styles.sectionEyebrow}>Real Results</span>
            <h2 className={styles.sectionTitle}>Keratin Transformations</h2>
            <p className={styles.sectionSubtitle}>Before and after smoothing treatments</p>
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
              <h2 className={styles.pricingTitle}>Keratin Treatment Pricing</h2>
              <p className={styles.pricingDescription}>
                All keratin treatments include thorough consultation, clarifying preparation, 
                premium keratin application, sealing process, blow-dry styling, and take-home 
                aftercare products with detailed instructions.
              </p>
              <div className={styles.pricingTiers}>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Short Hair Keratin</span>
                  <span className={styles.tierPrice}>$275+</span>
                  <span className={styles.tierTime}>2.5-3 hours</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Medium Hair Keratin</span>
                  <span className={styles.tierPrice}>$325+</span>
                  <span className={styles.tierTime}>3-4 hours</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Long/Thick Hair Keratin</span>
                  <span className={styles.tierPrice}>$395+</span>
                  <span className={styles.tierTime}>4-5 hours</span>
                </div>
              </div>
              <p className={styles.pricingNote}>
                * Pricing varies based on hair length, thickness, and treatment type. 
                Brazilian Blowout options also available. Detailed quote provided during consultation.
              </p>
            </div>
            <div className={styles.pricingVisual}>
              <img src={images.treatment.scalp} alt="Hair treatment" className={styles.pricingImage} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Keratin FAQs</h2>
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
              <img src={images.people.happy} alt="Happy keratin client" className={styles.testimonialImage} />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote className={styles.testimonialQuote}>
                "I have thick, curly hair that used to take an hour to blow-dry straight. 
                After my keratin treatment, I can rough-dry in 15 minutes and it looks 
                like I spent an hour styling. Even in Colorado dry winters and humid 
                summers, my hair stays smooth. Game changer!"
              </blockquote>
              <cite className={styles.testimonialAuthor}>
                <strong>Rachel K.</strong>
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
            <h2 className={styles.ctaTitle}>Ready for effortlessly smooth hair?</h2>
            <p className={styles.ctaText}>
              Join the hundreds of Longmont women who have transformed their daily 
              routine with keratin smoothing. Book your consultation today.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Book Keratin Treatment
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="tel:+13038347572" variant="outline" size="large">
                Call for Questions
              </Button>
            </div>
            <div className={styles.ctaTrust}>
              <span>✓ Free consultation</span>
              <span>✓ Formaldehyde-free options</span>
              <span>✓ 3-5 month results</span>
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
