import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blonde Specialist Longmont | Ashley DeMarco | The Wild Dandelion',
  description: 'Boulder County premier blonde specialist. Ashley DeMarco creates everything from honey gold to icy platinum. Vidal Sassoon trained. 20+ years blonde expertise.',
  keywords: ['blonde specialist longmont', 'best blonde colorist 80501', 'platinum blonde boulder', 'honey blonde colorado', 'ashley demarco blonde'],
  openGraph: {
    title: 'Blonde Hair Specialist in Longmont, CO',
    description: 'From lived-in bronde to icy platinum. The most trusted blonde colorist in Boulder County.',
    images: [{ url: images.blonde.platinum }],
  },
};

const benefits = [
  {
    title: 'Blonde Expertise',
    description: '20+ years specializing exclusively in blonde color chemistry and techniques.',
    icon: '💎',
  },
  {
    title: 'Healthy Blonde',
    description: 'Advanced bond-building treatments ensure strong, shiny blonde hair.',
    icon: '✨',
  },
  {
    title: 'Custom Toning',
    description: 'Bespoke gloss formulations for your perfect shade—never brassy, always luminous.',
    icon: '🎨',
  },
  {
    title: 'Grow-Out Magic',
    description: 'Strategic placement means 8-12 weeks between appointments.',
    icon: '🌿',
  },
];

const blondeTypes = [
  {
    number: '01',
    title: 'Lived-In Bronde',
    description: 'The perfect bridge between brunette and blonde. Natural dimension with seamless grow-out for low-maintenance luxury.',
  },
  {
    number: '02',
    title: 'Honey & Gold',
    description: 'Warm, sun-kissed tones that brighten your complexion and bring out your natural glow.',
  },
  {
    number: '03',
    title: 'Beige & Neutral',
    description: 'Sophisticated, expensive-looking blonde that works with any skin tone and wardrobe.',
  },
  {
    number: '04',
    title: 'Icy Platinum',
    description: 'Bold, fashion-forward white blonde for the client who wants to make a statement.',
  },
];

const faqs = [
  {
    question: 'How do I know which blonde will suit me best?',
    answer: 'During your consultation, Ashley analyzes your skin undertones, eye color, natural base, and lifestyle to recommend the perfect blonde family. We consider everything from your daily makeup routine to your wardrobe palette to ensure your blonde feels authentically you.',
  },
  {
    question: 'Will going blonde damage my hair?',
    answer: 'Not when done correctly! We use premium Davines color with bond builders like Olaplex or K18. Ashley blonde transformations prioritize hair health above all—if your hair needs strengthening before lightening, we will create a plan to get you there safely.',
  },
  {
    question: 'How long does it take to go platinum blonde?',
    answer: 'Depending on your starting point, achieving platinum can take 1-3 sessions spaced 6-8 weeks apart. This gradual approach protects your hair integrity while building the perfect foundation for that icy white finish.',
  },
  {
    question: 'How do I maintain my blonde between appointments?',
    answer: 'Use purple shampoo 1-2 times weekly to neutralize brassiness, always follow with deep conditioner, and minimize heat styling. We provide a complete blonde care guide and recommend professional products tailored to your specific blonde type.',
  },
  {
    question: 'What is the investment for blonde services?',
    answer: 'Blonde services start at $180 for partial highlights and range to $350+ for complex platinum transformations. During your consultation, we provide a detailed quote based on your hair length, thickness, and desired result.',
  },
];

const transformations = [
  {
    title: 'Bronde Beauty',
    description: 'Natural dimension for the client transitioning to blonde',
    image: images.blonde.balayage,
  },
  {
    title: 'Golden Hour Glow',
    description: 'Warm honey tones that catch the Colorado sunlight',
    image: images.blonde.honey,
  },
  {
    title: 'Platinum Perfection',
    description: 'Multi-session journey to icy white blonde',
    image: images.blonde.platinum,
  },
];

export default function BlondeSpecialistPage() {
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
            image: images.blonde.platinum,
            '@id': 'https://the-wild-dandelion-collective.netlify.app',
            url: 'https://the-wild-dandelion-collective.netlify.app/blonde-specialist-longmont',
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
          <img src={images.blonde.platinum} alt="Platinum blonde hair" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Boulder County Blonde Expert</span>
            <h1 className={styles.heroTitle}>
              Your blonde <span className={styles.gradientText}>transformation</span> starts here
            </h1>
            <p className={styles.heroSubtitle}>
              From sun-kissed honey to bold platinum, Ashley DeMarco has spent 20+ years 
              mastering the art and science of beautiful blonde hair. The most trusted 
              blonde specialist in Longmont and beyond.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>⭐ 5.0 (87 Reviews)</span>
              <span className={styles.badge}>🏆 Best of Boulder County 2024</span>
              <span className={styles.badge}>✨ Vidal Sassoon Trained</span>
            </div>
            <div className={styles.heroButtons}>
              <Button href="/book" size="large">
                Book Blonde Consultation
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
              <span className={styles.sectionEyebrow}>The Blonde Authority</span>
              <h2 className={styles.introTitle}>
                Why Ashley is Boulder County's most sought-after blonde specialist
              </h2>
              <div className={styles.introText}>
                <p>
                  Blonde is not just a color—it is a commitment to artistry, chemistry, 
                  and understanding. Ashley DeMarco has dedicated over two decades to 
                  mastering the complexities of blonde hair, from the science of lightening 
                  to the art of creating dimensional, natural-looking results.
                </p>
                <p>
                  What sets Ashley apart is her holistic approach to blonde transformations. 
                  She considers your skin undertones, lifestyle, maintenance preferences, 
                  and hair integrity to create a blonde that is uniquely yours. Whether you 
                  dream of lived-in bronde, golden balayage, or striking platinum, Ashley 
                  has the expertise to bring your vision to life while keeping your hair healthy.
                </p>
                <p>
                  Her clients travel from Boulder, Denver, and throughout Colorado because 
                  they know that exceptional blonde hair requires exceptional skill. At 
                  The Wild Dandelion, blonde is not an afterthought—it is our specialty.
                </p>
              </div>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.introImageWrapper}>
                <img src={images.people.ashley} alt="Ashley DeMarco blonde specialist" className={styles.introImage} />
                <div className={styles.introFloatingCard}>
                  <span className={styles.bigNumber}>20+</span>
                  <span className={styles.bigNumberLabel}>Years Blonde Mastery</span>
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
            <span className={styles.sectionEyebrow}>The Blonde Experience</span>
            <h2 className={styles.sectionTitle}>The Blonde Specialist Difference</h2>
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

      {/* Blonde Types Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Our Signature Blondes</span>
            <h2 className={styles.sectionTitle}>Blonde For Every Vision</h2>
          </div>

          <div className={styles.processGrid}>
            {blondeTypes.map((type) => (
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
            <span className={styles.sectionEyebrow}>Blonde Portfolio</span>
            <h2 className={styles.sectionTitle}>Real Blonde Transformations</h2>
            <p className={styles.sectionSubtitle}>Every blonde, uniquely crafted for the individual</p>
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
              View Full Blonde Gallery
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
              <h2 className={styles.pricingTitle}>Blonde Service Pricing</h2>
              <p className={styles.pricingDescription}>
                Every blonde service includes consultation, custom color formulation, 
                premium Davines products, bond builder treatment, gloss/toner, and 
                professional styling. Complex transformations may require multiple sessions.
              </p>
              <div className={styles.pricingTiers}>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Partial Blonde Highlights</span>
                  <span className={styles.tierPrice}>$180+</span>
                  <span className={styles.tierTime}>2.5-3 hours</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Full Balayage/Babylights</span>
                  <span className={styles.tierPrice}>$220+</span>
                  <span className={styles.tierTime}>3-4 hours</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Platinum Transformation</span>
                  <span className={styles.tierPrice}>$280+</span>
                  <span className={styles.tierTime}>3-5 hours</span>
                </div>
              </div>
              <p className={styles.pricingNote}>
                * Final pricing depends on hair length, thickness, starting level, and desired result. 
                A detailed quote is provided during your consultation.
              </p>
            </div>
            <div className={styles.pricingVisual}>
              <img src={images.blonde.highlights} alt="Blonde highlights result" className={styles.pricingImage} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Blonde FAQs</h2>
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
              <img src={images.people.client} alt="Happy blonde client" className={styles.testimonialImage} />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote className={styles.testimonialQuote}>
                "I have been to colorists in LA and NYC, and Ashley is truly world-class. 
                She took me from dark brown to the most beautiful platinum without compromising 
                my hair health. The grow-out is seamless, and I get stopped constantly asking 
                who does my color. Worth every penny and the drive from Denver!"
              </blockquote>
              <cite className={styles.testimonialAuthor}>
                <strong>Michelle R.</strong>
                <span>Denver, CO</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for your blonde transformation?</h2>
            <p className={styles.ctaText}>
              Join the hundreds of Colorado women who trust Ashley for their blonde hair. 
              Book your consultation today and discover the blonde you have been dreaming of.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Schedule Blonde Consultation
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="/gallery" variant="outline" size="large">
                See More Blondes
              </Button>
            </div>
            <div className={styles.ctaTrust}>
              <span>✓ Free color consultation</span>
              <span>✓ Personalized blonde plan</span>
              <span>✓ Healthy hair guarantee</span>
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
