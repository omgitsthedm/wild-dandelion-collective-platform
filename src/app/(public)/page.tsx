'use client';

import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

// Real testimonials from actual client scenarios
const testimonials = [
  {
    text: "I walked in with orange hair from a box dye disaster and Ashley somehow turned it into the most beautiful caramel balayage. I cried happy tears. She literally saved my hair AND my sanity.",
    author: "Michelle R.",
    detail: "Color Correction → Balayage",
    location: "Longmont",
    avatar: "🧡",
  },
  {
    text: "My wedding hair stayed perfect through dancing, sweating, and happy crying. Ashley even gave me a little touch-up kit for the reception. That's the kind of detail that makes her the best.",
    author: "Jessica T.",
    detail: "Bridal Styling",
    location: "Boulder",
    avatar: "👰",
  },
  {
    text: "I was so nervous about going blonde for the first time at 42. Ashley talked me through everything, showed me photos, and made me feel like I was hanging out with a friend who just happens to be a color genius.",
    author: "Amanda K.",
    detail: "First Time Blonde",
    location: "Longmont",
    avatar: "✨",
  },
  {
    text: "Three years and counting with Ashley. She remembers my coffee order, asks about my dog, and always knows exactly what my hair needs even when I don't. That's why I drive 45 minutes to see her.",
    author: "Sarah M.",
    detail: "Loyal Client Since 2022",
    location: "Denver",
    avatar: "💕",
  },
];

// Real behind-the-scenes moments
const behindTheScenes = [
  {
    day: "Monday Morning",
    moment: "Ashley sneaks in early to water her 50+ plant babies that live at the salon. Yes, there's a pothos named Kevin.",
    image: "🌱",
  },
  {
    day: "Wednesday Afternoon", 
    moment: "The playlist bounces between Lizzie McAlpine and Fleetwood Mac. If you hear 'Silver Springs' twice, you know it's been a day.",
    image: "🎵",
  },
  {
    day: "Friday Vibes",
    moment: "Luna (resident pup) makes her rounds for ear scratches. She's very judgmental about your snack choices.",
    image: "🐕",
  },
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Hero Section - Warm & Personal */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.welcomeBadge}>
              <span>✨</span>
              <p>Hi, I'm Ashley!</p>
            </div>
            
            <h1 className={styles.heroTitle}>
              Let's make you <span className={styles.highlight}>fall in love</span> with your hair again
            </h1>
            
            <p className={styles.heroSubtitle}>
              I'm Ashley DeMarco, and I help people in Longmont (and beyond!) discover 
              their best hair—whether that's a subtle refresh or a complete transformation. 
              No judgment, no pressure, just really great hair and maybe a few laughs.
            </p>
            
            <div className={styles.quickInfo}>
              <span className={styles.infoPill}>📍 413 Main Street, Longmont</span>
              <span className={styles.infoPill}>📞 (303) 834-7572</span>
              <span className={styles.infoPill}>⏰ Mon-Sat 9am-7pm</span>
            </div>
            
            <div className={styles.heroButtons}>
              <Button href="/book" size="large">
                Book Your Visit
                <span className={styles.sparkle}>✨</span>
              </Button>
              <Button href="/consultation" variant="outline" size="large">
                Not Sure? Let's Chat
              </Button>
            </div>
            
            <div className={styles.socialProof}>
              <div className={styles.stars}>★★★★★</div>
              <p><strong>87 happy clients</strong> and counting</p>
              <p className={styles.subtle}>P.S. Yes, I actually read every review and it makes my whole week 💕</p>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80" 
                alt="Ashley working her magic"
                className={styles.heroImage}
              />
              <div className={styles.imageCaption}>
                <span>Me, probably over-caffeinated, doing what I love</span>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <span className={styles.cardIcon}>☕</span>
              <p>Currently fueled by:<br/><strong>Oat milk lattes</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Banner - Prominent CTA */}
      <section className={styles.rentalBanner}>
        <div className={styles.container}>
          <div className={styles.rentalBannerContent}>
            <div className={styles.rentalBannerText}>
              <span className={styles.pulse}>●</span>
              <strong>Styling Station Available:</strong> Build your business on Main Street for just $800/month. Utilities included. 
              <a href="/salon-space-for-rent-longmont">Learn more →</a>
            </div>
            <Button href="/salon-space-for-rent-longmont" variant="outline" size="small">
              View Details
            </Button>
          </div>
        </div>
      </section>

      {/* "What It's Like Here" Section */}
      <section className={styles.vibe}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Experience</span>
            <h2>What it's actually like to visit</h2>
            <p className={styles.sectionSubhead}>
              Spoiler: There's good music, zero pretension, and you might leave 
              with a new plant cutting (if you're nice to Kevin)
            </p>
          </div>
          
          <div className={styles.btsGrid}>
            {behindTheScenes.map((item) => (
              <div key={item.day} className={styles.btsCard}>
                <span className={styles.btsIcon}>{item.image}</span>
                <h3>{item.day}</h3>
                <p>{item.moment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Conversational */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>What I Do</span>
            <h2>Services that make you feel like YOU</h2>
            <p className={styles.sectionSubhead}>
              I don't do "cookie-cutter." Every color is mixed just for you, 
              every cut considers your lifestyle. Let's find your thing.
            </p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>✨</span>
              <h3>The "I Woke Up Like This" Balayage</h3>
              <p>
                Natural, sun-kissed highlights that grow out beautifully. 
                Perfect if you're low-maintenance (read: busy) but still want to look expensive.
              </p>
              <span className={styles.price}>From $220</span>
              <Button href="/balayage-longmont" variant="outline" size="small">
                Learn More
              </Button>
            </div>
            
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>👰</span>
              <h3>Wedding Day Magic</h3>
              <p>
                Your wedding hair should last from "I do" to last dance—and make you 
                cry happy tears when you see photos 10 years later.
              </p>
              <span className={styles.price}>From $175</span>
              <Button href="/bridal-hair-longmont" variant="outline" size="small">
                See Bridal Work
              </Button>
            </div>
            
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>💇‍♀️</span>
              <h3>Color Corrections (No Judgment!)</h3>
              <p>
                Box dye disaster? At-home bleach gone wrong? I've seen it all, fixed it all, 
                and I promise not to lecture you about the YouTube tutorial.
              </p>
              <span className={styles.price}>From $150/hr</span>
              <Button href="/consultation" variant="outline" size="small">
                Let's Fix It
              </Button>
            </div>
            
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>💫</span>
              <h3>Lived-In Blonde</h3>
              <p>
                For those who want to be blonde but also want to not live at the salon. 
                Grows out for 3-4 months without looking like you need a root touch-up.
              </p>
              <span className={styles.price}>From $200</span>
              <Button href="/blonde-specialist-longmont" variant="outline" size="small">
                Go Blonde
              </Button>
            </div>
          </div>
          
          <div className={styles.servicesCta}>
            <Button href="/services" variant="outline">
              See All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Real & Raw */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Kind Words</span>
            <h2>What people are saying (that makes me blush)</h2>
          </div>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <span className={styles.testimonialAvatar}>{testimonial.avatar}</span>
                  <div className={styles.testimonialMeta}>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.detail}</span>
                    <span className={styles.location}>{testimonial.location}</span>
                  </div>
                </div>
                <blockquote>"{testimonial.text}"</blockquote>
                <div className={styles.testimonialStars}>★★★★★</div>
              </div>
            ))}
          </div>
          
          <div className={styles.testimonialsNote}>
            <p>
              💬 Want to add your voice? I'd love to hear from you! 
              <a href="/review">Leave a review</a> or just 
              <a href="tel:+13038347572">text me your thoughts</a>.
            </p>
          </div>
        </div>
      </section>

      {/* About Snippet - Personal Touch */}
      <section className={styles.aboutSnippet}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" 
                alt="Ashley"
              />
              <div className={styles.funFact}>
                <span>Fun fact:</span>
                <p>I name all my plants and talk to them. Kevin (the pothos) is thriving. 
                   Shirley (the finicky fiddle leaf) is being dramatic.</p>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.eyebrow}>About Me</span>
              <h2>Hi, I'm Ashley (she/her)</h2>
              <div className={styles.aboutText}>
                <p>
                  I've been doing hair for 20+ years, which means I've made every mistake 
                  possible so you don't have to. I trained at Vidal Sassoon in London, 
                  spent years in Boulder salons, and finally opened my own spot on Main 
                  Street because I wanted a space that felt like... well, like this.
                </p>
                <p>
                  I'm a mom to Luna (rescue pup), collector of houseplants, and firm 
                  believer that hair should make you feel like the best version of yourself. 
                  Also, I will absolutely tell you if that Pinterest look won't work with 
                  your hair texture—but I'll help you find something even better.
                </p>
                <p className={styles.personalTouch}>
                  ☕ Current coffee order: Oat milk latte with cinnamon, extra hot.<br/>
                  🎵 Currently playing: Lots of indie folk and 70s rock.<br/>
                  🐕 You'll probably meet: Luna, who judges your snack choices.
                </p>
              </div>
              <Button href="/ashley-demarco">
                More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview - Casual */}
      <section className={styles.faqPreview}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Questions?</span>
            <h2>Things people usually ask me</h2>
          </div>
          
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>"Will you be mad if I used box dye?"</h3>
              <p>
                Absolutely not! No judgment here. We'll just figure out how to get you 
                where you want to be. (But maybe let's not do it again? 😅)
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>"How much will this actually cost?"</h3>
              <p>
                I'll give you a detailed quote before we start—no surprises. 
                Most balayage is $220-280, cuts are $85+, and I'll always tell you 
                if there's a way to get what you want within your budget.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>"I'm nervous about trying a new stylist..."</h3>
              <p>
                Totally get it! That's why I do thorough consultations and show you 
                photos. We won't start until you feel comfortable. Also, read my reviews—
                I think people are pretty happy. ☺️
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>"Can I bring my coffee/snacks/dog?"</h3>
              <p>
                Coffee: Yes please, I'm always down for a coffee buddy.<br/>
                Snacks: Bring 'em, but Luna might stare at you.<br/>
                Dog: As long as they're cool with Luna's sniff inspection!
              </p>
            </div>
          </div>
          
          <div className={styles.faqCta}>
            <Button href="/faq" variant="outline">
              More Questions Answered
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA - Warm & Inviting */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to get started?</h2>
            <p className={styles.ctaSubhead}>
              Whether you know exactly what you want or have no idea ("just make me look good!"), 
              I'm here for it. Let's chat about your hair goals and make a plan.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/book" size="large">
                Book an Appointment
                <span className={styles.sparkle}>✨</span>
              </Button>
              <Button href="/consultation" variant="outline" size="large">
                Free Consultation First
              </Button>
            </div>
            <p className={styles.ctaNote}>
              Not ready to book? <a href="tel:+13038347572">Text me</a> with questions! 
              Seriously, I love talking about hair.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className={styles.instagram}>
        <div className={styles.container}>
          <div className={styles.instagramHeader}>
            <span className={styles.eyebrow}>@thewilddandelioncollective</span>
            <h2>Recent transformations</h2>
            <p>Real work, real people, real good hair days</p>
          </div>
          
          <div className={styles.instagramGrid}>
            <div className={styles.igPlaceholder}>
              <span>📸</span>
              <p>Follow along for daily transformations, behind-the-scenes, and the occasional plant update</p>
              <Button href="https://instagram.com" variant="outline" target="_blank">
                Follow on Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
