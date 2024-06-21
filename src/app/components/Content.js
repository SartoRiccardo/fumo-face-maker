import styles from "./content.module.css";

export default function Content() {
  return (
    <div className={styles.container_wrap + " py-sm-2"}>
      <div className={styles.container + " container shadow"}>Body</div>
    </div>
  );
}
