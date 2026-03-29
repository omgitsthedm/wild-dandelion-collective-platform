import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Men's Haircuts Longmont | Barber & Stylist | The Wild Dandelion",
  description: "Premium men's haircuts in Longmont, CO. Precision fades, classic cuts, beard grooming, and gray blending. Ashley DeMarco brings Vidal Sassoon technique to men's grooming. 20+ years experience.",
  keywords: ['mens haircuts longmont', 'barber 80501', 'mens grooming boulder county', 'fade haircut colorado', 'beard trim longmont'],
  openGraph: {
    title: "Men's Haircuts & Grooming in Longmont, CO",
    description: 'Precision cuts, fades, and beard grooming. Vidal Sassoon technique meets modern barbering.',
    images: [{ url: images.cuts.pixie }],
  },
};

const benefits = [
  {
    title: 'Precision Technique',
    description: 'Vidal Sassoon training meets modern barbering for immaculate lines and perfect fades.',
    icon: '✂️',
  },
  {
    title: 'Gray Blending',
    description: 'Subtle color services that reduce gray naturally without obvious "dyed" look.',
    icon: '🎨',
  },
  {
    title: 'Beard Expertise',
    description: 'Sculpted beard shaping, cleanup, and grooming that complements your haircut.',
    icon: '🧔',
  },
  {
    title: 'No-Rush Service',
    description: 'Full 45-minute appointments ensure attention to detail you will not find at chain barbershops.',
    icon: '⏱️',
  },
];

const servicesOffered = [
  {
    number: '01',
    title: 'Classic Cuts',
    description: 'Timeless scissor cuts with modern styling—think Mad Men meets contemporary sophistication.',
  },
  {
    number: '02',
    title: 'Precision Fades',
    description: 'Clean, graduated fades from skin to length with razor-sharp lines and perfect blending.',
  },
  {
    number: '03',
    title: 'Textured Styles',
    description: 'Modern textured cuts that add volume and movement for effortless styling.',
  },
  {
    number: '04',
    title: 'Beard Grooming',
    description: 'Expert beard shaping, neckline cleanup, and conditioning treatments for soft, manageable facial hair.',
  },
];

const faqs = [
  {
    question: 'Do you cut men hair at The Wild Dandelion?',
    answer: 'Absolutely! While we specialize in color services, Ashley has extensive training in men precision cutting and barbering techniques. Many of our most loyal clients are men who appreciate the attention to detail and relaxed, private salon atmosphere.',
  },
  {
    question: 'What is the difference between a salon cut and a barbershop cut?',
    answer: 'Salon cuts typically offer more styling versatility, softer lines, and attention to how your hair moves and grows. We use scissor-over-comb techniques alongside clipper work for a more refined, grown-in look. Plus, you get a relaxing shampoo and scalp massage with every cut.',
  },
  {
    question: 'Can you help with thinning hair or receding hairlines?',
    answer: 'Yes—we specialize in cuts that maximize the appearance of thickness and work with your natural growth patterns. We also offer gray blending services and can recommend styling products that add volume and texture.',
  },
  {
    question: 'What is gray blending and how does it work?',
    answer: 'Gray blending uses demi-permanent color to subtly reduce gray without fully covering it. The result looks natural—like you are graying more slowly—rather than obviously dyed. It fades gradually over 4-6 weeks with no harsh grow-out line.',
  },
  {
    question: 'How much do men haircuts cost in Longmont?',
    answer: 'At The Wild Dandelion, men haircuts start at $50 and include a consultation, shampoo with scalp massage, precision cut, blow-dry styling, and personalized product recommendations. Gray blending starts at $45, and beard grooming can be added for $25.',
  },
];

const portfolio = [
  {
    title: 'Classic Executive',
    description: 'Timeless side-part with tapered neckline for professional polish',
    image: images.cuts.bob,
  },
  {
    title: 'Modern Texture',
    description: 'Textured crop with natural movement and easy styling',
    image: images.cuts.layers,
  },
  {
    title: 'Precision Fade',
    description: 'Clean fade with sharp lines and perfect graduation',
    image: images.cuts.pixie,
  },
];

export default function MensHaircutsPage() {
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
            image: images.cuts.pixie,
            '@id': 'https://the-wild-dandelion-collective.netlify.app',
            url: 'https://the-wild-dandelion-collective.netlify.app/mens-haircuts-longmont',
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
            priceRange: '$$',
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
          <img src={images.cuts.pixie} alt="Men's precision haircut" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Longmont Men's Grooming</span>
            <h1 className={styles.heroTitle}>
              Precision cuts for <span className={styles.gradientText}>the modern man</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Experience the difference of Vidal Sassoon-trained precision combined 
              with modern barbering techniques. Clean fades, classic cuts, beard 
              grooming, and gray blending—all in a relaxed, private setting.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>⭐ 5.0 (87 Reviews)</span>
              <span className={styles.badge}>✂️ Vidal Sassoon Trained</span>
              <span className={styles.badge}>🧔 Beard Grooming Expert</span>
            </div>
            <div className={styles.heroButtons}>
              <Button href="/book" size="large">
                Book Men's Cut
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
              <span className={styles.sectionEyebrow}>Men's Grooming Excellence</span>
              <h2 className={styles.introTitle}>
                Why men choose The Wild Dandelion
              </h2>
              <div className={styles.introText}>
                <p>
                  You have outgrown the rushed, impersonal experience of chain barbershops. 
                  You want a haircut that looks as good two weeks later as it does walking 
                  out of the salon. You want someone who understands your hair, your style, 
                  and your time.
                </p>
                <p>
                  At The Wild Dandelion, we bring the same precision and artistry to men 
                  cuts that we bring to our award-winning color services. Ashley combines 
                  classic Vidal Sassoon cutting techniques with modern barbering skills 
                  to deliver cuts that are clean, precise, and tailored to how your hair 
                  actually grows.
                </p>
                <p>
                  Whether you are looking for a sharp fade, a classic executive cut, or 
                  subtle gray blending that takes years off without looking "done," you 
                  will get the attention to detail and relaxing experience that keeps our 
                  male clients coming back for years.
                </p>
              </div>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.introImageWrapper}>
                <img src={images.salon.station} alt="Salon station" className={styles.introImage} />
                <div className={styles.introFloatingCard}>
                  <span className={styles.bigNumber}>45</span>
                  <span className={styles.bigNumberLabel}>Minutes of Attention</span>
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
            <span className={styles.sectionEyebrow}>The Men's Experience</span>
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

      {/* Services Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Services We Offer</span>
            <h2 className={styles.sectionTitle}>Men's Grooming Services</h2>
          </div>

          <div className={styles.processGrid}>
            {servicesOffered.map((service) => (
              <div key={service.number} className={styles.processCard}>
                <span className={styles.processNumber}>{service.number}</span>
                <h3 className={styles.processTitle}>{service.title}</h3>
                <p className={styles.processDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className={styles.transformations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Styles We Create</span>
            <h2 className={styles.sectionTitle}>Men's Cut Portfolio</h2>
            <p className={styles.sectionSubtitle}>Precision cuts for every style and lifestyle</p>
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
              <h2 className={styles.pricingTitle}>Men's Grooming Pricing</h2>
              <p className={styles.pricingDescription}>
                All haircuts include a thorough consultation, relaxing shampoo with scalp 
                massage, precision cut, blow-dry styling, and personalized product recommendations 
                for at-home maintenance.
              </p>
              <div className={styles.pricingTiers}>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Men's Haircut</span>
                  <span className={styles.tierPrice}>$50</span>
                  <span className={styles.tierTime}>45 min</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Men's Cut + Gray Blend</span>
                  <span className={styles.tierPrice}>$85</span>
                  <span className={styles.tierTime}>75 min</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Beard Grooming</span>
                  <span className={styles.tierPrice}>$25</span>
                  <span className={styles.tierTime}>20 min</span>
                </div>
              </div>
              <p className={styles.pricingNote}>
                * Add beard grooming to any haircut for $20. Gray blending as a standalone 
                service starts at $45. Package pricing available for regular clients.
              </p>
            </div>
            <div className={styles.pricingVisual}>
              <img src={images.salon.mirror} alt="Haircut service" className={styles.pricingImage} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Men's Grooming FAQs</h2>
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
              <img src={images.people.stylist} alt="Happy male client" className={styles.testimonialImage} />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote className={styles.testimonialQuote}>
                "I have been to barbershops all over Boulder County, and nothing compares 
                to the precision Ashley delivers. My fade stays sharp for weeks, the gray 
                blending is completely natural, and I actually enjoy the experience. No more 
                feeling like I am on an assembly line. This is grooming done right."
              </blockquote>
              <cite className={styles.testimonialAuthor}>
                <strong>David M.</strong>
                <span>Longmont Business Owner</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for your best cut yet?</h2>
            <p className={styles.ctaText}>
              Experience the difference of precision cutting and personalized attention. 
              Book your appointment today and discover why Longmont men trust The Wild Dandelion.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Book Men's Appointment
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="tel:+13038347572" variant="outline" size="large">
                Call (303) 834-7572
              </Button>
            </div>
            <div className={styles.ctaTrust}>
              <span>✓ No-rush service</span>
              <span>✓ Precision guaranteed</span>
              <span>✓ Relaxing atmosphere</span>
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
