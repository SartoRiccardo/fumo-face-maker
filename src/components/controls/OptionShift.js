import styles from "./OptionShift.module.css";
import { onSpacePress } from "@/utils/events";

export default function OptionShift({ children, options, onChange, value }) {
  return (
    <div className={"row"}>
      <div className={"col-auto"}>
        <div className={styles.inner + " d-flex justify-content-center"}>
          <div className={"d-flex justify-content-center flex-column"}>
            <i
              tabIndex={0}
              onClick={(_e) => onChange((value - 1 + options) % options)}
              onKeyDown={onSpacePress((_e) =>
                onChange((value - 1 + options) % options)
              )}
              className={styles.button + " bi-chevron-left"}
            />
          </div>
        </div>
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
        onKeyDown={onSpacePress((_e) => onChange((value + 1) % options))}
      >
        <div className={styles.inner + " d-flex justify-content-center"}>
          <div className={"d-flex justify-content-center flex-column"}>
            <i
              tabIndex={0}
              onClick={(_e) => onChange((value + 1) % options)}
              onKeyDown={onSpacePress((_e) => onChange((value + 1) % options))}
              className={styles.button + " bi-chevron-right"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
