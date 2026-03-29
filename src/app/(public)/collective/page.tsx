'use client';

import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

const rentalFeatures = [
  {
    icon: '💺',
    title: 'Dedicated Styling Station',
    description: 'Your own professional-grade station with premium tools and amenities.',
    image: images.salon.station,
  },
  {
    icon: '🏠',
    title: 'Private Treatment Rooms',
    description: 'Two fully-equipped rooms available for services requiring privacy.',
    image: images.salon.detail,
  },
  {
    icon: '🛋️',
    title: 'Lounge & Shampoo Area',
    description: 'Comfortable shampoo bowls and a relaxing client waiting area.',
    image: images.salon.sink,
  },
  {
    icon: '🅿️',
    title: 'Prime Location & Parking',
    description: 'Heart of downtown Longmont with ample free parking for you and clients.',
    image: images.salon.interior,
  },
  {
    icon: '📶',
    title: 'Modern Amenities',
    description: 'High-speed wifi, laundry facilities, and professional product storage.',
    image: images.salon.productWall,
  },
  {
    icon: '👥',
    title: 'Community Vibe',
    description: 'Work alongside talented professionals in a supportive, creative environment.',
    image: images.people.stylist,
  },
];

const pricingOptions = [
  {
    type: 'Styling Station',
    price: '$800',
    period: '/month',
    description: 'Full-time dedicated station rental',
    features: [
      'Your own styling station',
      'Access to shared facilities',
      'Laundry service included',
      'Wifi & utilities included',
      'Flexible scheduling',
    ],
    cta: 'Apply Now',
    popular: false,
  },
  {
    type: 'Retail Space',
    price: '$800',
    period: '/month',
    description: 'Prime retail area in our front space',
    features: [
      'High-traffic location',
      'Beautiful display area',
      'Shared marketing opportunities',
      'Event space access',
      'Community cross-promotion',
    ],
    cta: 'Learn More',
    popular: true,
  },
  {
    type: 'Treatment Room',
    price: 'Custom',
    period: '',
    description: 'Hourly or part-time room rental',
    features: [
      'Private treatment space',
      'By appointment scheduling',
      'Hourly or daily rates',
      'Perfect for estheticians',
      'Flexible arrangements',
    ],
    cta: 'Inquire',
    popular: false,
  },
];

const currentArtists = [
  {
    name: 'Ashley DeMarco',
    title: 'Owner & Master Stylist',
    specialty: 'Color Specialist',
    image: images.people.ashley,
    instagram: '@ashley.wilddandelion',
  },
  {
    name: 'Join the Collective',
    title: 'Styling Station Available',
    specialty: 'Your spot is waiting!',
    image: images.salon.chairs,
    instagram: '',
  },
];

export default function CollectivePage() {
  return (
    <main className={styles.main}>
      {/* Hero Section with Image */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img 
            src={images.salon.station}
            alt="Salon styling station"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Join Our Space</span>
            <h1 className={styles.heroTitle}>
              A collective of <span className={styles.gradientText}>creatives</span>
            </h1>
            <p className={styles.heroSubtitle}>
              The Wild Dandelion Collective isn't just a salon—it's a community. 
              We're building a space where independent beauty professionals can 
              thrive together.
            </p>
            <div className={styles.heroButtons}>
              <Button href="/rentals" size="large">
                View Rental Options
              </Button>
              <Button href="/contact" variant="outline" size="large">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with Images */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>The Space</span>
            <h2 className={styles.sectionTitle}>Everything you need to succeed</h2>
          </div>

          <div className={styles.featuresGrid}>
            {rentalFeatures.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <div className={styles.featureImageWrapper}>
                  <img src={feature.image} alt={feature.title} className={styles.featureImage} />
                  <div className={styles.featureIconOverlay}>
                    <span>{feature.icon}</span>
                  </div>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Rental Options</span>
            <h2 className={styles.sectionTitle}>Flexible plans for your business</h2>
            <p className={styles.sectionSubtitle}>
              We offer competitive rates and flexible terms to help you grow your business
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {pricingOptions.map((option) => (
              <div 
                key={option.type} 
                className={`${styles.pricingCard} ${option.popular ? styles.popular : ''}`}
              >
                {option.popular && (
                  <span className={styles.popularBadge}>Available Now</span>
                )}
                <h3 className={styles.pricingType}>{option.type}</h3>
                <div className={styles.pricingAmount}>
                  <span className={styles.price}>{option.price}</span>
                  <span className={styles.period}>{option.period}</span>
                </div>
                <p className={styles.pricingDescription}>{option.description}</p>
                <ul className={styles.pricingFeatures}>
                  {option.features.map((feature) => (
                    <li key={feature} className={styles.pricingFeature}>
                      <span className={styles.check}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  href="/rentals" 
                  variant={option.popular ? 'primary' : 'outline'}
                  fullWidth
                >
                  {option.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Artists with Images */}
      <section className={styles.artists}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Meet the Team</span>
            <h2 className={styles.sectionTitle}>Current Collective Members</h2>
          </div>

          <div className={styles.artistsGrid}>
            {currentArtists.map((artist) => (
              <div key={artist.name} className={styles.artistCard}>
                <div className={styles.artistImageWrapper}>
                  <img src={artist.image} alt={artist.name} className={styles.artistImage} />
                </div>
                <div className={styles.artistInfo}>
                  <h3 className={styles.artistName}>{artist.name}</h3>
                  <span className={styles.artistTitle}>{artist.title}</span>
                  <span className={styles.artistSpecialty}>{artist.specialty}</span>
                  {artist.instagram && (
                    <a 
                      href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.artistInstagram}
                    >
                      {artist.instagram}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Image */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.benefitsContent}>
            <div className={styles.benefitsText}>
              <span className={styles.sectionEyebrow}>Why Join?</span>
              <h2 className={styles.benefitsTitle}>
                More than just a chair rental
              </h2>
              <p className={styles.benefitsDescription}>
                When you join the Wild Dandelion Collective, you're joining a 
                supportive community of beauty professionals. We believe in 
                collaboration over competition and celebrate each other's wins.
              </p>
              <ul className={styles.benefitsList}>
                <li>
                  <span className={styles.benefitIcon}>🤝</span>
                  <div>
                    <strong>Community Support</strong>
                    <p>Network with fellow professionals and share referrals</p>
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}>📚</span>
                  <div>
                    <strong>Education</strong>
                    <p>Access to workshops and continued learning opportunities</p>
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}>🎉</span>
                  <div>
                    <strong>Events</strong>
                    <p>Participate in salon events and client appreciation days</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.benefitsVisual}>
              <div className={styles.benefitsImageWrapper}>
                <img src={images.collective.community} alt="Community" className={styles.benefitsImage} />
              </div>
              <div className={styles.benefitsCard}>
                <span className={styles.quoteIcon}>"</span>
                <p className={styles.quoteText}>
                  The energy here is incredible. Having other talented artists 
                  around pushes me to be better every day.
                </p>
                <div className={styles.quoteAuthor}>
                  <span className={styles.quoteName}>— Future You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.faqCard}>
            <h2 className={styles.faqTitle}>Questions about joining?</h2>
            <p className={styles.faqText}>
              We know choosing a new space for your business is a big decision. 
              We're here to answer all your questions and help you determine if 
              the Collective is the right fit for you.
            </p>
            <div className={styles.faqButtons}>
              <Button href="/faq" variant="outline">
                Read FAQs
              </Button>
              <Button href="/contact">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to grow your business?</h2>
            <p className={styles.ctaText}>
              Join a community that supports your success. Styling stations and 
              retail space available now.
            </p>
            <Button href="/rentals" size="large">
              View Rental Details
              <span className={styles.buttonSparkle}>✨</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
