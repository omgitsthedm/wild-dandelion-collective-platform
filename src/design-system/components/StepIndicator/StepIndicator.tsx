import styles from './StepIndicator.module.css';

type StepIndicatorProps = {
  number: 1 | 2 | 3;
  title: string;
  description: string;
  className?: string;
};

export function StepIndicator({
  number,
  title,
  description,
  className,
}: StepIndicatorProps) {
  const classes = [styles.step, className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.circle} aria-hidden="true">
        {number}
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
