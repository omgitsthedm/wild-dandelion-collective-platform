'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useBooking } from './BookingContext';
import styles from './layout.module.css';

const STEPS = [
  { path: '/book', label: 'Service' },
  { path: '/book/date', label: 'Date' },
  { path: '/book/time', label: 'Time' },
  { path: '/book/details', label: 'Details' },
  { path: '/book/deposit', label: 'Deposit' },
  { path: '/book/confirmation', label: 'Confirmed' },
];

function getCurrentStep(pathname: string): number {
  const index = STEPS.findIndex((s) => s.path === pathname);
  return index >= 0 ? index + 1 : 1;
}

export function BookingShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const booking = useBooking();
  const currentStep = getCurrentStep(pathname);
  const isConfirmation = currentStep === 6;

  function handleBack() {
    if (currentStep <= 1) {
      router.push('/services');
    } else {
      router.push(STEPS[currentStep - 2].path);
    }
  }

  return (
    <div className={styles.wrapper}>
      {!isConfirmation && (
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <button
              className={styles.backButton}
              onClick={handleBack}
              aria-label="Go back"
              type="button"
            >
              <span className={styles.backArrow} aria-hidden="true">
                &larr;
              </span>
              <span>Back</span>
            </button>

            <div className={styles.progressArea}>
              <div
                className={styles.progressDots}
                role="progressbar"
                aria-valuenow={currentStep}
                aria-valuemin={1}
                aria-valuemax={6}
                aria-label={`Step ${currentStep} of 6`}
              >
                {STEPS.map((step, i) => {
                  const stepNum = i + 1;
                  let dotClass = styles.dot;
                  if (stepNum < currentStep) dotClass += ` ${styles.dotCompleted}`;
                  else if (stepNum === currentStep) dotClass += ` ${styles.dotActive}`;
                  return <div key={step.path} className={dotClass} />;
                })}
              </div>
              <span className={styles.stepLabel}>
                {STEPS[currentStep - 1]?.label}
              </span>
            </div>

            <div className={styles.spacer} />
          </div>
        </header>
      )}

      <main className={styles.main}>{children}</main>
    </div>
  );
}
