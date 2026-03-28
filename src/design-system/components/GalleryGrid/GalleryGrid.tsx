'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './GalleryGrid.module.css';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
  categories: string[];
  className?: string;
};

export function GalleryGrid({
  images,
  categories,
  className,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const itemRefs = useRef<Map<number, HTMLElement>>(new Map());

  const filtered =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.developed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  const classes = [styles.wrapper, className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.tabs} role="tablist" aria-label="Gallery filter">
        <button
          role="tab"
          aria-selected={activeCategory === 'All'}
          className={[styles.tab, activeCategory === 'All' ? styles.tabActive : '']
            .filter(Boolean)
            .join(' ')}
          onClick={() => setActiveCategory('All')}
          type="button"
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={[
              styles.tab,
              activeCategory === cat ? styles.tabActive : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => setActiveCategory(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid} role="tabpanel">
        {filtered.map((img, i) => (
          <figure
            key={`${img.src}-${i}`}
            ref={(el) => {
              if (el) itemRefs.current.set(i, el);
              else itemRefs.current.delete(i);
            }}
            className={styles.item}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={styles.image}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
