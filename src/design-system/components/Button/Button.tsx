import { type ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'accent';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  children: React.ReactNode;
} & (
  | ComponentPropsWithoutRef<'button'>
  | ComponentPropsWithoutRef<'a'>
);

export function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  href,
  children,
  className,
  ...props
}: ButtonProps & { className?: string }) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        {...(props as ComponentPropsWithoutRef<'a'>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      {...(props as ComponentPropsWithoutRef<'button'>)}
    >
      {children}
    </button>
  );
}
