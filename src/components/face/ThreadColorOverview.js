"use client";
import styles from "./ThreadColorOverview.module.css";
import ThreadColor from "./ThreadColor";
import { useAppSelector } from "@/lib/store";
import { selectThreadColors } from "@/features/fumoFaceSlice";
import { useState } from "react";
import ThreadColorInfo from "./ThreadColorInfo";
import { atma } from "@/lib/fonts";
import { onSpacePress } from "@/utils/events";

export default function ThreadColorOverview() {
  const threadColors = useAppSelector(selectThreadColors);
  console.log(threadColors);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={"panel shadow my-3"}>
        <div className={"row"}>
          <div className={"col-auto"}>
            <div className={"d-flex flex-column justify-content-center h-100"}>
              <p className={atma.className + " my-0"}>Thread Colors</p>
            </div>
          </div>
          <div className={"col"}>
            {threadColors.map(({ color }, i) => (
              <ThreadColor key={i} color={color} />
            ))}
          </div>
          <div className={"col-auto"}>
            <div className={"d-flex flex-column justify-content-center h-100"}>
              <p className={"my-0"}>
                <i
                  tabIndex={0}
                  className={styles.info + " bi-info-circle-fill"}
                  onClick={(_e) => setShowModal(true)}
                  onKeyDown={onSpacePress((_e) => setShowModal(true))}
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThreadColorInfo show={showModal} onHide={(_e) => setShowModal(false)} />
    </>
  );
}
