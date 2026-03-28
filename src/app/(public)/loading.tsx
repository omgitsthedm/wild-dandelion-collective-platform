import styles from './loading.module.css';

export default function PublicLoading() {
  return (
    <div className={styles.skeleton} aria-busy="true" aria-label="Loading page">
      <div className={styles.container}>
        <div className={`${styles.block} ${styles.heroBlock}`} />
        <div className={`${styles.block} ${styles.subtitleBlock}`} />
        <div className={`${styles.block} ${styles.ctaBlock}`} />
        <div className={`${styles.block} ${styles.imageBlock}`} />
      </div>
    </div>
  );
}
