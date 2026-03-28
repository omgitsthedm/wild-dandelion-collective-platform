'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { services } from '@/data/services';
import { useBooking, useBookingDispatch } from './BookingContext';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

function ServiceSelection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const booking = useBooking();
  const dispatch = useBookingDispatch();

  const preselected = searchParams.get('service');
  const [selected, setSelected] = useState<string | null>(
    booking.selectedService ?? preselected ?? null,
  );

  useEffect(() => {
    if (preselected && !selected) {
      const match = services.find((s) => s.slug === preselected);
      if (match) {
        if (match.consultationRequired) {
          router.push('/contact?reason=consultation');
          return;
        }
        setSelected(match.slug);
      }
    }
  }, [preselected, selected, router]);

  function handleSelect(slug: string) {
    const service = services.find((s) => s.slug === slug);
    if (service?.consultationRequired) {
      router.push('/contact?reason=consultation');
      return;
    }
    setSelected(slug);
  }

  function handleContinue() {
    if (selected) {
      dispatch({ type: 'setService', payload: selected });
      router.push('/book/date');
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>What are you looking for?</h1>
        <p className={styles.subtitle}>
          Choose the service that feels right. Not sure? Pick what resonates and
          Ashley will refine the plan with you in the chair.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => {
          const isSelected = selected === service.slug;
          const cardClasses = [
            styles.serviceCard,
            isSelected ? styles.serviceCardSelected : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={service.slug}
              className={cardClasses}
              onClick={() => handleSelect(service.slug)}
              type="button"
              aria-pressed={isSelected}
            >
              {service.consultationRequired && (
                <span className={styles.consultBadge}>Consultation first</span>
              )}
              <h3 className={styles.serviceName}>{service.name}</h3>
              <p className={styles.serviceLabel}>{service.humanLabel}</p>
              <p className={styles.serviceDescription}>
                {service.description}
              </p>
              <div className={styles.serviceMeta}>
                <span>{service.pricingRange}</span>
                <span>{service.duration}</span>
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className={styles.footer}>
          <Button onClick={handleContinue}>Continue</Button>
        </div>
      )}
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense>
      <ServiceSelection />
    </Suspense>
  );
}
