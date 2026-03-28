'use client';

import { useEffect, useRef } from 'react';
import styles from './PhotoFrame.module.css';

type PhotoFrameVariant = 'default' | 'deckled' | 'inset';

type PhotoFrameProps = {
  src: string;
  alt: string;
  caption?: string;
  variant?: PhotoFrameVariant;
  developing?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

export function PhotoFrame({
  src,
  alt,
  caption,
  variant = 'default',
  developing = true,
  width,
  height,
  className,
}: PhotoFrameProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!developing || !ref.current || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add(styles.developed);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [developing]);

  const classes = [
    styles.frame,
    variant !== 'default' ? styles[variant] : '',
    developing ? styles.developing : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure ref={ref} className={classes}>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
