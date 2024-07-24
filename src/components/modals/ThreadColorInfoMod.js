"use client";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import ThreadColor from "../usercontrols/ThreadColor";
import { selectThreadColors, setEyes } from "@/features/fumoFaceSlice";
import Button from "../usercontrols/Button";
import ColorPickerMod from "./ColorPickerMod";
import { useState } from "react";

export default function ThreadColorInfoMod({ show, onHide }) {
  const threadColors = useAppSelector(selectThreadColors);
  const dispatch = useAppDispatch();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorKey, setColorKey] = useState("inner");
  const [colorIdx, setColorIdx] = useState(0);

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Body>
          <h3 className={" text-center"}>Thread Color Order</h3>
          <p>
            This is the order of the thread colors you should use when
            embroidering the file. This website uses red and blue as the color
            of the eyes as placeholders, but you can{" "}
            <u>
              change them for any color you'd like by clicking on the colored
              squares.
            </u>
          </p>
          <hr />
          {threadColors.map(({ key, idx, color, description }, i) => (
            <div className={"row"} key={i}>
              <div className={"col-auto"}>
                {key && idx !== undefined ? (
                  <ThreadColor
                    color={color}
                    onClick={(_e) => {
                      setColorKey(key);
                      setColorIdx(idx);
                      setShowColorPicker(true);
                    }}
                  />
                ) : (
                  <ThreadColor color={color} />
                )}
              </div>
              <div className={"col"}>
                <div
                  className={"d-flex flex-column justify-content-center h-100"}
                >
                  <p className={"my-0"}>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button className={"primary"} onClick={onHide}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>

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
