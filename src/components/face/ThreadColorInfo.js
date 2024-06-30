"use client";
import Modal from "react-bootstrap/Modal";
import { useAppSelector } from "@/lib/store";
import ThreadColor from "./ThreadColor";
import { selectThreadColors } from "@/features/fumoFaceSlice";
import { atma } from "@/lib/fonts";
import Button from "../controls/Button";
import { DropdownButton } from "react-bootstrap";

export default function ThreadColorInfo({ show, onHide }) {
  const threadColors = useAppSelector(selectThreadColors);

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Body>
        <h3 className={" text-center"}>Thread Color Order</h3>
        <p>
          This is the order of the thread colors you should use when
          embroidering the file. This website uses red and blue as the color of
          the eyes as placeholders, but you can change them for any color you'd
          like.
        </p>
        <p>
          Note that{" "}
          <b>the generated file does not have information about thread color</b>
          , so it might look weird on your embroidery machine. As long as you
          put the threads in the correct order you'll be fine.
        </p>
        <hr />
        {threadColors.map(({ color, description }, i) => (
          <div className={"row"} key={i}>
            <div className={"col-auto"}>
              <ThreadColor color={color} />
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
  );
}
