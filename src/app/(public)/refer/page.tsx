import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { images } from '@/lib/images';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Refer a Friend | Give $25, Get $25 | The Wild Dandelion',
  description: 'Love your hair? Share the love! Give your friends $25 off their first visit and earn $25 credit when they book. Join our referral program today.',
  keywords: ['referral program', 'hair salon referral', 'give 25 get 25', 'longmont salon referral'],
};

const howItWorks = [
  {
    step: 1,
    title: 'Share Your Link',
    description: 'Send your unique referral link to friends and family who would love The Wild Dandelion.',
    icon: '🔗',
  },
  {
    step: 2,
    title: 'They Book & Save',
    description: 'Your friend gets $25 off their first appointment of $75 or more.',
    icon: '💰',
  },
  {
    step: 3,
    title: 'You Earn Credit',
    description: 'After their visit, you get $25 in credit toward your next service.',
    icon: '✨',
  },
];

const testimonials = [
  {
    quote: "I have referred three friends and earned $75 in credits! It is the easiest way to save on my color appointments.",
    author: "Jennifer M.",
    earned: "$75 earned",
  },
  {
    quote: "My friend loved her balayage and I got credit toward my next visit. Win-win!",
    author: "Sarah T.",
    earned: "$50 earned",
  },
  {
    quote: "The referral program paid for my wedding hair trial. Best loyalty program in Longmont!",
    author: "Amanda R.",
    earned: "$100 earned",
  },
];

const faqs = [
  {
    question: 'How do I refer a friend?',
    answer: 'Simply share your unique referral link via text, email, or social media. When your friend books their first appointment using your link, they will automatically get $25 off.',
  },
  {
    question: 'When do I get my credit?',
    answer: 'Your $25 credit is added to your account after your friend completes their first appointment. There is no limit to how many friends you can refer!',
  },
  {
    question: 'Is there a minimum purchase?',
    answer: 'Yes, your friend\'s first appointment must be $75 or more to qualify for the $25 discount. Most of our services meet this threshold.',
  },
  {
    question: 'Do referral credits expire?',
    answer: 'Referral credits are valid for 12 months from the date they are issued. You can use them on any service at The Wild Dandelion.',
  },
  {
    question: 'Can I refer someone who has been to the salon before?',
    answer: 'The referral program is for new clients only—those who have not visited The Wild Dandelion in the past 24 months.',
  },
];

export default function ReferPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Share the Love</span>
            <h1 className={styles.heroTitle}>
              Give <span className={styles.highlight}>$25</span>, Get <span className={styles.highlight}>$25</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Love your hair? Share The Wild Dandelion with friends and earn rewards 
              toward your next visit.
            </p>
            <div className={styles.heroButtons}>
              <Button href="#get-started" size="large">
                Get Your Referral Link
              </Button>
              <Button href="#how-it-works" variant="outline" size="large">
                How It Works
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.giftCard}>
              <span className={styles.giftIcon}>🎁</span>
              <span className={styles.giftAmount}>$25</span>
              <span className={styles.giftLabel}>Credit</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Simple & Rewarding</span>
            <h2 className={styles.sectionTitle}>How It Works</h2>
          </div>

          <div className={styles.stepsGrid}>
            {howItWorks.map((item) => (
              <div key={item.step} className={styles.stepCard}>
                <span className={styles.stepNumber}>{item.step}</span>
                <span className={styles.stepIcon}>{item.icon}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section id="get-started" className={styles.referralSection}>
        <div className={styles.container}>
          <div className={styles.referralGrid}>
            <div className={styles.referralContent}>
              <span className={styles.sectionEyebrow}>Get Started</span>
              <h2 className={styles.sectionTitle}>Start earning today</h2>
              <p className={styles.referralText}>
                Enter your information below to get your unique referral link. 
                Share it with friends and start earning credits immediately.
              </p>
              <ul className={styles.benefitsList}>
                <li>✨ Unlimited referrals—no cap on earnings</li>
                <li>✨ Credits valid for 12 months</li>
                <li>✨ Use on any service</li>
                <li>✨ Easy tracking in your account</li>
              </ul>
            </div>

            <div className={styles.referralFormCard}>
              <form className={styles.referralForm}>
                <h3>Get Your Referral Link</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="First and last name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="(303) 555-0123"
                  />
                </div>
                <Button type="submit" fullWidth size="large">
                  Get My Link
                </Button>
                <p className={styles.formNote}>
                  Must be an existing client to participate. New clients can sign up after their first visit.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Success Stories</span>
            <h2 className={styles.sectionTitle}>What our clients are earning</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>
                <blockquote>{testimonial.quote}</blockquote>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.author}</strong>
                  <span className={styles.earnedBadge}>{testimonial.earned}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Options */}
      <section className={styles.shareOptions}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Spread the Word</span>
            <h2 className={styles.sectionTitle}>Easy ways to share</h2>
          </div>

          <div className={styles.shareGrid}>
            <div className={styles.shareCard}>
              <span className={styles.shareIcon}>📱</span>
              <h3>Text</h3>
              <p>Send directly to your contacts</p>
            </div>
            <div className={styles.shareCard}>
              <span className={styles.shareIcon}>📧</span>
              <h3>Email</h3>
              <p>Share with your address book</p>
            </div>
            <div className={styles.shareCard}>
              <span className={styles.shareIcon}>💬</span>
              <h3>Social</h3>
              <p>Post to Instagram or Facebook</p>
            </div>
            <div className={styles.shareCard}>
              <span className={styles.shareIcon}>🔗</span>
              <h3>Link</h3>
              <p>Copy and paste anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Questions</span>
            <h2 className={styles.sectionTitle}>Referral Program FAQ</h2>
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

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to start earning?</h2>
            <p className={styles.ctaText}>
              Join hundreds of clients who are saving on their salon visits 
              just by sharing what they love.
            </p>
            <Button href="#get-started" size="large">
              Get Your Referral Link
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
