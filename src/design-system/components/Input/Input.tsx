import { type ComponentPropsWithoutRef, useId } from 'react';
import styles from './Input.module.css';

type InputProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'textarea';
  error?: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export function Input({
  label,
  name,
  type = 'text',
  error,
  required,
  className,
  ...props
}: InputProps) {
  const id = useId();
  const errorId = `${id}-error`;

  const fieldClasses = [
    styles.field,
    error ? styles.hasError : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={fieldClasses}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          className={styles.textarea}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...(props as ComponentPropsWithoutRef<'textarea'>)}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={styles.input}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
      )}
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
