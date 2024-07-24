import styles from "./ThreadColor.module.css";

export default function ThreadColor({ color, onClick }) {
  return onClick ? (
    <div
      className={`${styles.changable} ${styles.color}`}
      style={{ backgroundColor: color }}
    />
  ) : (
    <div className={styles.unchangable}>
      <div className={styles.color} style={{ backgroundColor: color }} />
    </div>
  );
}
