import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sustainable Salon Colorado | Eco-Friendly Hair | The Wild Dandelion',
  description: 'Colorado first eco-friendly hair salon. Davines products, Green Circle Certified recycling, ammonia-free color, and sustainable practices. Luxury hair care that loves the planet.',
  keywords: ['sustainable salon colorado', 'eco friendly hair salon boulder', 'green circle salon 80501', 'organic hair color longmont', 'davines salon colorado'],
  openGraph: {
    title: 'Sustainable Hair Salon in Colorado | The Wild Dandelion',
    description: 'Eco-luxury hair care with Davines, Green Circle recycling, and sustainable practices. Beauty without compromise.',
    images: [{ url: images.abstract.dandelion }],
  },
};

const benefits = [
  {
    title: 'Davines Products',
    description: 'Carbon-neutral, B Corp certified Italian hair care with ethically sourced ingredients.',
    icon: '🌿',
  },
  {
    title: 'Green Circle Certified',
    description: 'We recycle 95% of salon waste—hair, foils, color tubes, and more—diverting from landfills.',
    icon: '♻️',
  },
  {
    title: 'Ammonia-Free Color',
    description: 'Gentle, low-tox color options that deliver beautiful results without harsh chemicals.',
    icon: '💚',
  },
  {
    title: 'Water Conservation',
    description: 'Eco-friendly basins and mindful practices reduce water usage without sacrificing luxury.',
    icon: '💧',
  },
];

const practices = [
  {
    number: '01',
    title: 'Sustainable Sourcing',
    description: 'We partner with brands committed to ethical ingredient sourcing, fair labor, and minimal environmental impact.',
  },
  {
    number: '02',
    title: 'Zero-Waste Goal',
    description: 'From compostable capes to refillable stations, we are working toward complete waste elimination.',
  },
  {
    number: '03',
    title: 'Energy Efficiency',
    description: 'LED lighting, energy-star appliances, and renewable energy where possible power our salon.',
  },
  {
    number: '04',
    title: 'Community Impact',
    description: 'We support local environmental causes and donate hair clippings for oil spill cleanup.',
  },
];

const faqs = [
  {
    question: 'What makes The Wild Dandelion a sustainable salon?',
    answer: 'We are Green Circle Certified, meaning we recycle 95% of salon waste. We use Davines—a carbon-neutral, B Corp certified product line. Our color options include ammonia-free and low-tox formulations. We conserve water, use energy-efficient systems, and constantly seek ways to reduce our environmental footprint without compromising luxury.',
  },
  {
    question: 'Do sustainable products work as well as conventional ones?',
    answer: 'Absolutely! Modern eco-friendly hair care has evolved tremendously. Davines products deliver professional results that often outperform conventional alternatives. Our clients regularly comment on how healthy their hair feels and how long their color lasts. Sustainability and performance are not mutually exclusive—they enhance each other.',
  },
  {
    question: 'What is Green Circle Salons certification?',
    answer: 'Green Circle Salons is a comprehensive recycling and sustainability program for the beauty industry. Certified salons divert waste from landfills by recycling hair clippings (used for oil spill cleanup and gardening), metal foils and color tubes, plastic, paper, and even excess hair color. It is the gold standard for salon sustainability.',
  },
  {
    question: 'Is ammonia-free color as effective?',
    answer: 'Yes! Modern ammonia-free color technology has advanced significantly. While the lifting process may work differently, the coverage, longevity, and shine often exceed ammonia-based alternatives. Many clients find ammonia-free color gentler on their scalp and notice improved hair condition over time.',
  },
  {
    question: 'Do eco-friendly services cost more?',
    answer: 'Our pricing reflects the quality of service and expertise, not a premium for sustainability. We believe eco-conscious beauty should be accessible. By choosing The Wild Dandelion, you are supporting sustainable practices without paying extra for the privilege.',
  },
];

const gallery = [
  {
    title: 'Davines Product Wall',
    description: 'Carbon-neutral Italian hair care in recyclable packaging',
    image: images.salon.productWall,
  },
  {
    title: 'Sustainable Station',
    description: 'Thoughtfully designed workspaces that minimize waste',
    image: images.salon.station,
  },
  {
    title: 'Natural Light',
    description: 'Energy-efficient lighting and naturally bright spaces',
    image: images.salon.interior,
  },
];

export default function SustainableSalonPage() {
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
            image: images.abstract.dandelion,
            '@id': 'https://the-wild-dandelion-collective.netlify.app',
            url: 'https://the-wild-dandelion-collective.netlify.app/sustainable-salon-colorado',
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
          <img src={images.abstract.dandelion} alt="Dandelion nature" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Colorado Green Circle Salon</span>
            <h1 className={styles.heroTitle}>
              Beauty that <span className={styles.gradientText}>loves the planet</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Luxury hair care does not have to cost the earth. Experience eco-conscious 
              beauty with Davines products, sustainable practices, and guilt-free glamour 
              at Colorado's premier green salon.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>🌿 Green Circle Certified</span>
              <span className={styles.badge}>♻️ 95% Waste Diverted</span>
              <span className={styles.badge}>💚 B Corp Products</span>
            </div>
            <div className={styles.heroButtons}>
              <Button href="/book" size="large">
                Book Sustainable Beauty
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
              <span className={styles.sectionEyebrow}>Our Philosophy</span>
              <h2 className={styles.introTitle}>
                Why sustainability matters to us
              </h2>
              <div className={styles.introText}>
                <p>
                  The beauty industry generates over 877 pounds of waste per minute. 
                  Traditional salons send foils, color tubes, hair clippings, and plastic 
                  to landfills every day. We believe there is a better way—and we are proving 
                  that luxury hair care and environmental responsibility can coexist beautifully.
                </p>
                <p>
                  At The Wild Dandelion, sustainability is not a marketing gimmick—it is 
                  woven into every decision we make. From the moment you walk through our 
                  doors, you will notice the difference: the gentle, natural scent of 
                  plant-based products, the warm glow of energy-efficient lighting, the 
                  knowledge that your hair clippings will help clean up oil spills rather 
                  than rot in a landfill.
                </p>
                <p>
                  Colorado beautiful landscapes inspire us daily to be better stewards of 
                  our planet. Whether you are Boulder outdoor enthusiast or Longmont 
                  sustainability advocate, you will find a salon home that aligns with your values 
                  without compromising on the exceptional hair care you deserve.
                </p>
              </div>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.introImageWrapper}>
                <img src={images.abstract.flowers} alt="Natural flowers" className={styles.introImage} />
                <div className={styles.introFloatingCard}>
                  <span className={styles.bigNumber}>95%</span>
                  <span className={styles.bigNumberLabel}>Waste Diverted</span>
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
            <span className={styles.sectionEyebrow}>Our Commitment</span>
            <h2 className={styles.sectionTitle}>Sustainable Practices</h2>
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

      {/* Practices Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>How We Do It</span>
            <h2 className={styles.sectionTitle}>Our Sustainability Pillars</h2>
          </div>

          <div className={styles.processGrid}>
            {practices.map((practice) => (
              <div key={practice.number} className={styles.processCard}>
                <span className={styles.processNumber}>{practice.number}</span>
                <h3 className={styles.processTitle}>{practice.title}</h3>
                <p className={styles.processDescription}>{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.transformations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Inside Our Salon</span>
            <h2 className={styles.sectionTitle}>Sustainable Spaces</h2>
            <p className={styles.sectionSubtitle}>Where eco-consciousness meets elegant design</p>
          </div>

          <div className={styles.transformationsGrid}>
            {gallery.map((item) => (
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

      {/* Davines Section */}
      <section className={styles.pricing}>
        <div className={styles.container}>
          <div className={styles.pricingCard}>
            <div className={styles.pricingContent}>
              <span className={styles.sectionEyebrow}>Our Partner</span>
              <h2 className={styles.pricingTitle}>Davines: Beauty + Sustainability</h2>
              <p className={styles.pricingDescription}>
                We exclusively use Davines products—a family-owned Italian company that 
                has achieved B Corp certification and carbon neutrality. Their formulations 
                combine high-performance hair care with ethically sourced, natural-origin 
                ingredients in recyclable packaging.
              </p>
              <div className={styles.pricingTiers}>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>B Corp Certified</span>
                  <span className={styles.tierPrice}>✓</span>
                  <span className={styles.tierTime}>Highest standards</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Carbon Neutral</span>
                  <span className={styles.tierPrice}>✓</span>
                  <span className={styles.tierTime}>Offset emissions</span>
                </div>
                <div className={styles.pricingTier}>
                  <span className={styles.tierName}>Ethical Sourcing</span>
                  <span className={styles.tierPrice}>✓</span>
                  <span className={styles.tierTime}>Fair trade ingredients</span>
                </div>
              </div>
              <p className={styles.pricingNote}>
                * Every Davines product we use supports their mission of sustainable beauty 
                that cares for people and the planet.
              </p>
            </div>
            <div className={styles.pricingVisual}>
              <img src={images.abstract.warm} alt="Natural warmth" className={styles.pricingImage} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Sustainability FAQs</h2>
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
              <img src={images.people.happy} alt="Happy sustainable client" className={styles.testimonialImage} />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote className={styles.testimonialQuote}>
                "As someone who prioritizes sustainability, finding The Wild Dandelion was 
                a dream come true. My hair has never looked better, and I love knowing that 
                my beauty routine is not harming the planet. The Davines products smell 
                amazing and my color lasts longer than ever. This is how all salons should be!"
              </blockquote>
              <cite className={styles.testimonialAuthor}>
                <strong>Elena S.</strong>
                <span>Boulder Environmental Scientist</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for guilt-free glamour?</h2>
            <p className={styles.ctaText}>
              Experience the intersection of luxury and sustainability. Book your appointment 
              at Colorado's premier eco-friendly salon and discover beauty that feels as good 
              as it looks.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Book Sustainable Beauty
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="/services" variant="outline" size="large">
                View Services
              </Button>
            </div>
            <div className={styles.ctaTrust}>
              <span>✓ Green Circle Certified</span>
              <span>✓ Davines products</span>
              <span>✓ Zero compromise on luxury</span>
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
