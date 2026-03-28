import { Button } from '@/design-system/components/Button';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.icon} aria-hidden="true">
        &mdash;
      </div>
      <h1 className={styles.heading}>Page not found</h1>
      <p className={styles.message}>
        We couldn&rsquo;t find what you were looking for. It may have been
        moved, or perhaps the link was mistyped.
      </p>
      <div className={styles.actions}>
        <Button href="/">Go Home</Button>
        <Button href="/services" variant="secondary">
          View Services
        </Button>
      </div>
    </div>
  );
}
