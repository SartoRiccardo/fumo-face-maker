import styles from "./ThreadColor.module.css";

export default function ThreadColor({ color }) {
  return <div className={styles.color} style={{ backgroundColor: color }} />;
}
