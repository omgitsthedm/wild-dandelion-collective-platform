import styles from './Footer.module.css';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const classes = [styles.footer, className ?? ''].filter(Boolean).join(' ');

  return (
    <footer className={classes}>
      <div className={styles.inner}>
        <nav className={styles.columns} aria-label="Footer navigation">
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.list}>
              <li><a href="/services/color" className={styles.link}>Color</a></li>
              <li><a href="/services/cuts" className={styles.link}>Cuts &amp; Styling</a></li>
              <li><a href="/services/treatments" className={styles.link}>Treatments</a></li>
              <li><a href="/services/extensions" className={styles.link}>Extensions</a></li>
              <li><a href="/services/bridal" className={styles.link}>Bridal</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Explore</h4>
            <ul className={styles.list}>
              <li><a href="/about" className={styles.link}>About</a></li>
              <li><a href="/gallery" className={styles.link}>Gallery</a></li>
              <li><a href="/shop" className={styles.link}>Shop</a></li>
              <li><a href="/collective" className={styles.link}>Collective</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <ul className={styles.list}>
              <li><a href="/contact" className={styles.link}>Contact</a></li>
              <li><a href="/faq" className={styles.link}>FAQ</a></li>
              <li><a href="/book" className={styles.link}>Book</a></li>
            </ul>
          </div>
        </nav>

        <div className={styles.bottom}>
          <div className={styles.info}>
            <span className={styles.detail}>Mon &ndash; Fri 10am&ndash;9pm &middot; Sat 10am&ndash;6pm &middot; Sun 10am&ndash;6:30pm</span>
            <span className={styles.detail}>413 Main St, Longmont, CO 80501</span>
            <a href="tel:+13035551234" className={styles.detail}>(303) 555-1234</a>
          </div>
          <p className={styles.attribution}>
            Designed, Hosted and Cared For by{' '}
            <a
              href="https://littlefightnyc.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.attributionLink}
            >
              LittleFightNYC.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
