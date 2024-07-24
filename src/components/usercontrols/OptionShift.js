import styles from "./OptionShift.module.css";
import { onSpacePress } from "@/utils/events";
import { atma } from "@/lib/fonts";
import { useState } from "react";

export default function OptionShift({
  children,
  options,
  onChange,
  value,
  counterPos,
}) {
  const [isFirstRender, setFirstRender] = useState(true);
  const counterPosCls =
    counterPos === "up"
      ? styles.counterUp
      : counterPos === "down"
      ? styles.counterDown
      : "";

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
