import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader';
import { ContactInfo } from '@/design-system/components/ContactInfo';
import { Button } from '@/design-system/components/Button';
import { Input } from '@/design-system/components/Input';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <SectionHeader
          eyebrow="Get in Touch"
          title="We'd love to hear from you"
        />

        <div className={styles.bookCta}>
          <p className={styles.bookCtaText}>
            Ready to schedule? Book directly through our online system.
          </p>
          <Button href="/book">Book Directly</Button>
        </div>

        <div className={styles.layout}>
          <ContactInfo />

          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>Send us a message</h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className={styles.honeypot}>
                <label>
                  Do not fill this in: <input name="bot-field" />
                </label>
              </p>

              <Input
                label="Name"
                name="name"
                type="text"
                required
                autoComplete="name"
              />

              <Input
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />

              <Input
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />

              <Input
                label="Message"
                name="message"
                type="textarea"
                required
              />

              <div className={styles.submitRow}>
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
