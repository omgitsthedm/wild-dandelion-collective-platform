'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import styles from './Accordion.module.css';

type AccordionProps = {
  question: string;
  answer: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export function Accordion({
  question,
  answer,
  defaultOpen = false,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
      const timeout = setTimeout(() => setHeight(undefined), 300);
      return () => clearTimeout(timeout);
    } else {
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setHeight(0);
        });
      });
    }
  }, [isOpen]);

  const classes = [styles.accordion, className ?? ''].filter(Boolean).join(' ');
  const panelId = `accordion-panel-${question.replace(/\s+/g, '-').toLowerCase()}`;
  const buttonId = `accordion-btn-${question.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={classes}>
      <button
        id={buttonId}
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        type="button"
      >
        <span className={styles.question}>{question}</span>
        <span
          className={[styles.icon, isOpen ? styles.iconOpen : '']
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={styles.panel}
        style={{
          height: height !== undefined ? `${height}px` : 'auto',
        }}
      >
        <div ref={contentRef} className={styles.content}>
          {answer}
        </div>
      </div>
    </div>
  );
}
