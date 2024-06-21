import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <p>
        Made by Sarto (@sartouhou)
        <br />
        More information on how to make fumos on{" "}
        <a
          href="https://fumo.systems/posts/custom-fumo-making/"
          target="_blank"
        >
          fumo.systems
        </a>
      </p>
    </footer>
  );
}
