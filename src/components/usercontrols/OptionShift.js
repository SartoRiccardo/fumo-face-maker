import styles from "./OptionShift.module.css";
import { onSpacePress } from "@/utils/events";

export default function OptionShift({ options, onChange, value, type }) {
  type = type || "prev";

  return (
    <i
      tabIndex={0}
      onClick={(_e) => {
        const newval = (value + (type === "prev" ? -1 : 1) + options) % options;
        onChange(newval);
      }}
      onKeyDown={onSpacePress((_e) =>
        onChange((value - 1 + options) % options)
      )}
      className={`${styles.button} ${
        type === "prev" ? "bi-chevron-left" : "bi-chevron-right"
      }`}
    />
  );

  return (
    <div className={"row"}>
      <div className={"col-auto"}>
        <div className={styles.inner + " d-flex justify-content-center"}>
          <div className={"d-flex justify-content-center flex-column"}>
            <i
              tabIndex={0}
              onClick={(_e) => {
                const newval = (value - 1 + options) % options;
                if (newval != value) setFirstRender(false);
                onChange(newval);
              }}
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
          <p
            className={`${atma.className} ${
              isFirstRender ? "" : styles.counter
            } ${counterPosCls} fs-3`}
            key={value}
          >
            {value + 1}/{options}
          </p>
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
              onClick={(_e) => {
                const newval = (value + 1) % options;
                if (newval != value) setFirstRender(false);
                onChange(newval);
              }}
              onKeyDown={onSpacePress((_e) => onChange((value + 1) % options))}
              className={styles.button + " bi-chevron-right"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
