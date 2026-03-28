'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/design-system/components/Card';
import { Button } from '@/design-system/components/Button';
import styles from './page.module.css';

/* Placeholder data */
const client = {
  id: 'cl-001',
  name: 'Megan Torres',
  email: 'megan.torres@email.com',
  phone: '(303) 555-0147',
  tags: ['Blonde client', 'Extension', 'VIP'],
  visits: [
    { service: 'Balayage + Toner', date: 'Mar 14, 2026' },
    { service: 'Root Touch-Up', date: 'Feb 8, 2026' },
    { service: 'Full Highlight + Cut', date: 'Jan 4, 2026' },
    { service: 'Balayage + Toner', date: 'Nov 22, 2025' },
  ],
  notes: [
    { content: 'Prefers cooler tones. Allergic to PPD — use PPD-free formulas only.', date: 'Jan 4, 2026' },
    { content: 'Wants to go lighter gradually. Currently at level 7.', date: 'Nov 22, 2025' },
  ],
};

export default function ClientDetailPage() {
  const [showToast, setShowToast] = useState(false);

  function handleVoiceNote() {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  }

  return (
    <div className={styles.page}>
      <Link href="/admin/clients" className={styles.backLink}>
        &larr; Clients
      </Link>

      {/* Contact Info */}
      <Card variant="elevated">
        <div className={styles.contactCard}>
          <h1 className={styles.clientName}>{client.name}</h1>
          <div className={styles.contactRow}>
            <svg className={styles.contactIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4l6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {client.email}
          </div>
          <div className={styles.contactRow}>
            <svg className={styles.contactIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 2h3l1.5 3.5L6 7s1 2.5 3 3l1.5-1.5L14 10v3c0 .5-.5 1-1 1C6 14 2 10 2 3c0-.5.5-1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            {client.phone}
          </div>
          <div className={styles.tags}>
            {client.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Card>

      {/* Visit History */}
      <section className={styles.historySection}>
        <p className={styles.sectionLabel}>Visit History</p>
        <div className={styles.historyList}>
          {client.visits.map((visit, i) => (
            <div key={i} className={styles.historyItem}>
              <span className={styles.historyService}>{visit.service}</span>
              <span className={styles.historyDate}>{visit.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className={styles.notesSection}>
        <p className={styles.sectionLabel}>Notes</p>
        <div className={styles.notesList}>
          {client.notes.map((note, i) => (
            <div key={i} className={styles.noteItem}>
              <p className={styles.noteContent}>{note.content}</p>
              <p className={styles.noteDate}>{note.date}</p>
            </div>
          ))}
        </div>
        <textarea
          className={styles.notesTextarea}
          placeholder="Add a new note..."
        />
        <div className={styles.voiceRow}>
          <button
            type="button"
            className={styles.voiceBtn}
            onClick={handleVoiceNote}
            aria-label="Record voice note"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="7" y="2" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 9a6 6 0 0012 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 15v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <span className={styles.voiceHint}>Hold to record a voice note</span>
        </div>
      </section>

      {/* Actions */}
      <div className={styles.actions}>
        <Button variant="primary" href="/admin/bookings" fullWidth>
          Book for {client.name.split(' ')[0]}
        </Button>
      </div>

      {showToast && (
        <div className={styles.toast} role="status" aria-live="polite">
          Voice notes coming soon
        </div>
      )}
    </div>
  );
}
