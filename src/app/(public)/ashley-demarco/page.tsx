import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Ashley DeMarco | Master Colorist & Balayage Specialist | Longmont, CO',
  description: 'Meet Ashley DeMarco, Vidal Sassoon-trained master colorist with 20+ years experience. Specializing in balayage, lived-in blonde, and bridal styling in Longmont, Colorado.',
  keywords: ['Ashley DeMarco', 'hair colorist longmont', 'balayage specialist colorado', 'vidal sassoon trained', 'master stylist boulder county'],
  openGraph: {
    title: 'Ashley DeMarco | Master Colorist & Balayage Specialist',
    description: 'Vidal Sassoon-trained with 20+ years experience. Specializing in balayage, lived-in blonde, and bridal styling.',
    images: [{ url: images.people.ashley }],
  },
};

const credentials = [
  {
    year: '2003',
    title: 'Vidal Sassoon Academy, London',
    description: 'Graduated with honors from the world-renowned precision cutting and coloring academy.',
    icon: '🎓',
  },
  {
    year: '2005',
    title: 'Bumble & bumble University, NYC',
    description: 'Advanced training in editorial styling and avant-garde coloring techniques.',
    icon: '🗽',
  },
  {
    year: '2010',
    title: 'Davines Brand Ambassador',
    description: 'Selected to represent the sustainable Italian color line in the US market.',
    icon: '🌿',
  },
  {
    year: '2015',
    title: 'Wella Color Master Certification',
    description: 'Achieved master colorist status specializing in blonde transformations.',
    icon: '🏆',
  },
  {
    year: '2020',
    title: 'The Wild Dandelion Collective',
    description: 'Opened the salon on Main Street to create a community-focused beauty space.',
    icon: '🌸',
  },
];

const specialties = [
  {
    title: 'Balayage & Hand-Painted Color',
    description: 'Custom, natural-looking highlights that grow out seamlessly.',
    image: images.blonde.balayage,
  },
  {
    title: 'Lived-In Blonde',
    description: 'Low-maintenance blonde that looks expensive without constant upkeep.',
    image: images.blonde.honey,
  },
  {
    title: 'Bridal & Event Styling',
    description: 'Wedding day hair that lasts from "I do" to last dance.',
    image: images.bridal.updo,
  },
  {
    title: 'Color Correction',
    description: 'Fixing at-home color disasters and transforming unwanted tones.',
    image: images.vivid.creative,
  },
];

const testimonials = [
  {
    quote: "Ashley is literally the only person I trust with my hair. After years of bad highlights, she transformed me into the blonde I always wanted to be.",
    author: "Michelle R.",
    title: "Longmont Resident",
    image: images.people.client,
  },
  {
    quote: "She took my wedding hair vision and made it even better than I imagined. I felt like a princess and my hair stayed perfect all day.",
    author: "Jessica T.",
    title: "Bride, 2024",
    image: images.bridal.elegant,
  },
  {
    quote: "I have been seeing Ashley for 8 years. She knows my hair better than I do and always knows exactly what I need.",
    author: "Amanda K.",
    title: "Longmont Business Owner",
    image: images.cuts.bob,
  },
];

const pressFeatures = [
  { publication: 'Boulder Lifestyle Magazine', title: 'Top Colorists in Boulder County', year: '2024' },
  { publication: 'Longmont Times-Call', title: 'Best Hair Salon Readers Choice', year: '2023' },
  { publication: 'Colorado Wedding Magazine', title: 'Featured Wedding Stylist', year: '2023' },
  { publication: 'Davines International', title: 'Artisan Salon Spotlight', year: '2022' },
];

export default function AshleyPage() {
  return (
    <main className={styles.main}>
      {/* Schema markup for Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Ashley DeMarco',
            jobTitle: 'Master Colorist & Salon Owner',
            worksFor: {
              '@type': 'HairSalon',
              name: 'The Wild Dandelion Collective',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '413 Main Street',
                addressLocality: 'Longmont',
                addressRegion: 'CO',
                postalCode: '80501',
              },
            },
            alumniOf: [
              { '@type': 'EducationalOrganization', name: 'Vidal Sassoon Academy' },
              { '@type': 'EducationalOrganization', name: 'Bumble & bumble University' },
            ],
            hasCredential: [
              'Vidal Sassoon Certified',
              'Wella Color Master',
              'Davines Brand Ambassador',
            ],
            knowsAbout: ['Balayage', 'Hair Color', 'Bridal Styling', 'Color Correction'],
            image: images.people.ashley,
            url: 'https://the-wild-dandelion-collective.netlify.app/ashley-demarco',
            sameAs: [
              'https://instagram.com/ashley.wilddandelion',
              'https://www.linkedin.com/in/ashleydemarco',
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroImageWrapper}>
              <img 
                src={images.people.ashley} 
                alt="Ashley DeMarco - Master Colorist"
                className={styles.heroImage}
              />
              <div className={styles.experienceBadge}>
                <span className={styles.badgeNumber}>20+</span>
                <span className={styles.badgeText}>Years<br/>Experience</span>
              </div>
            </div>
            
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>Master Colorist & Founder</span>
              <h1 className={styles.heroTitle}>
                Ashley <span className={styles.gradientText}>DeMarco</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Vidal Sassoon-trained. Davines Ambassador. Your hair's new best friend.
              </p>
              <p className={styles.heroText}>
                I have spent over two decades perfecting the art of hair color. From London's 
                prestigious Vidal Sassoon Academy to owning my own salon on Main Street, my 
                journey has been driven by one thing: helping people feel absolutely amazing 
                about their hair.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2,000+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Bridal Styles</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5.0★</span>
                  <span className={styles.statLabel}>Google Rating</span>
                </div>
              </div>
              <div className={styles.heroButtons}>
                <Button href="/book" size="large">
                  Book with Ashley
                </Button>
                <Button href="/consultation" variant="outline" size="large">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <div className={styles.container}>
          <div className={styles.philosophyContent}>
            <span className={styles.sectionEyebrow}>My Philosophy</span>
            <h2 className={styles.philosophyTitle}>
              "Hair is the accessory you wear every day. It should make you feel confident, 
              beautiful, and completely yourself."
            </h2>
            <div className={styles.philosophyText}>
              <p>
                I believe that great hair isn't just about following trends—it's about understanding 
                who you are and what makes you feel your best. Every client who sits in my chair 
                gets a completely custom experience.
              </p>
              <p>
                I take time to learn about your lifestyle, your maintenance preferences, and your 
                personal style. Then I use my technical expertise and artistic vision to create 
                something that's uniquely yours.
              </p>
              <p>
                My goal? For you to leave feeling like the best version of yourself—and for your 
                hair to be something you absolutely love living with.
              </p>
            </div>
            <div className={styles.signature}>
              <span className={styles.signatureName}>Ashley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Timeline */}
      <section className={styles.credentials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>The Journey</span>
            <h2 className={styles.sectionTitle}>Education & Credentials</h2>
          </div>

          <div className={styles.timeline}>
            {credentials.map((cred, index) => (
              <div key={cred.year} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{cred.year}</span>
                <div className={styles.timelineIcon}>{cred.icon}</div>
                <div className={styles.timelineContent}>
                  <h3>{cred.title}</h3>
                  <p>{cred.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className={styles.specialties}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Expertise</span>
            <h2 className={styles.sectionTitle}>Areas of Specialization</h2>
          </div>

          <div className={styles.specialtiesGrid}>
            {specialties.map((specialty) => (
              <div key={specialty.title} className={styles.specialtyCard}>
                <div className={styles.specialtyImageWrapper}>
                  <img src={specialty.image} alt={specialty.title} className={styles.specialtyImage} />
                </div>
                <div className={styles.specialtyContent}>
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press/Recognition */}
      <section className={styles.press}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Recognition</span>
            <h2 className={styles.sectionTitle}>As Seen In</h2>
          </div>

          <div className={styles.pressGrid}>
            {pressFeatures.map((feature) => (
              <div key={feature.title} className={styles.pressCard}>
                <span className={styles.pressYear}>{feature.year}</span>
                <span className={styles.pressPublication}>{feature.publication}</span>
                <span className={styles.pressTitle}>{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Client Love</span>
            <h2 className={styles.sectionTitle}>What Clients Say</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialImageWrapper}>
                  <img src={testimonial.image} alt={testimonial.author} className={styles.testimonialImage} />
                </div>
                <div className={styles.testimonialContent}>
                  <div className={styles.stars}>★★★★★</div>
                  <blockquote>{testimonial.quote}</blockquote>
                  <cite>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.title}</span>
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className={styles.personal}>
        <div className={styles.container}>
          <div className={styles.personalGrid}>
            <div className={styles.personalContent}>
              <span className={styles.sectionEyebrow}>Beyond the Chair</span>
              <h2 className={styles.personalTitle}>More than a stylist</h2>
              <div className={styles.personalText}>
                <p>
                  When I'm not transforming hair at the salon, you'll find me exploring 
                  Colorado's trails with my rescue dog Luna, tending to my collection of 
                  50+ houseplants, or hunting for the perfect oat milk latte.
                </p>
                <p>
                  I'm passionate about sustainable beauty, which is why The Wild Dandelion 
                  exclusively uses Davines products—beautiful, effective, and kind to the planet.
                </p>
                <p>
                  Community matters to me. That's why I created The Wild Dandelion as a 
                  collective—a space where beauty professionals support each other and clients 
                  become friends.
                </p>
              </div>
            </div>
            <div className={styles.personalVisual}>
              <div className={styles.personalImageWrapper}>
                <img src={images.salon.interior} alt="The Wild Dandelion salon" className={styles.personalImage} />
              </div>
              <div className={styles.funFacts}>
                <h3>Fun Facts</h3>
                <ul>
                  <li>🐕 Dog mom to Luna (rescue pup)</li>
                  <li>☕ Oat milk latte enthusiast</li>
                  <li>🌱 50+ houseplants & counting</li>
                  <li>🎵 Salon soundtrack: indie folk & 70s rock</li>
                  <li>🎨 First job: sweeping floors at a salon at 16</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to meet your new stylist?</h2>
            <p className={styles.ctaText}>
              I'd love to learn about your hair goals and create something beautiful together. 
              Book a free consultation or your first appointment today.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Book with Ashley
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="tel:+13038347572" variant="outline" size="large">
                Call (303) 834-7572
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
