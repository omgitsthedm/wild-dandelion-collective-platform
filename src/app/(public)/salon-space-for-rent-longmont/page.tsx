import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Salon Space for Rent Longmont | Styling Stations $800/mo | Downtown Main St',
  description: 'Premium salon space for rent in downtown Longmont. Styling stations $800/month, retail space available. High-traffic Main St location. Utilities included. Join our collective!',
  keywords: [
    'salon space for rent longmont',
    'hair salon booth rental 80501',
    'beauty salon space for lease boulder county',
    'retail space for rent longmont main street',
    'styling station rental colorado',
    'salon suite for rent longmont',
    'hairdresser space for rent',
    'salon chair rental boulder',
    'beauty professional space for rent',
    'downtown longmont commercial space',
  ],
  openGraph: {
    title: 'Salon Space for Rent - Longmont Main Street | $800/mo',
    description: 'Premium styling stations and retail space available now in downtown Longmont. High-traffic location, utilities included.',
    images: [{ url: images.salon.station }],
  },
};

const spaceOptions = [
  {
    type: 'Styling Station',
    price: '$800',
    period: '/month',
    availability: '1 Available Now',
    urgency: 'high',
    description: 'Your own dedicated styling station in our beautiful, light-filled salon. Perfect for established stylists ready to grow their business.',
    features: [
      'Full-time dedicated station',
      'Premium styling chair & mirror',
      'Shampoo bowl access',
      'Laundry service included',
      'Wifi & utilities included',
      'Online booking system access',
      'Receptionist support',
      'Client lounge access',
    ],
    idealFor: 'Hair stylists, colorists, barbers',
    image: images.salon.station,
  },
  {
    type: 'Retail Space',
    price: '$800',
    period: '/month',
    availability: 'Available Now',
    urgency: 'medium',
    description: 'Prime retail frontage on Main Street with beautiful display windows. High foot traffic from downtown Longmont visitors.',
    features: [
      'Street-level retail space',
      'Large display windows',
      'High foot traffic location',
      'Utilities included',
      'Shared marketing opportunities',
      'Event space access',
      'Community cross-promotion',
      'Flexible lease terms',
    ],
    idealFor: 'Boutiques, skincare, jewelry, gifts',
    image: images.salon.interior,
  },
  {
    type: 'Treatment Room',
    price: 'Custom',
    period: '',
    availability: 'By Appointment',
    urgency: 'low',
    description: 'Private treatment room available hourly or part-time. Perfect for estheticians, lash artists, or massage therapists.',
    features: [
      'Private, quiet space',
      'Adjustable lighting',
      'By-appointment scheduling',
      'Hourly or daily rates',
      'Waiting area for clients',
      'Flexible arrangements',
      'Ideal for part-time providers',
    ],
    idealFor: 'Estheticians, lash artists, massage therapists',
    image: images.salon.detail,
  },
];

const includedAmenities = [
  { icon: '📶', title: 'High-Speed Wifi', desc: 'Fiber internet throughout' },
  { icon: '🅿️', title: 'Free Parking', desc: 'Street & lot parking for you & clients' },
  { icon: '🧺', title: 'Laundry Service', desc: 'Towels & capes washed for you' },
  { icon: '☕', title: 'Client Lounge', desc: 'Comfortable waiting area' },
  { icon: '📱', title: 'Online Booking', desc: 'Integrated scheduling system' },
  { icon: '🎓', title: 'Education', desc: 'Workshops & learning opportunities' },
  { icon: '🤝', title: 'Community', desc: 'Supportive collective environment' },
  { icon: '🌿', title: 'Sustainable', desc: 'Eco-friendly salon practices' },
];

const currentArtists = [
  {
    name: 'Ashley DeMarco',
    role: 'Owner & Master Colorist',
    quote: 'Having other talented professionals around pushes me to be better every day. The energy here is incredible.',
    image: images.people.ashley,
  },
  {
    name: 'Your Name Here',
    role: 'Styling Station Available',
    quote: 'Join us and build your business in a supportive, beautiful space. Your next chapter starts here.',
    image: images.salon.chairs,
    isAvailable: true,
  },
];

const testimonials = [
  {
    text: 'Moving into The Wild Dandelion was the best decision for my business. I went from 15 clients to 40 in 6 months just from the foot traffic and referrals.',
    author: 'Former Tenant',
    business: 'Hair Stylist',
    metric: '2.5x client growth',
  },
  {
    text: "The location on Main Street is unbeatable. I love that I don't have to worry about utilities, laundry, or reception—just focusing on my clients.",
    author: 'Current Vendor',
    business: 'Skincare Boutique',
    metric: 'Downtown exposure',
  },
];

const faqs = [
  {
    question: 'What does $800/month include?',
    answer: 'Everything! Your styling station or retail space, utilities (electric, water, wifi), laundry service, reception support during business hours, access to shared spaces (lounge, shampoo area), and inclusion in our collective marketing. No hidden fees or surprise charges.',
  },
  {
    question: 'How long is the lease?',
    answer: "We offer flexible 6-month minimum leases with month-to-month options after that. We know building a business takes time, so we don't lock you into long-term contracts. Give us 60 days notice if you need to move on.",
  },
  {
    question: 'Do I need to bring my own clients?',
    answer: 'While you should have an existing client base, our downtown Main Street location brings significant walk-in traffic. Many of our tenants have grown their books substantially just from being here. We also cross-promote within the collective.',
  },
  {
    question: 'Can I set my own hours?',
    answer: 'Absolutely! You have 24/7 access to the building. Most tenants work Tuesday-Saturday, but you can set whatever schedule works for you and your clients. The space is yours to use as needed.',
  },
  {
    question: 'Is there a deposit?',
    answer: "Yes, we require first month's rent + $500 security deposit. The security deposit is fully refundable when you move out (assuming no damage). We keep this low to make it accessible for independent professionals.",
  },
  {
    question: 'Do you offer part-time options?',
    answer: "For styling stations, we prefer full-time tenants to maintain consistency. However, the treatment room is available part-time by appointment. If you have specific needs, let us know and we can discuss options.",
  },
];

export default function RentalPage() {
  return (
    <main className={styles.main}>
      {/* Schema markup for LocalBusiness + RealEstate */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateListing',
            name: 'Salon Space for Rent - The Wild Dandelion Collective',
            description: 'Premium salon styling stations and retail space for rent in downtown Longmont, CO. $800/month utilities included.',
            url: 'https://the-wild-dandelion-collective.netlify.app/salon-space-for-rent-longmont',
            datePosted: new Date().toISOString(),
            provider: {
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
            offers: {
              '@type': 'Offer',
              price: '800',
              priceCurrency: 'USD',
              priceValidUntil: '2025-12-31',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* Hero Section - Urgent but Warm */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.availabilityBanner}>
              <span className={styles.pulse}>●</span>
              <span>1 Styling Station Available Now</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Build your dream business on <span className={styles.highlight}>Main Street</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Premium salon space for rent in downtown Longmont. Your own styling station 
              or retail space for just <strong>$800/month</strong>—utilities, wifi, and 
              laundry included. Join a supportive community of beauty professionals.
            </p>
            
            <div className={styles.quickStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>$800</span>
                <span className={styles.statLabel}>per month</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>413</span>
                <span className={styles.statLabel}>Main Street</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>High</span>
                <span className={styles.statLabel}>foot traffic</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <Button href="#inquire" size="large">
                Schedule a Tour
                <span className={styles.sparkle}>✨</span>
              </Button>
              <Button href="tel:+13038347572" variant="outline" size="large">
                Call (303) 834-7572
              </Button>
            </div>
            
            <p className={styles.heroNote}>
              💡 Spaces go fast—last station was claimed in 3 days
            </p>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <img 
                src={images.salon.station} 
                alt="Premium styling station available"
                className={styles.heroImage}
              />
              <div className={styles.imageOverlay}>
                <span>Your future station?</span>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <strong>⭐ 5.0 Rating</strong>
              <span>Best salon location in Longmont</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className={styles.opportunity}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Opportunity</span>
            <h2>Why stylists are choosing The Wild Dandelion</h2>
            <p className={styles.sectionSubhead}>
              Starting at $800/month, you get way more than just a chair. You get a 
              turnkey business setup in one of Longmont's most desirable locations.
            </p>
          </div>
          
          <div className={styles.opportunityGrid}>
            <div className={styles.opportunityCard}>
              <span className={styles.oppIcon}>📍</span>
              <h3>Prime Downtown Location</h3>
              <p>
                413 Main Street puts you in the heart of Longmont's thriving downtown. 
                Walkable, visible, and surrounded by shops, restaurants, and coffee. 
                Your clients will love coming here.
              </p>
            </div>
            <div className={styles.opportunityCard}>
              <span className={styles.oppIcon}>💰</span>
              <h3>All-Inclusive Pricing</h3>
              <p>
                $800/month covers your station, utilities, wifi, laundry service, 
                and reception support. No surprise charges, no hidden fees. 
                Predictable costs make budgeting simple.
              </p>
            </div>
            <div className={styles.opportunityCard}>
              <span className={styles.oppIcon}>🤝</span>
              <h3>Built-In Community</h3>
              <p>
                Work alongside talented professionals who support each other. 
                Share referrals, learn from each other, and build friendships. 
                It's better than working alone.
              </p>
            </div>
            <div className={styles.opportunityCard}>
              <span className={styles.oppIcon}>🚀</span>
              <h3>Room to Grow</h3>
              <p>
                Many of our tenants have doubled their client base within a year. 
                The location, the foot traffic, and the professional environment 
                help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Space Options - Clear & Detailed */}
      <section id="spaces" className={styles.spaces}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Available Spaces</span>
            <h2>Find your perfect fit</h2>
            <p className={styles.sectionSubhead}>
              Choose the space that matches your business needs. All options include 
              utilities, wifi, and access to shared amenities.
            </p>
          </div>
          
          <div className={styles.spacesGrid}>
            {spaceOptions.map((space) => (
              <div 
                key={space.type} 
                className={`${styles.spaceCard} ${space.urgency === 'high' ? styles.urgent : ''}`}
              >
                {space.urgency === 'high' && (
                  <span className={styles.urgentBadge}>Only 1 Left!</span>
                )}
                <div className={styles.spaceImage}>
                  <img src={space.image} alt={space.type} />
                </div>
                <div className={styles.spaceContent}>
                  <div className={styles.spaceHeader}>
                    <h3>{space.type}</h3>
                    <span className={`${styles.availability} ${styles[space.urgency]}`}>
                      {space.availability}
                    </span>
                  </div>
                  <div className={styles.price}>
                    <span className={styles.amount}>{space.price}</span>
                    <span className={styles.period}>{space.period}</span>
                  </div>
                  <p className={styles.description}>{space.description}</p>
                  <div className={styles.idealFor}>
                    <strong>Perfect for:</strong> {space.idealFor}
                  </div>
                  <ul className={styles.featuresList}>
                    {space.features.map((feature) => (
                      <li key={feature}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Button 
                    href="#inquire" 
                    variant={space.urgency === 'high' ? 'primary' : 'outline'}
                    fullWidth
                  >
                    Inquire About This Space
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className={styles.amenities}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Everything Included</span>
            <h2>Your $800/month covers everything</h2>
            <p className={styles.sectionSubhead}>
              No surprise charges. No hidden fees. Just one simple monthly payment 
              that includes everything you need to run your business.
            </p>
          </div>
          
          <div className={styles.amenitiesGrid}>
            {includedAmenities.map((amenity) => (
              <div key={amenity.title} className={styles.amenityCard}>
                <span className={styles.amenityIcon}>{amenity.icon}</span>
                <h3>{amenity.title}</h3>
                <p>{amenity.desc}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.amenitiesNote}>
            <p>
              <strong>Plus:</strong> 24/7 building access, security system, 
              cleaning service, maintenance, and a supportive community of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Success Stories</span>
            <h2>Real results from real tenants</h2>
          </div>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.metricBadge}>{testimonial.metric}</div>
                <blockquote>"{testimonial.text}"</blockquote>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.business}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Community */}
      <section className={styles.community}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Collective</span>
            <h2>Who you'll be working alongside</h2>
            <p className={styles.sectionSubhead}>
              We're building something special here—a community of talented 
              professionals who support each other's success.
            </p>
          </div>
          
          <div className={styles.artistGrid}>
            {currentArtists.map((artist) => (
              <div key={artist.name} className={`${styles.artistCard} ${artist.isAvailable ? styles.available : ''}`}>
                <div className={styles.artistImage}>
                  <img src={artist.image} alt={artist.name} />
                  {artist.isAvailable && (
                    <div className={styles.availableOverlay}>
                      <span>Join Us!</span>
                    </div>
                  )}
                </div>
                <div className={styles.artistInfo}>
                  <h3>{artist.name}</h3>
                  <span className={styles.role}>{artist.role}</span>
                  <blockquote>"{artist.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className={styles.location}>
        <div className={styles.container}>
          <div className={styles.locationGrid}>
            <div className={styles.locationContent}>
              <span className={styles.eyebrow}>Location</span>
              <h2>413 Main Street, Longmont</h2>
              <p className={styles.locationDesc}>
                Located in the heart of downtown Longmont, surrounded by restaurants, 
                coffee shops, boutiques, and galleries. Your clients can grab coffee 
                at Ziggi's, shop at Buck & Rider, or enjoy a meal at any of the 
                amazing restaurants on our block.
              </p>
              <ul className={styles.locationHighlights}>
                <li>🚗 Free street parking + lot behind building</li>
                <li>☕ Walking distance to 5+ coffee shops</li>
                <li>🍽️ Dozens of restaurants nearby</li>
                <li>🚌 Public transit accessible</li>
                <li>🚶 High foot traffic from downtown visitors</li>
              </ul>
              <Button href="https://maps.google.com/?q=413+Main+St+Longmont+CO+80501" target="_blank" variant="outline">
                View on Google Maps
              </Button>
            </div>
            <div className={styles.locationMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.833118999998!2d-105.1028!3d40.1672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEwJzAyLjAiTiAxMDXCsDA2JzEwLjEiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Questions</span>
            <h2>Everything you need to know</h2>
          </div>
          
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquire" className={styles.inquiry}>
        <div className={styles.container}>
          <div className={styles.inquiryGrid}>
            <div className={styles.inquiryContent}>
              <span className={styles.eyebrow}>Ready to See the Space?</span>
              <h2>Let's talk about your next chapter</h2>
              <p>
                I'd love to show you around and answer any questions you have. 
                Tours take about 30 minutes, and there's no pressure—just a 
                conversation about whether this is the right fit for your business.
              </p>
              <div className={styles.contactOptions}>
                <div className={styles.contactOption}>
                  <span>📞</span>
                  <div>
                    <strong>Call or Text</strong>
                    <a href="tel:+13038347572">(303) 834-7572</a>
                  </div>
                </div>
                <div className={styles.contactOption}>
                  <span>📧</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:hello@thewilddandelion.com">hello@thewilddandelion.com</a>
                  </div>
                </div>
                <div className={styles.contactOption}>
                  <span>⏰</span>
                  <div>
                    <strong>Tour Hours</strong>
                    <span>Mon-Sat 10am-6pm</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.inquiryFormCard}>
              <form className={styles.inquiryForm}>
                <h3>Request a Tour</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="business">Business/Profession</label>
                  <input type="text" id="business" name="business" placeholder="e.g., Hair Stylist, Esthetician" required />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="(303) 555-0123" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="space">Interested In</label>
                  <select id="space" name="space" required>
                    <option value="">Select a space...</option>
                    <option value="styling-station">Styling Station ($800/mo)</option>
                    <option value="retail">Retail Space ($800/mo)</option>
                    <option value="treatment">Treatment Room (Custom)</option>
                    <option value="not-sure">Not sure yet—let's talk</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Tell me about your business</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    placeholder="What do you do? What are you looking for in a space? Any questions?"
                  />
                </div>
                <Button type="submit" fullWidth size="large">
                  Request Tour
                </Button>
                <p className={styles.formNote}>
                  I'll get back to you within 24 hours to schedule your tour.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Your next chapter starts here</h2>
            <p>
              Don't let another month go by paying booth rent at a chain or working 
              from home. Build something of your own in a space you'll be proud of.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="tel:+13038347572" size="large">
                Call Now: (303) 834-7572
              </Button>
              <Button href="#inquire" variant="outline" size="large">
                Schedule a Tour
              </Button>
            </div>
            <p className={styles.ctaNote}>
              Spaces go fast—let's talk before someone else claims your spot.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
