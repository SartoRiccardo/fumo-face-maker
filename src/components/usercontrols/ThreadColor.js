import { onSpacePress } from "@/utils/events";
import styles from "./ThreadColor.module.css";

export default function ThreadColor({ color, onClick }) {
  return onClick ? (
    <div
      tabIndex={0}
      onKeyDown={onSpacePress((_e) => onClick(_e))}
      onClick={onClick}
      className={`${styles.changable} ${styles.color}`}
      style={{ backgroundColor: color }}
    />
  ) : (
    <div className={styles.unchangable}>
      <div className={styles.color} style={{ backgroundColor: color }} />
    </div>
  );
}
