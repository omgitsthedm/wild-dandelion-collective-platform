import { type ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
} & (
  | ComponentPropsWithoutRef<'button'>
  | ComponentPropsWithoutRef<'a'>
);

export function Button({
  variant = 'primary',
  fullWidth = false,
  href,
  children,
  className,
  ...props
}: ButtonProps & { className?: string }) {
  const classes = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...(props as ComponentPropsWithoutRef<'a'>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  );
}
