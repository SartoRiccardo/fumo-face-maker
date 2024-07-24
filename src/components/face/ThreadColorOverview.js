"use client";
import styles from "./ThreadColorOverview.module.css";
import ThreadColor from "../usercontrols/ThreadColor";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { selectThreadColors, setEyes } from "@/features/fumoFaceSlice";
import { useState } from "react";
import ThreadColorInfo from "../modals/ThreadColorInfoMod";
import { atma } from "@/lib/fonts";
import { onSpacePress } from "@/utils/events";
import ColorPickerMod from "../modals/ColorPickerMod";

export default function ThreadColorOverview() {
  const threadColors = useAppSelector(selectThreadColors);
  const dispatch = useAppDispatch();
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorKey, setColorKey] = useState("inner");
  const [colorIdx, setColorIdx] = useState(0);

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
            {threadColors.map(({ idx, key, color }, i) =>
              idx !== undefined && key ? (
                <ThreadColor
                  key={i}
                  color={color}
                  onClick={(_e) => {
                    setColorKey(key);
                    setColorIdx(idx);
                    setShowColorPicker(true);
                  }}
                />
              ) : (
                <ThreadColor key={i} color={color} />
              )
            )}
          </div>
          <div className={"col-auto"}>
            <div className={"d-flex flex-column justify-content-center h-100"}>
              <p className={"my-0"}>
                <i
                  tabIndex={0}
                  className={styles.info + " bi-info-circle-fill"}
                  onClick={(_e) => setShowInfoModal(true)}
                  onKeyDown={onSpacePress((_e) => setShowInfoModal(true))}
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThreadColorInfo
        show={showInfoModal}
        onHide={(_e) => setShowInfoModal(false)}
      />
      <ColorPickerMod
        show={showColorPicker}
        onHide={(_e) => setShowColorPicker(false)}
        onSelect={(clr) =>
          dispatch(setEyes({ colors: { [colorKey]: { [colorIdx]: clr } } }))
        }
      />
    </>
  );
}
