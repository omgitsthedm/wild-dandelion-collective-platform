'use client';

import { useEffect } from 'react';
import { Button } from '@/design-system/components/Button';
import styles from './error.module.css';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to error tracking service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        
        <h1 className={styles.title}>Something went wrong</h1>
        
        <p className={styles.message}>
          We&apos;re sorry, but we encountered an unexpected issue. 
          Please try again or contact us if the problem persists.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <details className={styles.details}>
            <summary>Error details (development only)</summary>
            <pre className={styles.errorInfo}>{error.message}</pre>
            {error.digest && (
              <p className={styles.digest}>Error ID: {error.digest}</p>
            )}
          </details>
        )}

        <div className={styles.actions}>
          <Button onClick={reset} variant="primary">
            Try Again
          </Button>
          <Button href="/" variant="secondary">
            Go Home
          </Button>
        </div>

        <p className={styles.contact}>
          Need help? Call us at{' '}
          <a href="tel:3038347572" className={styles.link}>
            (303) 834-7572
          </a>
        </p>
      </div>
    </div>
  );
}
