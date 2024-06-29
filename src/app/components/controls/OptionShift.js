import styles from "./OptionShift.module.css";
import { onSpacePress } from "@/app/utils/events";

export default function OptionShift({ children, options, onChange, value }) {
  return (
    <div className={"row"}>
      <div
        tabIndex={0}
        className={"col-auto"}
        onClick={(_e) => onChange((value - 1 + options) % options)}
        onKeyDown={onSpacePress((_e) =>
          onChange((value - 1 + options) % options)
        )}
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
        tabIndex={0}
        className={"col-auto"}
        onClick={(_e) => onChange((value + 1) % options)}
        onKeyDown={onSpacePress((_e) => onChange((value + 1) % options))}
      >
        <i className={styles.button + " bi-chevron-right"}></i>
      </div>
    </div>
  );
}
