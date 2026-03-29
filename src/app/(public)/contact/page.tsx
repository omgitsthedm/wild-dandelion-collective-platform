'use client';

import { useState } from 'react';
import { Button } from '@/design-system/components/Button';
import { Input } from '@/design-system/components/Input';
import { images } from '@/lib/images';
import styles from './page.module.css';

const faqs = [
  {
    question: 'What are your hours?',
    answer: 'Monday through Saturday, 9am to 7pm. Evening appointments available by request. Closed Sundays.',
  },
  {
    question: 'Do you take walk-ins?',
    answer: 'We recommend booking in advance to ensure availability, but feel free to call and check for same-day openings!',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes! We have free street parking on Main Street and a parking lot behind the building.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept all major credit cards, cash, and Venmo. Gift cards are also available!',
  },
];

const services = [
  { icon: '✨', title: 'Lived-In Blonde', price: 'From $200' },
  { icon: '🎨', title: 'Signature Color', price: 'From $150' },
  { icon: '💇‍♀️', title: 'Precision Cut', price: 'From $85' },
  { icon: '👰', title: 'Bridal Styling', price: 'From $125' },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={styles.main}>
      {/* Hero Section with Image */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img 
            src={images.salon.chairs}
            alt="Salon interior"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Get in Touch</span>
            <h1 className={styles.heroTitle}>
              Let's <span className={styles.gradientText}>connect</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Have questions? Want to book? Just want to say hi? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoImageWrapper}>
                  <img src={images.salon.detail} alt="Salon detail" className={styles.infoImage} />
                </div>
                <h2 className={styles.infoTitle}>Visit Us</h2>
                
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div className={styles.infoContent}>
                    <strong>Address</strong>
                    <p>413 Main Street<br />Longmont, CO 80501</p>
                    <a 
                      href="https://maps.google.com/?q=413+Main+St+Longmont+CO+80501" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.infoLink}
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div className={styles.infoContent}>
                    <strong>Phone</strong>
                    <p>
                      <a href="tel:+13038347572">(303) 834-7572</a>
                    </p>
                    <span className={styles.infoNote}>Text or call welcome!</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉️</span>
                  <div className={styles.infoContent}>
                    <strong>Email</strong>
                    <p>
                      <a href="mailto:hello@thewilddandelion.com">hello@thewilddandelion.com</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🕐</span>
                  <div className={styles.infoContent}>
                    <strong>Hours</strong>
                    <p>Monday – Saturday<br />9:00 AM – 7:00 PM</p>
                    <span className={styles.infoNote}>Evening appointments available</span>
                  </div>
                </div>
              </div>

              {/* Quick Service Prices */}
              <div className={styles.pricingCard}>
                <div className={styles.pricingImageWrapper}>
                  <img src={images.treatment.mask} alt="Hair treatment" className={styles.pricingImage} />
                </div>
                <h3 className={styles.pricingTitle}>Quick Pricing</h3>
                <div className={styles.pricingList}>
                  {services.map((service) => (
                    <div key={service.title} className={styles.pricingItem}>
                      <span className={styles.pricingIcon}>{service.icon}</span>
                      <span className={styles.pricingName}>{service.title}</span>
                      <span className={styles.pricingAmount}>{service.price}</span>
                    </div>
                  ))}
                </div>
                <Button href="/services" variant="outline" size="small">
                  View All Services
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSection}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send us a message</h2>
                <p className={styles.formSubtitle}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSuccess ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Message sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSuccess(false)}
                      style={{ marginTop: '1rem' }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                      <Input
                        label="Name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                      />
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                      />
                    </div>

                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />

                    <div className={styles.selectWrapper}>
                      <label className={styles.selectLabel}>Service Interest</label>
                      <select name="service" className={styles.select}>
                        <option value="">Select a service...</option>
                        <option value="color">Color Services</option>
                        <option value="cut">Cut & Styling</option>
                        <option value="bridal">Bridal/Event</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <Input
                      label="Message"
                      name="message"
                      type="textarea"
                      required
                      placeholder="Tell us about your hair goals, questions, or preferred appointment times..."
                    />

                    {error && (
                      <div className={styles.errorMessage}>
                        {error}
                      </div>
                    )}

                    <div className={styles.formActions}>
                      <Button type="submit" disabled={isSubmitting} fullWidth>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Quick Answers</span>
            <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className={styles.faqCta}>
            <Button href="/faq" variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.map}>
        <div className={styles.mapContainer}>
          <img 
            src={images.abstract.warm}
            alt="Decorative"
            className={styles.mapBackground}
          />
          <div className={styles.mapOverlay} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.833118999998!2d-105.1028!3d40.1672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEwJzAyLjAiTiAxMDXCsDA2JzEwLjEiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'relative', zIndex: 1 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Wild Dandelion Collective Location"
          />
        </div>
        <div className={styles.mapOverlayCard}>
          <div className={styles.mapCard}>
            <h3>Come say hi!</h3>
            <p>We're in the heart of downtown Longmont</p>
            <Button href="https://maps.google.com/?q=413+Main+St+Longmont+CO+80501" variant="outline" target="_blank">
              Open in Google Maps
            </Button>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaImageWrapper}>
              <img src={images.people.happy} alt="Happy client" className={styles.ctaImage} />
            </div>
            <h2 className={styles.ctaTitle}>Ready to book?</h2>
            <p className={styles.ctaText}>
              Skip the form and book your appointment directly online. 
              Instant confirmation, easy rescheduling.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Book Online Now
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
