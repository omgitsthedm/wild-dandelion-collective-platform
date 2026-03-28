import styles from './TestimonialCard.module.css';

type TestimonialCardProps = {
  quote: string;
  attribution: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  attribution,
  className,
}: TestimonialCardProps) {
  const classes = [styles.card, className ?? ''].filter(Boolean).join(' ');

  return (
    <blockquote className={classes}>
      <span className={styles.mark} aria-hidden="true">
        &ldquo;
      </span>
      <p className={styles.quote}>{quote}</p>
      <footer className={styles.attribution}>&mdash; {attribution}</footer>
    </blockquote>
  );
}
