'use client';

import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

const credentials = [
  { year: '2003', title: 'Vidal Sassoon Academy', description: 'Graduated with honors from the prestigious London academy' },
  { year: '2005', title: 'Bumble & bumble', description: 'Advanced cutting and styling certification, NYC' },
  { year: '2010', title: 'Davines Brand Ambassador', description: 'Began partnership with sustainable Italian color line' },
  { year: '2015', title: 'Wella Color Master', description: 'Certified master colorist specializing in blondes' },
  { year: '2020', title: 'The Wild Dandelion', description: 'Opened the salon on Main Street in Longmont' },
];

const values = [
  { 
    icon: '🤝', 
    title: 'Personal Connection',
    description: 'Every appointment starts with a real conversation. I want to know your lifestyle, your hair goals, and what makes you feel beautiful.',
    image: images.people.consultation,
  },
  { 
    icon: '🎨', 
    title: 'Artistic Vision',
    description: 'Hair is my canvas. I blend technical precision with creative intuition to create looks that are uniquely you.',
    image: images.vivid.creative,
  },
  { 
    icon: '🌿', 
    title: 'Sustainable Beauty',
    description: 'From Davines products to eco-conscious practices, I believe in beauty that doesnt cost the earth.',
    image: images.salon.productWall,
  },
];

const testimonials = [
  {
    text: "Ashley completely transformed my hair! Ive never felt more confident. She really listens and delivers beyond expectations.",
    author: "Sarah M.",
    location: "Longmont",
    image: images.people.client,
  },
  {
    text: "The atmosphere is so welcoming and Ashleys talent is unmatched. My highlights have never looked more natural.",
    author: "Jessica T.",
    location: "Boulder",
    image: images.blonde.balayage,
  },
  {
    text: "Finally found a stylist who understands curly hair! Ashley took the time to teach me how to style it at home too.",
    author: "Maria R.",
    location: "Denver",
    image: images.cuts.layers,
  },
];

const funFacts = [
  { icon: '🐕', label: 'Dog Mom', value: 'to a rescue named Luna' },
  { icon: '☕', label: 'Coffee Order', value: 'Oat milk latte, extra hot' },
  { icon: '🌱', label: 'Plant Lady', value: '50+ houseplants & counting' },
  { icon: '🎵', label: 'Salon Vibes', value: 'Indie folk & 70s rock' },
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section with Image */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img 
            src={images.salon.interior} 
            alt="The Wild Dandelion salon interior"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>Meet Ashley</span>
              <h1 className={styles.heroTitle}>
                Crafting <span className={styles.gradientText}>confidence</span>, one strand at a time
              </h1>
              <p className={styles.heroLead}>
                Hi, Im Ashley DeMarco, founder of The Wild Dandelion Collective. 
                For over 20 years, Ive been helping people discover their best hair 
                and feel amazing in their own skin.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2000+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Bridal Styles</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <div className={styles.portraitFrame}>
                <img 
                  src={images.people.ashley} 
                  alt="Ashley DeMarco"
                  className={styles.portrait}
                />
                <div className={styles.portraitBadge}>
                  <span>✨</span>
                  <small>Vidal Sassoon<br/>Trained</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Timeline */}
      <section className={styles.credentials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>The Journey</span>
            <h2 className={styles.sectionTitle}>Credentials & Experience</h2>
          </div>

          <div className={styles.timeline}>
            {credentials.map((cred, index) => (
              <div key={cred.year} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{cred.year}</span>
                <div className={styles.timelineContent}>
                  <h3>{cred.title}</h3>
                  <p>{cred.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImageWrapper}>
              <img 
                src={images.salon.mirror} 
                alt="Ashley at work"
                className={styles.storyImage}
              />
              <div className={styles.storyFloatingCard}>
                <span className={styles.quoteIcon}>"</span>
                <p>Hair is more than just hair—its how we show up in the world.</p>
              </div>
            </div>
            <div className={styles.storyContent}>
              <span className={styles.sectionEyebrow}>My Story</span>
              <h2 className={styles.sectionTitle}>Why I do what I do</h2>
              <div className={styles.storyText}>
                <p>
                  I fell in love with hair as a teenager, experimenting on friends 
                  in my parents garage. That passion led me to Londons Vidal Sassoon 
                  Academy, where I learned that hair is architecture—every cut has 
                  purpose, every color tells a story.
                </p>
                <p>
                  After years in high-end Boulder salons, I dreamed of creating 
                  something different—a space that felt like home, where clients 
                  become friends and everyone leaves feeling like their best self.
                </p>
                <p>
                  The Wild Dandelion was born from that vision: a collective where 
                  artistry meets warmth, where sustainable beauty practices are the 
                  standard, and where every person who sits in my chair feels seen, 
                  heard, and absolutely gorgeous.
                </p>
              </div>
              <div className={styles.signature}>
                <span className={styles.signatureName}>Ashley Dania DeMarco</span>
                <span className={styles.signatureTitle}>Founder & Master Stylist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Images */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>What Drives Us</span>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueImageWrapper}>
                  <img src={value.image} alt={value.title} className={styles.valueImage} />
                  <div className={styles.valueIconOverlay}>
                    <span className={styles.valueIcon}>{value.icon}</span>
                  </div>
                </div>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className={styles.funFacts}>
        <div className={styles.container}>
          <div className={styles.funFactsCard}>
            <div className={styles.funFactsImage}>
              <img src={images.abstract.dandelion} alt="Dandelion" />
            </div>
            <div className={styles.funFactsContent}>
              <h2 className={styles.funFactsTitle}>Fun Facts About Ashley</h2>
              <div className={styles.funFactsGrid}>
                {funFacts.map((fact) => (
                  <div key={fact.label} className={styles.funFact}>
                    <span className={styles.funFactIcon}>{fact.icon}</span>
                    <span className={styles.funFactLabel}>{fact.label}</span>
                    <span className={styles.funFactValue}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Images */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Kind Words</span>
            <h2 className={styles.sectionTitle}>What Clients Say</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialImageWrapper}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className={styles.testimonialImage}
                  />
                </div>
                <div className={styles.testimonialContent}>
                  <div className={styles.stars}>★★★★★</div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to meet your new stylist?</h2>
            <p className={styles.ctaText}>
              Id love to learn about your hair goals and help you achieve them. 
              Book a consultation or your first appointment today.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Book Now
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="/consultation" variant="outline" size="large">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
