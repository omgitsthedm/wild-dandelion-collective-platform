import type { Metadata } from 'next';
import { Button } from '@/design-system/components/Button';
import { PhotoFrame } from '@/design-system/components/PhotoFrame';
import styles from './page.module.css';

// Animated dandelion that floats
function FloatingDandelion({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main seed head */}
      <g className={styles.float}>
        <circle cx="100" cy="80" r="35" fill="url(#seedGradient)" opacity="0.9" />
        {/* Floating seeds */}
        <g opacity="0.6">
          <circle cx="150" cy="40" r="4" fill="#FF8E8E" />
          <line x1="140" y1="50" x2="150" y2="40" stroke="#FF8E8E" strokeWidth="1" />
        </g>
        <g opacity="0.5">
          <circle cx="170" cy="90" r="3" fill="#6EDDD6" />
          <line x1="160" y1="100" x2="170" y2="90" stroke="#6EDDD6" strokeWidth="1" />
        </g>
        <g opacity="0.4">
          <circle cx="30" cy="60" r="5" fill="#C4B5FD" />
          <line x1="40" y1="70" x2="30" y2="60" stroke="#C4B5FD" strokeWidth="1" />
        </g>
        {/* Sparkles */}
        <circle cx="130" cy="30" r="2" fill="#FFD93D" className={styles.pulse} />
        <circle cx="50" cy="100" r="1.5" fill="#FF6B6B" className={styles.pulse} style={{ animationDelay: '0.5s' }} />
        <circle cx="160" cy="120" r="2" fill="#6EDDD6" className={styles.pulse} style={{ animationDelay: '1s' }} />
      </g>
      
      <defs>
        <radialGradient id="seedGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFBF5" />
          <stop offset="70%" stopColor="#FF8E8E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.1" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Playful decorative blobs
function DecorativeBlob({ className, color }: { className?: string; color: 'coral' | 'mint' | 'lavender' }) {
  const colors = {
    coral: styles.blobCoral,
    mint: styles.blobMint,
    lavender: styles.blobLavender,
  };
  
  return (
    <div className={`${styles.blob} ${colors[color]} ${className}`} aria-hidden="true" />
  );
}

export default function HomePage() {
  return (
    <main id="main-content" className={styles.main}>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <DecorativeBlob className={styles.blob1} color="coral" />
        <DecorativeBlob className={styles.blob2} color="mint" />
        <DecorativeBlob className={styles.blob3} color="lavender" />
        
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={`${styles.heroBadge} ${styles.reveal}`}>
              <span className={styles.heroBadgeIcon}>✦</span>
              Now Booking in Longmont
            </div>
            
            <h1 className={`${styles.heroTitle} ${styles.reveal}`}>
              Where Beauty
              <br />
              <span className={styles.heroTitleAccent}>Meets Joy</span>
            </h1>
            
            <p className={`${styles.heroSubtitle} ${styles.reveal}`}>
              Step into a space that feels like a warm hug for your hair. 
              Ashley brings 20+ years of expertise with a playful, personal touch 
              that makes every visit something to look forward to.
            </p>
            
            <div className={`${styles.heroCtas} ${styles.reveal}`}>
              <Button href="/book" size="large">
                Book Your Visit
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="/services" variant="outline" size="large">
                Explore Services
              </Button>
            </div>
            
            <div className={`${styles.heroStats} ${styles.reveal}`}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>★★★★★</span>
                <span className={styles.statLabel}>Loved by Clients</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>2k+</span>
                <span className={styles.statLabel}>Happy Heads</span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.heroVisual} ${styles.reveal}`}>
            <FloatingDandelion className={styles.heroDandelion} />
            <div className={styles.heroImageWrapper}>
              <PhotoFrame
                src="/images/ashley-portrait.webp"
                alt="Ashley at The Wild Dandelion Collective"
                priority
              />
              <div className={styles.heroImageBadge}>
                <span>👋</span>
                Hi, I'm Ashley!
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
        </div>
      </section>

      {/* ── Services Bento Grid ────────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionEyebrow}>What We Do</span>
            <h2 className={styles.sectionTitle}>
              Services made <span className={styles.gradientText}>for you</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              From subtle refresh to total transformation, we've got you covered
            </p>
          </div>
          
          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoCard} ${styles.bentoLarge} ${styles.reveal}`}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>✨</span>
                <h3>Lived-In Blonde</h3>
                <p>Sun-kissed, natural-looking highlights that grow out beautifully</p>
                <span className={styles.bentoPrice}>From $200</span>
              </div>
              <div className={`${styles.bentoGlow} ${styles.glowCoral}`} />
            </div>
            
            <div className={`${styles.bentoCard} ${styles.reveal}`}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>💇‍♀️</span>
                <h3>Precision Cuts</h3>
                <p>Tailored to your face, texture, and lifestyle</p>
                <span className={styles.bentoPrice}>From $85</span>
              </div>
              <div className={`${styles.bentoGlow} ${styles.glowMint}`} />
            </div>
            
            <div className={`${styles.bentoCard} ${styles.reveal}`}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>🎨</span>
                <h3>Signature Color</h3>
                <p>Rich, dimensional color crafted just for you</p>
                <span className={styles.bentoPrice}>From $150</span>
              </div>
              <div className={`${styles.bentoGlow} ${styles.glowLavender}`} />
            </div>
            
            <div className={`${styles.bentoCard} ${styles.bentoWide} ${styles.reveal}`}>
              <div className={styles.bentoContent}>
                <span className={styles.bentoIcon}>👰</span>
                <h3>Bridal & Events</h3>
                <p>Stunning styles for your most special moments. From intimate elopements to grand celebrations, we create looks that last all day and photograph beautifully.</p>
                <span className={styles.bentoPrice}>From $125</span>
              </div>
              <div className={`${styles.bentoGlow} ${styles.glowSunshine}`} />
            </div>
          </div>
          
          <div className={`${styles.sectionCta} ${styles.reveal}`}>
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ── The Vibe ─────────────────────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.vibeSection}`}>
        <div className={styles.container}>
          <div className={styles.vibeGrid}>
            <div className={`${styles.vibeContent} ${styles.reveal}`}>
              <span className={styles.sectionEyebrow}>The Space</span>
              <h2 className={styles.sectionTitle}>
                More than a salon — <br />
                <span className={styles.vibeTitleAccent}>a sanctuary</span>
              </h2>
              <p className={styles.vibeText}>
                Imagine a place where you're greeted with genuine warmth, 
                where the coffee is always fresh, and where you can actually 
                relax while getting pampered. That's the Wild Dandelion way.
              </p>
              <p className={styles.vibeText}>
                Our 2,000 sq ft space on Main Street is designed to feel like 
                a warm, creative living room — filled with plants, art, and 
                good vibes only.
              </p>
              
              <div className={styles.vibeFeatures}>
                <div className={styles.vibeFeature}>
                  <span className={styles.vibeFeatureIcon}>🌿</span>
                  <span>Plant-filled & peaceful</span>
                </div>
                <div className={styles.vibeFeature}>
                  <span className={styles.vibeFeatureIcon}>☕</span>
                  <span>Complimentary refreshments</span>
                </div>
                <div className={styles.vibeFeature}>
                  <span className={styles.vibeFeatureIcon}>🎵</span>
                  <span>Curated playlists</span>
                </div>
                <div className={styles.vibeFeature}>
                  <span className={styles.vibeFeatureIcon}>💆‍♀️</span>
                  <span>No rush, ever</span>
                </div>
              </div>
              
              <div className={styles.vibeCtas}>
                <Button href="/about">Meet Ashley</Button>
                <Button href="/collective" variant="ghost">
                  Space Available for Rent →
                </Button>
              </div>
            </div>
            
            <div className={`${styles.vibeVisual} ${styles.reveal}`}>
              <div className={styles.vibeImageStack}>
                <div className={styles.vibeImageMain}>
                  <PhotoFrame
                    src="/images/studio-detail.webp"
                    alt="The Wild Dandelion Collective studio space"
                  />
                </div>
                <div className={styles.vibeImageAccent}>
                  <PhotoFrame
                    src="/images/hair-work-1.webp"
                    alt="Beautiful hair transformation"
                  />
                </div>
                <div className={styles.vibeFloatingCard}>
                  <span className={styles.vibeFloatingEmoji}>💫</span>
                  <span className={styles.vibeFloatingText}>Voted Best Salon 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.testimonialSection}`}>
        <div className={styles.container}>
          <div className={`${styles.testimonialCard} ${styles.reveal}`}>
            <div className={styles.testimonialQuoteMark}>"</div>
            <blockquote className={styles.testimonialQuote}>
              Ashley has this incredible ability to understand exactly what 
              you want, even when you can't quite put it into words. I leave 
              feeling like the best version of myself — every single time.
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>S</div>
              <div className={styles.testimonialInfo}>
                <span className={styles.testimonialName}>Sarah M.</span>
                <span className={styles.testimonialDetail}>Longmont local & happy client</span>
              </div>
              <div className={styles.testimonialStars}>★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.stepsSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionEyebrow}>Getting Started</span>
            <h2 className={styles.sectionTitle}>Your journey in 3 easy steps</h2>
          </div>
          
          <div className={styles.stepsGrid}>
            <div className={`${styles.stepCard} ${styles.reveal}`}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>📅</div>
              <h3 className={styles.stepTitle}>Book</h3>
              <p className={styles.stepText}>
                Choose your service and pick a time that works for you. 
                Online booking takes less than 2 minutes.
              </p>
            </div>
            
            <div className={styles.stepArrow}>→</div>
            
            <div className={`${styles.stepCard} ${styles.reveal}`}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>💬</div>
              <h3 className={styles.stepTitle}>Consult</h3>
              <p className={styles.stepText}>
                We'll chat about your hair goals, lifestyle, and what 
                makes you feel most confident.
              </p>
            </div>
            
            <div className={styles.stepArrow}>→</div>
            
            <div className={`${styles.stepCard} ${styles.reveal}`}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>✨</div>
              <h3 className={styles.stepTitle}>Transform</h3>
              <p className={styles.stepText}>
                Sit back, relax, and let Ashley work her magic. 
                You'll leave feeling amazing.
              </p>
            </div>
          </div>
          
          <div className={`${styles.stepsCta} ${styles.reveal}`}>
            <Button href="/book" size="large">
              Start Your Journey
              <span className={styles.buttonSparkle}>✨</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────────── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaBackground}>
          <DecorativeBlob className={styles.ctaBlob1} color="coral" />
          <DecorativeBlob className={styles.ctaBlob2} color="mint" />
          <DecorativeBlob className={styles.ctaBlob3} color="lavender" />
        </div>
        <div className={styles.container}>
          <div className={`${styles.finalCtaContent} ${styles.reveal}`}>
            <h2 className={styles.finalCtaTitle}>
              Ready for hair that makes you <span className={styles.wiggle}>smile?</span>
            </h2>
            <p className={styles.finalCtaText}>
              Book your appointment today and experience the Wild Dandelion difference.
            </p>
            <div className={styles.finalCtaButtons}>
              <Button href="/book" size="large">
                Book Now
                <span className={styles.buttonSparkle}>✨</span>
              </Button>
              <Button href="tel:3038347572" variant="outline" size="large">
                Call (303) 834-7572
              </Button>
            </div>
            <p className={styles.finalCtaLocation}>
              📍 413 Main St, Longmont, CO 80501
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
