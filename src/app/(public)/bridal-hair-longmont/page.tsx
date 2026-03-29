import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Bridal Hair Longmont | Wedding Hair Specialist | The Wild Dandelion',
  description: 'Award-winning bridal hair in Longmont, CO. Ashley DeMarco specializes in romantic updos, boho waves, and elegant wedding styles that last all day. 20+ years experience.',
  keywords: ['bridal hair longmont', 'wedding hair stylist 80501', 'bridal updo boulder county', 'wedding day hair colorado', 'bride hair specialist'],
  openGraph: {
    title: 'Bridal Hair Specialists in Longmont, CO',
    description: 'Romantic, elegant bridal hair that lasts from ceremony to last dance. Vidal Sassoon trained stylist.',
    images: [{ url: images.bridal.updo }],
  },
};

const benefits = [
  {
    title: 'All-Day Hold',
    description: 'Styles designed to withstand dancing, hugging, and Colorado weather from ceremony to reception.',
    icon: '👰',
  },
  {
    title: 'Trial Sessions',
    description: 'Comprehensive bridal trials to perfect your look and eliminate wedding day stress.',
    icon: '✨',
  },
  {
    title: 'Bridal Party Service',
    description: 'Complete bridal party packages for mothers, bridesmaids, and flower girls.',
    icon: '💐',
  },
  {
    title: 'On-Location Available',
    description: 'We come to your venue for seamless wedding day preparation.',
    icon: '🚗',
  },
];

const stylesOffered = [
  {
    number: '01',
    title: 'Romantic Updos',
    description: 'Timeless elegance with face-framing pieces, perfect for traditional ceremonies and classic gowns.',
  },
  {
    number: '02',
    title: 'Boho Waves',
    description: 'Effortless, textured waves with floral accents for the free-spirited bride.',
  },
  {
    number: '03',
    title: 'Sleek & Modern',
    description: 'Clean lines and polished finishes for the contemporary bride who loves minimalist elegance.',
  },
  {
    number: '04',
    title: 'Half-Up Styles',
    description: 'The perfect balance of structure and movement, ideal for showcasing beautiful hair color.',
  },
];

const faqs = [
  {
    question: 'When should I book my bridal hair trial?',
    answer: 'Schedule your trial 2-3 months before your wedding date. This gives us time to refine the look and allows for any color adjustments. Bring your veil, hair accessories, and inspiration photos to the trial.',
  },
  {
    question: 'How long does bridal hair take on the wedding day?',
    answer: 'Bridal hair typically takes 60-90 minutes. For bridal parties, we allocate 30-45 minutes per person. We create a detailed timeline to ensure everyone is ready with time to spare for photos.',
  },
  {
    question: 'Do you travel to wedding venues in Boulder County?',
    answer: 'Yes! We offer on-location services throughout Longmont, Boulder, Lyons, and surrounding areas. Travel fees vary by distance. We also welcome bridal parties to our beautiful Main Street salon.',
  },
  {
    question: 'Should I wash my hair before the wedding?',
    answer: 'Wash your hair the day before, not the morning of. Slightly dirty hair holds styles better and provides more texture for updos. We will add volume and freshness during styling.',
  },
  {
    question: 'What if my wedding is outdoors in Colorado weather?',
    answer: 'Colorado weather can be unpredictable! We use professional-grade products and techniques designed to combat wind and humidity. During your trial, we discuss your venue and adjust the style accordingly for maximum staying power.',
  },
];

const portfolio = [
  {
    title: 'Classic Bridal Elegance',
    description: 'Timeless updo with pearl accents for a traditional ceremony',
    image: images.bridal.elegant,
  },
  {
    title: 'Boho Garden Wedding',
    description: 'Loose waves with fresh flower crown at Boulder flower farm',
    image: images.bridal.boho,
  },
  {
    title: 'Beach Bride Beauty',
    description: 'Soft romantic waves for a destination wedding in Mexico',
    image: images.bridal.waves,
  },
];

export default function BridalHairPage() {
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
            image: images.bridal.updo,
            '@id': 'https://the-wild-dandelion-collective.netlify.app',
            url: 'https://the-wild-dandelion-collective.netlify.app/bridal-hair-longmont',
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
          <img src={images.bridal.updo} alt="Bridal hair updo" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Longmont Bridal Hair Experts</span>
            <h1 className={styles.heroTitle}>
              Your dream wedding <span className={styles.gradientText}>hair awaits</span>
            </h1>
            <p className={styles.heroSubtitle}>
              From intimate mountain ceremonies to grand ballroom celebrations, 
              we create bridal hairstyles that capture your essence and last from 
              first look to last dance.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>⭐ 5.0 (87 Reviews)</span>
              <span className={styles.badge}>🏆 Best of Boulder County 2024</span>
              <span className={styles.badge}>💎 200+ Brides Served</span>
            </div>
            <div className={styles.heroButtons}>
              <Button href="/book" size="large">
                Book Bridal Consultation
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
              <span className={styles.sectionEyebrow}>Wedding Day Perfection</span>
              <h2 className={styles.introTitle}>
                Why Colorado brides choose us
              </h2>
              <div className={styles.introText}>
                <p>
                  Your wedding day deserves nothing less than perfection. At The Wild Dandelion, 
                  we understand that bridal hair is more than just styling—it is the crowning touch 
                  that completes your vision and makes you feel like the most beautiful version of yourself.
                </p>
                <p>
                  Ashley has worked with over 200 brides across Boulder County, from intimate 
                  ceremonies in Lyons to grand celebrations at Boulder wineries. Her approach 
                  combines technical expertise with an intuitive understanding of each bride's 
                  unique style, ensuring your hair complements your dress, venue, and personal aesthetic.
                </p>
                <p>
                  Whether you dream of a romantic updo with delicate face-framing pieces, 
                  effortless boho waves adorned with fresh flowers, or sleek modern elegance, 
                  we bring your vision to life with artistry and precision.
                </p>
              </div>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.introImageWrapper}>
                <img src={images.bridal.flowers} alt="Bridal flowers in hair" className={styles.introImage} />
                <div className={styles.introFloatingCard}>
                  <span className={styles.bigNumber}>200+</span>
                  <span className={styles.bigNumberLabel}>Happy Brides</span>
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
            <span className={styles.sectionEyebrow}>The Bridal Experience</span>
            <h2 className={styles.sectionTitle}>Why Brides Trust Us</h2>
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

      {/* Styles Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Our Signature Styles</span>
            <h2 className={styles.sectionTitle}>Bridal Hair Styles</h2>
          </div>

          <div className={styles.processGrid}>
            {stylesOffered.map((style) => (
              <div key={style.number} className={styles.processCard}>
                <span className={styles.processNumber}>{style.number}</span>
                <h3 className={styles.processTitle}>{style.title}</h3>
                <p className={styles.processDescription}>{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className={styles.transformations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Real Brides</span>
            <h2 className={styles.sectionTitle}>Wedding Day Portfolios</h2>
            <p className={styles.sectionSubtitle}>Every bride, every love story, uniquely beautiful</p>
          </div>

          <div className={styles.transformationsGrid}>
            {portfolio.map((item) => (
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
              View Bridal Gallery
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
              <h2 className={styles.pricingTitle}>Bridal Hair Pricing</h2>
              <p className={styles.pricingDescription}>
                Every bridal service includes a comprehensive consultation, trial session, 
                wedding day styling, premium products, and touch-up kit. Travel fees apply 
                for on-location services.
              </p>
              <div className={styles.pricingTiers}>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Bridal Hair Trial</span>
                  <span className={styles.tierPrice}>$125</span>
                  <span className={styles.tierTime}>90 min</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Wedding Day Bridal Hair</span>
                  <span className={styles.tierPrice}>$185</span>
                  <span className={styles.tierTime}>60-90 min</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Bridesmaid/Mother Hair</span>
                  <span className={styles.tierPrice}>$95</span>
                  <span className={styles.tierTime}>45 min</span>
                </div>
              </div>
              <p className={styles.pricingNote}>
                * Bridal packages available. Contact us for custom quotes for large bridal parties 
                or destination weddings in Boulder County and beyond.
              </p>
            </div>
            <div className={styles.pricingVisual}>
              <img src={images.bridal.waves} alt="Bridal hair waves" className={styles.pricingImage} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Bridal Hair FAQs</h2>
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
              <img src={images.people.happy} alt="Happy bride" className={styles.testimonialImage} />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote className={styles.testimonialQuote}>
                "Ashley made me feel like an absolute princess on my wedding day. From the trial 
                to the big day, everything was perfect. My hair stayed flawless through dancing, 
                wind, and happy tears. My bridesmaids looked stunning too. I cannot recommend 
                The Wild Dandelion enough!"
              </blockquote>
              <cite className={styles.testimonialAuthor}>
                <strong>Jennifer K.</strong>
                <span>Married at Chautauqua Park, Boulder</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to say yes to your dream hair?</h2>
            <p className={styles.ctaText}>
              Join the hundreds of Colorado brides who trusted Ashley for their wedding day. 
              Book your bridal consultation and let's create something magical together.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Schedule Bridal Consultation
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="/gallery" variant="outline" size="large">
                See More Work
              </Button>
            </div>
            <div className={styles.ctaTrust}>
              <span>✓ Complimentary bridal consultation</span>
              <span>✓ Trial session included</span>
              <span>✓ Serving all of Boulder County</span>
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
