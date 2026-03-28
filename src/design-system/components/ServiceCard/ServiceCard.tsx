import styles from './ServiceCard.module.css';

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  badge,
  className,
}: ServiceCardProps) {
  const classes = [styles.card, className ?? ''].filter(Boolean).join(' ');

  return (
    <a href={href} className={classes}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.arrow} aria-hidden="true">
        &rarr;
      </span>
    </a>
  );
}
