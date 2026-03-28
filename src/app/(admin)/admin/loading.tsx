import styles from './loading.module.css';

export default function AdminLoading() {
  return (
    <div className={styles.skeleton} aria-busy="true" aria-label="Loading admin panel">
      <div className={styles.topBar} />
      <div className={styles.grid}>
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
      </div>
    </div>
  );
}
