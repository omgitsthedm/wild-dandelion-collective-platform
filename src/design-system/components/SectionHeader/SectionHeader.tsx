import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  level?: 1 | 2 | 3;
  divider?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  level = 2,
  divider = true,
  className,
}: SectionHeaderProps) {
  const Tag = `h${level}` as const;

  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Tag className={styles.title}>{title}</Tag>
      {divider && <hr className={styles.divider} />}
    </div>
  );
}
