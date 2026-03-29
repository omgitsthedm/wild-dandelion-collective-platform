'use client';

import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

const serviceCategories = [
  {
    id: 'color',
    title: 'Color Services',
    icon: '🎨',
    description: 'From subtle dimension to bold transformations',
    image: images.salon.productWall,
    services: [
      {
        name: 'Lived-In Blonde',
        description: 'Dimensional blonde with seamless grow-out. Perfect for low-maintenance lightening.',
        price: '$200+',
        time: '3-4 hours',
        popular: true,
      },
      {
        name: 'Full Foil Highlights',
        description: 'Traditional foil technique for precise, all-over lightness.',
        price: '$180+',
        time: '2.5-3 hours',
      },
      {
        name: 'Balayage',
        description: 'Hand-painted highlights for a natural, sun-kissed look.',
        price: '$220+',
        time: '3-4 hours',
        popular: true,
      },
      {
        name: 'Root Touch-Up',
        description: 'Single process color to cover grays or refresh your natural base.',
        price: '$85+',
        time: '1.5-2 hours',
      },
      {
        name: 'Gloss/Toner',
        description: 'Add shine and tone between color services.',
        price: '$45+',
        time: '30-45 min',
      },
      {
        name: 'Vivid Fashion Color',
        description: 'Creative colors from pastels to jewel tones. Consultation required.',
        price: '$250+',
        time: '4+ hours',
      },
    ],
  },
  {
    id: 'cuts',
    title: 'Cuts & Styling',
    icon: '✂️',
    description: 'Precision cuts and styles for every hair type',
    image: images.salon.tools,
    services: [
      {
        name: 'Women\'s Cut & Style',
        description: 'Custom haircut tailored to your face shape, lifestyle, and hair texture.',
        price: '$85+',
        time: '60 min',
        popular: true,
      },
      {
        name: 'Men\'s Cut',
        description: 'Classic or modern men\'s styling with attention to detail.',
        price: '$45+',
        time: '45 min',
      },
      {
        name: 'Blowout',
        description: 'Shampoo and professional blow dry with styling.',
        price: '$55+',
        time: '45 min',
      },
      {
        name: 'Special Occasion Style',
        description: 'Updos, curls, or sleek styles for your special event.',
        price: '$95+',
        time: '60-90 min',
      },
      {
        name: 'Deep Conditioning Treatment',
        description: 'Restore moisture and shine to dry, damaged hair.',
        price: '$35+',
        time: '30 min',
      },
    ],
  },
  {
    id: 'bridal',
    title: 'Bridal & Events',
    icon: '👰',
    description: 'Making your special day absolutely perfect',
    image: images.bridal.flowers,
    services: [
      {
        name: 'Bridal Trial',
        description: 'Practice your wedding day look before the big day.',
        price: '$125+',
        time: '90 min',
        popular: true,
      },
      {
        name: 'Bridal Styling (Day-Of)',
        description: 'Your perfect wedding day hair, done with care.',
        price: '$175+',
        time: '90 min',
      },
      {
        name: 'Bridal Party Member',
        description: 'Hair for bridesmaids, mothers, and special guests.',
        price: '$95+',
        time: '60 min',
      },
      {
        name: 'On-Location Service',
        description: 'We come to you! Travel fee based on distance.',
        price: '$200+',
        time: 'Varies',
      },
    ],
  },
  {
    id: 'treatments',
    title: 'Treatments',
    icon: '✨',
    description: 'Restore, repair, and rejuvenate your hair',
    image: images.treatment.products,
    services: [
      {
        name: 'K18 Repair Treatment',
        description: 'Revolutionary bond repair for severely damaged hair.',
        price: '$45',
        time: '15 min',
        popular: true,
      },
      {
        name: 'Olaplex Stand-Alone',
        description: 'Strengthen and protect with the original bond builder.',
        price: '$35',
        time: '20 min',
      },
      {
        name: 'Scalp Treatment',
        description: 'Deep cleanse and soothe with massage and steam.',
        price: '$40',
        time: '30 min',
      },
      {
        name: 'Keratin Treatment',
        description: 'Smooth frizz and cut styling time in half. Consultation required.',
        price: '$300+',
        time: '3-4 hours',
      },
    ],
  },
];

const addOns = [
  { icon: '🔧', name: 'Olaplex Add-On', price: '$25', description: 'Add bond repair to any color service' },
  { icon: '💆', name: 'Scalp Massage', price: '$15', description: 'Relaxing 10-minute scalp massage' },
  { icon: '💇', name: 'Hair Extension Consultation', price: 'Free', description: 'Discuss extension options' },
  { icon: '📚', name: 'Style Lesson', price: '$50', description: '30-minute tutorial on styling your hair' },
];

const testimonials = [
  {
    text: "Ashley completely transformed my hair! The lived-in blonde is exactly what I wanted - natural looking but still bright and dimensional.",
    author: "Sarah M.",
    service: "Lived-In Blonde",
    image: images.blonde.honey,
  },
  {
    text: "The best cut I've ever had. She really listened to what I wanted and gave me a style that works with my busy lifestyle.",
    author: "Jessica T.",
    service: "Women's Cut",
    image: images.cuts.bob,
  },
  {
    text: "My wedding hair was absolutely perfect. Ashley made me feel like a princess on my special day!",
    author: "Amanda R.",
    service: "Bridal Styling",
    image: images.bridal.elegant,
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section with Image */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img 
            src={images.blonde.balayage}
            alt="Hair color services"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Our Services</span>
            <h1 className={styles.heroTitle}>
              Services crafted with <span className={styles.gradientText}>intention</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Every service begins with a consultation. We take time to understand 
              your hair goals, lifestyle, and budget to create a customized plan just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories with Images */}
      {serviceCategories.map((category, index) => (
        <section key={category.id} className={styles.categorySection}>
          <div className={styles.container}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryImageWrapper}>
                <img src={category.image} alt={category.title} className={styles.categoryImage} />
                <div className={styles.categoryIconOverlay}>
                  <span>{category.icon}</span>
                </div>
              </div>
              <div className={styles.categoryInfo}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
                <p className={styles.categoryDescription}>{category.description}</p>
              </div>
            </div>

            <div className={styles.servicesGrid}>
              {category.services.map((service) => (
                <div 
                  key={service.name} 
                  className={`${styles.serviceCard} ${service.popular ? styles.popular : ''}`}
                >
                  {service.popular && (
                    <span className={styles.popularBadge}>Most Popular</span>
                  )}
                  <div className={styles.serviceHeader}>
                    <h3 className={styles.serviceName}>{service.name}</h3>
                    <span className={styles.servicePrice}>{service.price}</span>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <div className={styles.serviceMeta}>
                    <span className={styles.serviceTime}>⏱ {service.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Add-Ons Section */}
      <section className={styles.addOns}>
        <div className={styles.container}>
          <div className={styles.addOnsHeader}>
            <span className={styles.sectionEyebrow}>Enhance Your Visit</span>
            <h2 className={styles.addOnsTitle}>Add-On Services</h2>
            <p className={styles.addOnsDescription}>
              Elevate your experience with these optional enhancements
            </p>
          </div>

          <div className={styles.addOnsGrid}>
            {addOns.map((addOn) => (
              <div key={addOn.name} className={styles.addOnCard}>
                <span className={styles.addOnIcon}>{addOn.icon}</span>
                <div className={styles.addOnHeader}>
                  <h3 className={styles.addOnName}>{addOn.name}</h3>
                  <span className={styles.addOnPrice}>{addOn.price}</span>
                </div>
                <p className={styles.addOnDescription}>{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className={styles.policy}>
        <div className={styles.container}>
          <div className={styles.policyCard}>
            <h2 className={styles.policyTitle}>Booking & Cancellation Policy</h2>
            <div className={styles.policyGrid}>
              <div className={styles.policyItem}>
                <span className={styles.policyIcon}>⏰</span>
                <h3>48-Hour Notice</h3>
                <p>Cancellations require 48 hours notice. Late cancellations may incur a fee.</p>
              </div>
              <div className={styles.policyItem}>
                <span className={styles.policyIcon}>💳</span>
                <h3>Deposits</h3>
                <p>New clients and appointments over 3 hours require a $50 deposit.</p>
              </div>
              <div className={styles.policyItem}>
                <span className={styles.policyIcon}>⏱</span>
                <h3>Late Arrivals</h3>
                <p>15+ minutes late may require rescheduling to maintain our schedule.</p>
              </div>
              <div className={styles.policyItem}>
                <span className={styles.policyIcon}>🎁</span>
                <h3>Gift Cards</h3>
                <p>Gift cards available for any amount. Never expire, fully transferable.</p>
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
            <h2 className={styles.sectionTitle}>What clients say</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialImageWrapper}>
                  <img src={testimonial.image} alt={testimonial.service} className={styles.testimonialImage} />
                </div>
                <div className={styles.testimonialContent}>
                  <div className={styles.stars}>★★★★★</div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.service}</span>
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
            <h2 className={styles.ctaTitle}>
              Ready to treat yourself?
            </h2>
            <p className={styles.ctaText}>
              Book your appointment today and experience the Wild Dandelion difference. 
              New clients welcome!
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Book Appointment
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="/consultation" variant="outline" size="large">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
