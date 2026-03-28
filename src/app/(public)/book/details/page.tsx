'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useBooking, useBookingDispatch, type CustomerDetails } from '../BookingContext';
import { Input } from '@/design-system/components/Input';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

type FormErrors = Partial<Record<keyof CustomerDetails, string>>;

function validate(values: CustomerDetails): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = 'First name is required';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required';
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\d\s\-().+]{7,}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  return errors;
}

export default function DetailsPage() {
  const router = useRouter();
  const booking = useBooking();
  const dispatch = useBookingDispatch();

  const [values, setValues] = useState<CustomerDetails>(
    booking.customerDetails ?? {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      note: '',
    },
  );

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  function handleChange(field: keyof CustomerDetails, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched.has(field)) {
      const newErrors = validate({ ...values, [field]: value });
      setErrors((prev) => ({
        ...prev,
        [field]: newErrors[field],
      }));
    }
  }

  function handleBlur(field: keyof CustomerDetails) {
    setTouched((prev) => new Set(prev).add(field));
    const newErrors = validate(values);
    setErrors((prev) => ({
      ...prev,
      [field]: newErrors[field],
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);
    setTouched(new Set(Object.keys(values)));

    if (Object.keys(newErrors).length === 0) {
      dispatch({ type: 'setDetails', payload: values });
      router.push('/book/deposit');
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>A few details</h1>
        <p className={styles.subtitle}>
          So Ashley knows who is coming and how to reach you if anything
          changes.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <p className={styles.hint}>
          Visited before? Use the same email and we will find your record.
        </p>

        <div className={styles.row}>
          <Input
            label="First name"
            name="firstName"
            required
            value={values.firstName}
            error={errors.firstName}
            onChange={(e) => handleChange('firstName', (e.target as HTMLInputElement).value)}
            onBlur={() => handleBlur('firstName')}
            autoComplete="given-name"
          />
          <Input
            label="Last name"
            name="lastName"
            required
            value={values.lastName}
            error={errors.lastName}
            onChange={(e) => handleChange('lastName', (e.target as HTMLInputElement).value)}
            onBlur={() => handleBlur('lastName')}
            autoComplete="family-name"
          />
        </div>

        <Input
          label="Email"
          name="email"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(e) => handleChange('email', (e.target as HTMLInputElement).value)}
          onBlur={() => handleBlur('email')}
          autoComplete="email"
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          required
          value={values.phone}
          error={errors.phone}
          onChange={(e) => handleChange('phone', (e.target as HTMLInputElement).value)}
          onBlur={() => handleBlur('phone')}
          autoComplete="tel"
        />

        <Input
          label="Anything Ashley should know? (optional)"
          name="note"
          type="textarea"
          value={values.note}
          onChange={(e) => handleChange('note', e.target.value)}
        />

        <div className={styles.footer}>
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </div>
  );
}
