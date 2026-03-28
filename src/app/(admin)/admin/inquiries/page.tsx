'use client';

import { useState } from 'react';
import styles from './page.module.css';

type ConsultStatus = 'new' | 'reviewed' | 'responded' | 'booked';
type RentalStatus = 'new' | 'contacted' | 'touring' | 'approved' | 'declined';

type Consultation = {
  id: string;
  name: string;
  serviceInterest: string;
  date: string;
  email: string;
  status: ConsultStatus;
};

type RentalInquiry = {
  id: string;
  name: string;
  specialty: string;
  date: string;
  email: string;
  status: RentalStatus;
};

/* Placeholder data */
const consultations: Consultation[] = [
  { id: 'con-001', name: 'Rachel Green', serviceInterest: 'Color Correction', date: 'Mar 27, 2026', email: 'rachel@email.com', status: 'new' },
  { id: 'con-002', name: 'Monica Geller', serviceInterest: 'Bridal Package', date: 'Mar 25, 2026', email: 'monica@email.com', status: 'new' },
  { id: 'con-003', name: 'Phoebe Buffay', serviceInterest: 'Extensions', date: 'Mar 22, 2026', email: 'phoebe@email.com', status: 'reviewed' },
  { id: 'con-004', name: 'Amy Santiago', serviceInterest: 'Highlights', date: 'Mar 18, 2026', email: 'amy@email.com', status: 'booked' },
];

const rentalInquiries: RentalInquiry[] = [
  { id: 'ren-001', name: 'Taylor Reed', specialty: 'Esthetician', date: 'Mar 26, 2026', email: 'taylor@email.com', status: 'new' },
  { id: 'ren-002', name: 'Jordan Blake', specialty: 'Nail Technician', date: 'Mar 20, 2026', email: 'jordan@email.com', status: 'contacted' },
  { id: 'ren-003', name: 'Casey Moore', specialty: 'Massage Therapist', date: 'Mar 15, 2026', email: 'casey@email.com', status: 'touring' },
];

const consultBadgeClass: Record<ConsultStatus, string> = {
  new: styles.badgeNew,
  reviewed: styles.badgeReviewed,
  responded: styles.badgeResponded,
  booked: styles.badgeBooked,
};

const rentalBadgeClass: Record<RentalStatus, string> = {
  new: styles.badgeNew,
  contacted: styles.badgeContacted,
  touring: styles.badgeTouring,
  approved: styles.badgeApproved,
  declined: styles.badgeDeclined,
};

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function InquiriesPage() {
  const [activeTab, setActiveTab] = useState<'consultations' | 'rental'>('consultations');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function toggleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Inquiries</h1>

      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${activeTab === 'consultations' ? styles.tabActive : ''}`}
          onClick={() => { setActiveTab('consultations'); setExpandedId(null); }}
        >
          Consultations
        </button>
        <button
          type="button"
          className={`${styles.tab} ${activeTab === 'rental' ? styles.tabActive : ''}`}
          onClick={() => { setActiveTab('rental'); setExpandedId(null); }}
        >
          Rental
        </button>
      </div>

      {activeTab === 'consultations' && (
        <div className={styles.list}>
          {consultations.map((item) => (
            <div
              key={item.id}
              className={styles.inquiryRow}
              onClick={() => toggleExpand(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(item.id); }}
            >
              <div className={styles.inquiryHeader}>
                <div>
                  <p className={styles.inquiryName}>{item.name}</p>
                  <p className={styles.inquiryMeta}>
                    {item.serviceInterest} &middot; {item.date}
                  </p>
                </div>
                <span className={`${styles.badge} ${consultBadgeClass[item.status]}`}>
                  {capitalize(item.status)}
                </span>
              </div>
              {expandedId === item.id && (
                <div className={styles.inquiryDetail}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Email</span>
                    <span className={styles.detailValue}>{item.email}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Service</span>
                    <span className={styles.detailValue}>{item.serviceInterest}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Received</span>
                    <span className={styles.detailValue}>{item.date}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'rental' && (
        <div className={styles.list}>
          {rentalInquiries.map((item) => (
            <div
              key={item.id}
              className={styles.inquiryRow}
              onClick={() => toggleExpand(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(item.id); }}
            >
              <div className={styles.inquiryHeader}>
                <div>
                  <p className={styles.inquiryName}>{item.name}</p>
                  <p className={styles.inquiryMeta}>
                    {item.specialty} &middot; {item.date}
                  </p>
                </div>
                <span className={`${styles.badge} ${rentalBadgeClass[item.status]}`}>
                  {capitalize(item.status)}
                </span>
              </div>
              {expandedId === item.id && (
                <div className={styles.inquiryDetail}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Email</span>
                    <span className={styles.detailValue}>{item.email}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Specialty</span>
                    <span className={styles.detailValue}>{item.specialty}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Received</span>
                    <span className={styles.detailValue}>{item.date}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
