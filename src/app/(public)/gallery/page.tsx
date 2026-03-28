import type { Metadata } from 'next';
import { SectionHeader } from '@/design-system/components/SectionHeader';
import { GalleryGrid } from '@/design-system/components/GalleryGrid';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gallery',
};

const galleryImages = [
  { src: '/images/hair-work-1.webp', alt: 'Blonde balayage', category: 'Blonde' },
  { src: '/images/hair-work-2.webp', alt: 'Dimensional color', category: 'Color' },
  { src: '/images/hair-work-3.webp', alt: 'Precision cut', category: 'Cutting' },
  { src: '/images/hair-work-4.webp', alt: 'Lived-in highlights', category: 'Blonde' },
  { src: '/images/hair-work-5.webp', alt: 'Rich brunette color', category: 'Color' },
  { src: '/images/hair-work-6.webp', alt: 'Bridal updo', category: 'Bridal' },
  { src: '/images/bridal-1.webp', alt: 'Bridal styling', category: 'Bridal' },
  { src: '/images/bridal-2.webp', alt: 'Wedding day hair', category: 'Bridal' },
  { src: '/images/bridal-wedding.webp', alt: 'Bridal party styling', category: 'Bridal' },
];

const categories = ['Blonde', 'Color', 'Cutting', 'Bridal'];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <SectionHeader eyebrow="Portfolio" title="The Work" />

        <GalleryGrid images={galleryImages} categories={categories} />

        <div className={styles.instagramCta}>
          <p className={styles.instagramText}>Follow along on Instagram</p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramLink}
          >
            @thewilddandelion
          </a>
        </div>
      </div>
    </main>
  );
}
