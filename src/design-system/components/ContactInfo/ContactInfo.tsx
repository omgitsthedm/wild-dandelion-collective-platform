import styles from './ContactInfo.module.css';

type ContactInfoProps = {
  className?: string;
};

export function ContactInfo({ className }: ContactInfoProps) {
  const classes = [styles.block, className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.group}>
        <span className={styles.label}>Address</span>
        <a
          href="https://www.google.com/maps/search/?api=1&query=413+Main+St+Longmont+CO+80501"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapLink}
        >
          413 Main St<br />
          Longmont, CO 80501
        </a>
      </div>

      <div className={styles.group}>
        <span className={styles.label}>Phone</span>
        <a href="tel:+13035551234" className={styles.value}>
          (303) 555-1234
        </a>
      </div>

      <div className={styles.group}>
        <span className={styles.label}>Email</span>
        <a href="mailto:hello@thewilddandelion.com" className={styles.value}>
          hello@thewilddandelion.com
        </a>
      </div>

      <div className={styles.group}>
        <span className={styles.label}>Hours</span>
        <div className={styles.hours}>
          <span className={styles.value}>Mon &ndash; Fri: 10am &ndash; 9pm</span>
          <span className={styles.value}>Saturday: 10am &ndash; 6pm</span>
          <span className={styles.value}>Sunday: 10am &ndash; 6:30pm</span>
        </div>
      </div>
    </div>
  );
}
