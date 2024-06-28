import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <p>
        Made by{" "}
        <a href="https://www.instagram.com/sartouhou/" target="_blank">
          @sartouhou
        </a>{" "}
        <i className="bi-instagram"></i> <i className="bi-twitter-x"></i>
        <br />
        More resources on how to make fumos on{" "}
        <a
          href="https://fumo.systems/posts/custom-fumo-making/"
          target="_blank"
        >
          fumo.systems
        </a>{" "}
        and the{" "}
        <a href="https://discord.com/invite/fumofumo" target="_blank">
          Fumo Discord
        </a>
        .
      </p>
    </footer>
  );
}
