import Link from 'next/link';
import styles from './Footer.module.css';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const classes = [styles.footer, className ?? ''].filter(Boolean).join(' ');

  return (
    <footer className={classes}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>🌸</span>
              <span className={styles.logoText}>Wild Dandelion</span>
            </Link>
            <p className={styles.tagline}>
              Where beauty meets joy. A playful space for self-expression in Longmont, Colorado.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <nav className={styles.nav} aria-label="Footer navigation">
            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Services</h4>
              <ul className={styles.navList}>
                <li><Link href="/services/lived-in-blonde" className={styles.navLink}>Lived-In Blonde</Link></li>
                <li><Link href="/services/signature-color" className={styles.navLink}>Signature Color</Link></li>
                <li><Link href="/services/precision-cutting" className={styles.navLink}>Precision Cuts</Link></li>
                <li><Link href="/services/bridal" className={styles.navLink}>Bridal & Events</Link></li>
                <li><Link href="/services" className={styles.navLink}>View All →</Link></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Explore</h4>
              <ul className={styles.navList}>
                <li><Link href="/about" className={styles.navLink}>About Ashley</Link></li>
                <li><Link href="/gallery" className={styles.navLink}>Gallery</Link></li>
                <li><Link href="/collective" className={styles.navLink}>The Collective</Link></li>
                <li><Link href="/shop" className={styles.navLink}>Shop</Link></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Connect</h4>
              <ul className={styles.navList}>
                <li><Link href="/book" className={styles.navLink}>Book Online</Link></li>
                <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
                <li><Link href="/faq" className={styles.navLink}>FAQ</Link></li>
                <li><a href="tel:+13038347572" className={styles.navLink}>(303) 834-7572</a></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Contact Bar */}
        <div className={styles.contactBar}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span>413 Main St, Longmont, CO 80501</span>
          </div>
          <div className={styles.contactDivider} />
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📞</span>
            <a href="tel:+13038347572">(303) 834-7572</a>
          </div>
          <div className={styles.contactDivider} />
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉️</span>
            <a href="mailto:hello@thewilddandelion.com">hello@thewilddandelion.com</a>
          </div>
          <div className={styles.contactDivider} />
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>🕐</span>
            <span>Mon–Sat: 9am–7pm</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} The Wild Dandelion Collective. All rights reserved.
          </p>
          <p className={styles.attribution}>
            Made with 💕 by{' '}
            <a href="https://littlefightnyc.com" target="_blank" rel="noopener noreferrer">
              LittleFightNYC
            </a>
          </p>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
    </footer>
  );
}
