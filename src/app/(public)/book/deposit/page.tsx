'use client';

import { useRouter } from 'next/navigation';
import { useBookingDispatch } from '../BookingContext';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

export default function DepositPage() {
  const router = useRouter();
  const dispatch = useBookingDispatch();

  function handleSkip() {
    dispatch({ type: 'setDeposit', payload: false });
    router.push('/book/confirmation');
  }

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Secure your appointment</h1>
        <p className={styles.subtitle}>
          A small deposit holds your time and is applied directly to your
          service total. Nothing extra.
        </p>
      </div>

      <div className={styles.depositCard}>
        <p className={styles.amount}>$50</p>
        <p className={styles.amountNote}>
          Applied to your service total. This is not an additional charge.
        </p>

        <div className={styles.paymentPlaceholder}>
          <span className={styles.placeholderIcon} aria-hidden="true">
            &#9634;
          </span>
          <p className={styles.placeholderText}>
            Payment processing will be available soon.
            <br />
            Square integration is coming next.
          </p>
        </div>

        <div className={styles.actions}>
          <Button variant="ghost" onClick={handleSkip} type="button">
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  );
}
