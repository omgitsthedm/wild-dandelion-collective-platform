import styles from './TimeSlot.module.css';

type TimeSlotProps = {
  time: string;
  available: boolean;
  selected: boolean;
  spotsLeft?: number;
  duration?: string;
  onClick?: () => void;
};

export function TimeSlot({
  time,
  available,
  selected,
  spotsLeft,
  duration,
  onClick,
}: TimeSlotProps) {
  const classes = [
    styles.slot,
    available ? styles.available : styles.unavailable,
    selected ? styles.selected : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={!available}
      type="button"
      aria-pressed={selected}
      aria-label={`${time}${duration ? `, ${duration}` : ''}${!available ? ', unavailable' : ''}`}
    >
      <span className={styles.time}>{time}</span>
      {duration && <span className={styles.duration}>{duration}</span>}
      {available && spotsLeft !== undefined && spotsLeft <= 3 && (
        <span className={styles.spots}>
          {spotsLeft} {spotsLeft === 1 ? 'spot' : 'spots'} left
        </span>
      )}
    </button>
  );
}
