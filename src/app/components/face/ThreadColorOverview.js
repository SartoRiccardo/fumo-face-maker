"use client";
import styles from "./ThreadColorOverview.module.css";
import ThreadColor from "./ThreadColor";
import { useAppSelector } from "@/lib/store";

export default function ThreadColorOverview() {
  const fumoFace = useAppSelector((state) => state.fumoFace);
  let threadColors = [];
  threadColors.push("red");
  if (fumoFace.hasHeterochromia) threadColors.push("blue");
  threadColors.push("white");
  if (fumoFace.hasDifferentEyeOutline) {
    threadColors.push("darkred");
    if (fumoFace.hasHeterochromia) threadColors.push("darkblue");
  }
  threadColors.push("black");

  return (
    <div className={"panel shadow my-3"}>
      <div className={"row"}>
        <div className={"col-auto"}>
          <div className={"d-flex flex-column justify-content-center h-100"}>
            <p className={"my-0"}>Thread Colors</p>
          </div>
        </div>
        <div className={"col"}>
          {threadColors.map((col) => (
            <ThreadColor color={col} />
          ))}
        </div>
        <div className={"col-auto"}>
          <div className={"d-flex flex-column justify-content-center h-100"}>
            <p className={"my-0"}>
              <i
                className={styles.info + " bi-info-circle-fill"}
                onClick={(e) => null}
              ></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
