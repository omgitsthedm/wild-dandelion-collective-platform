import { type ReactNode } from 'react';
import styles from './Card.module.css';

type CardVariant = 'flat' | 'elevated';

type CardProps = {
  variant?: CardVariant;
  href?: string;
  padding?: boolean;
  children: ReactNode;
  className?: string;
};

export function Card({
  variant = 'flat',
  href,
  padding = true,
  children,
  className,
}: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    href ? styles.interactive : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const allClasses = [
    classes,
    padding ? styles.cardInner : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }

  return <div className={allClasses}>{children}</div>;
}
