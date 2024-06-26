import styles from "./OptionShift.module.css";

export default function OptionShift({ children, options, onChange, value }) {
  return (
    <div className={"row"}>
      <div
        className={"col-auto"}
        onClick={(_e) => onChange((value - 1 + options) % options)}
      >
        <i className={styles.button + " bi-chevron-left"}></i>
      </div>
      <div className={"col"}>
        <div className={styles.inner + " d-flex justify-content-center"}>
          <div className={"d-flex justify-content-center flex-column"}>
            {children}
          </div>
        </div>
      </div>
      <div
        className={"col-auto"}
        onClick={(_e) => onChange((value + 1) % options)}
      >
        <i className={styles.button + " bi-chevron-right"}></i>
      </div>
    </div>
  );
}
