'use client';

import { useState, useCallback, type ChangeEvent } from 'react';
import { Input } from '@/design-system/components/Input';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

/* ── Types ────────────────────────────────────────────────── */

type ServiceCategory = 'color' | 'blonde' | 'extensions' | 'bridal' | 'not-sure';
type PreferredContact = 'email' | 'phone' | 'text';

type FormData = {
  serviceCategory: ServiceCategory | '';
  description: string;
  photos: (File | null)[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: PreferredContact;
  timing: string;
};

const TOTAL_STEPS = 4;

const CATEGORIES: { value: ServiceCategory; label: string; icon: string }[] = [
  { value: 'color', label: 'Color', icon: '\u{1F3A8}' },
  { value: 'blonde', label: 'Blonde', icon: '\u{2728}' },
  { value: 'extensions', label: 'Extensions', icon: '\u{1F31F}' },
  { value: 'bridal', label: 'Bridal', icon: '\u{1F490}' },
  { value: 'not-sure', label: 'Not Sure', icon: '\u{1F331}' },
];

const PHOTO_PROMPTS = [
  'Current hair \u2014 front view',
  'Current hair \u2014 side or back view',
  'Inspiration photo \u2014 what you\u2019re going for',
];

/* ── Metadata (client component workaround) ───────────────── */
// Metadata is exported from a separate generateMetadata or via layout
// For a client component page, we set it via the parent layout or head

/* ── Component ────────────────────────────────────────────── */

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [previews, setPreviews] = useState<(string | null)[]>([null, null, null]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState<FormData>({
    serviceCategory: '',
    description: '',
    photos: [null, null, null],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    timing: '',
  });

  /* ── Helpers ──────────────────────────────────────────────── */

  const updateField = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handlePhotoChange = useCallback(
    (index: number, e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;
      setForm((prev) => {
        const photos = [...prev.photos];
        photos[index] = file;
        return { ...prev, photos };
      });
      if (file) {
        const url = URL.createObjectURL(file);
        setPreviews((prev) => {
          const next = [...prev];
          next[index] = url;
          return next;
        });
      }
    },
    []
  );

  const removePhoto = useCallback((index: number) => {
    setForm((prev) => {
      const photos = [...prev.photos];
      photos[index] = null;
      return { ...prev, photos };
    });
    setPreviews((prev) => {
      const next = [...prev];
      if (next[index]) URL.revokeObjectURL(next[index]!);
      next[index] = null;
      return next;
    });
  }, []);

  const canAdvance = (): boolean => {
    switch (step) {
      case 1:
        return form.serviceCategory !== '';
      case 2:
        return true; // photos are optional
      case 3:
        return form.firstName.trim() !== '' && form.email.trim() !== '';
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('serviceCategory', form.serviceCategory);
      payload.append('description', form.description);
      payload.append('firstName', form.firstName);
      payload.append('lastName', form.lastName);
      payload.append('email', form.email);
      payload.append('phone', form.phone);
      payload.append('preferredContact', form.preferredContact);
      payload.append('timing', form.timing);

      form.photos.forEach((photo, i) => {
        if (photo) payload.append(`photo_${i}`, photo);
      });

      const res = await fetch('/api/consult', { method: 'POST', body: payload });
      const data = await res.json();
      console.log('Consultation submitted:', data);
      setStep(4);
    } catch (err) {
      console.error('Submission failed:', err);
      // TODO: surface error to user
    } finally {
      setIsSubmitting(false);
    }
  };

  const next = () => {
    if (step === 3) {
      handleSubmit();
    } else {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    }
  };

  const back = () => setStep((s) => Math.max(s - 1, 1));

  /* ── Progress Dots ────────────────────────────────────────── */

  const renderProgress = () => (
    <div className={styles.progressBar} role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={TOTAL_STEPS}>
      {Array.from({ length: TOTAL_STEPS }, (_, i) => {
        const dotStep = i + 1;
        let cls = styles.dot;
        if (dotStep === step) cls += ` ${styles.dotActive}`;
        else if (dotStep < step) cls += ` ${styles.dotComplete}`;
        return <div key={dotStep} className={cls} />;
      })}
    </div>
  );

  /* ── Step 1 — Service Selection ───────────────────────────── */

  const renderStep1 = () => (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <p className={styles.stepEyebrow}>Step 1 of 3</p>
        <h1 className={styles.stepTitle}>What are you looking for?</h1>
      </div>

      <div className={styles.stepBody}>
        <div className={styles.categoryGrid}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              className={`${styles.categoryCard} ${form.serviceCategory === cat.value ? styles.categoryCardSelected : ''}`}
              onClick={() => updateField('serviceCategory', cat.value)}
              aria-pressed={form.serviceCategory === cat.value}
            >
              <span className={styles.categoryIcon} aria-hidden="true">{cat.icon}</span>
              <span className={styles.categoryLabel}>{cat.label}</span>
            </button>
          ))}
        </div>

        <Input
          label="Tell us about your hair goals"
          name="description"
          type="textarea"
          value={form.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Anything Ashley should know &mdash; your history, what you've tried, what you're hoping for..."
        />

        <div className={styles.stepNav}>
          <Button
            variant="primary"
            fullWidth
            onClick={next}
            disabled={!canAdvance()}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );

  /* ── Step 2 — Photo Upload ────────────────────────────────── */

  const renderStep2 = () => (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <p className={styles.stepEyebrow}>Step 2 of 3</p>
        <h1 className={styles.stepTitle}>Show us your hair</h1>
      </div>

      <div className={styles.stepBody}>
        <div className={styles.photoPrompts}>
          {PHOTO_PROMPTS.map((prompt, i) => (
            <div
              key={i}
              className={`${styles.photoSlot} ${previews[i] ? styles.photoSlotFilled : ''}`}
            >
              {previews[i] ? (
                <>
                  <img
                    src={previews[i]!}
                    alt={prompt}
                    className={styles.photoPreview}
                  />
                  <button
                    type="button"
                    className={styles.removePhoto}
                    onClick={() => removePhoto(i)}
                    aria-label={`Remove ${prompt}`}
                  >
                    &times;
                  </button>
                </>
              ) : (
                <>
                  <div className={styles.cameraIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                  <p className={styles.photoSlotLabel}>{prompt}</p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className={styles.photoInput}
                onChange={(e) => handlePhotoChange(i, e)}
                aria-label={prompt}
                tabIndex={previews[i] ? -1 : 0}
              />
            </div>
          ))}
        </div>

        <div className={styles.stepNav}>
          <button type="button" className={styles.backButton} onClick={back}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back
          </button>
          <Button
            variant="primary"
            fullWidth
            onClick={next}
          >
            Continue
          </Button>
        </div>

        <button type="button" className={styles.skipLink} onClick={next}>
          Skip photos for now
        </button>
      </div>
    </div>
  );

  /* ── Step 3 — Your Details ────────────────────────────────── */

  const renderStep3 = () => (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <p className={styles.stepEyebrow}>Step 3 of 3</p>
        <h1 className={styles.stepTitle}>Your details</h1>
      </div>

      <div className={styles.stepBody}>
        <div className={styles.formGrid}>
          <div className={styles.formRow}>
            <Input
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={(e) => updateField('lastName', e.target.value)}
            />
          </div>

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            required
          />

          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
          />

          <div className={styles.toggleGroup}>
            <span className={styles.toggleLabel}>Preferred Contact Method</span>
            <div className={styles.toggleRow} role="radiogroup" aria-label="Preferred contact method">
              {(['email', 'phone', 'text'] as PreferredContact[]).map((method) => (
                <button
                  key={method}
                  type="button"
                  role="radio"
                  aria-checked={form.preferredContact === method}
                  className={`${styles.toggleOption} ${form.preferredContact === method ? styles.toggleOptionActive : ''}`}
                  onClick={() => updateField('preferredContact', method)}
                >
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <Input
            label="Timing"
            name="timing"
            type="textarea"
            value={form.timing}
            onChange={(e) => updateField('timing', e.target.value)}
            placeholder="Any upcoming events or deadlines?"
          />
        </div>

        <div className={styles.stepNav}>
          <button type="button" className={styles.backButton} onClick={back}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back
          </button>
          <Button
            variant="primary"
            fullWidth
            onClick={next}
            disabled={!canAdvance() || isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </div>
      </div>
    </div>
  );

  /* ── Step 4 — Confirmation ────────────────────────────────── */

  const renderStep4 = () => (
    <div className={styles.stepContainer}>
      <div className={styles.confirmation}>
        <div className={styles.checkmark} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 className={styles.confirmTitle}>Thank you!</h1>

        <p className={styles.confirmBody}>
          Ashley will review your photos and be in touch within 48 hours. She takes every consultation personally and wants to make sure your first appointment is set up for success.
        </p>

        <div className={styles.nextSteps}>
          <p className={styles.nextStepsTitle}>What happens next</p>

          <div className={styles.nextStepItem}>
            <span className={styles.nextStepNumber}>1</span>
            <p className={styles.nextStepText}>Ashley reviews your submission and any photos you shared</p>
          </div>
          <div className={styles.nextStepItem}>
            <span className={styles.nextStepNumber}>2</span>
            <p className={styles.nextStepText}>She reaches out to discuss your goals and recommend a plan</p>
          </div>
          <div className={styles.nextStepItem}>
            <span className={styles.nextStepNumber}>3</span>
            <p className={styles.nextStepText}>Once you have connected, you will book your first appointment</p>
          </div>
        </div>

        <div className={styles.confirmActions}>
          <Button variant="primary" href="/">
            Return Home
          </Button>
          <Button variant="secondary" href="/services">
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );

  /* ── Render ───────────────────────────────────────────────── */

  return (
    <main className={styles.page}>
      {step < 4 && renderProgress()}
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
    </main>
  );
}
