"use client";
import Modal from "react-bootstrap/Modal";
import ThreadColor from "../usercontrols/ThreadColor";
import Button from "../usercontrols/Button";
import pesColors from "@/utils/pescolors";

export default function ColorPickerMod({ show, onHide, onSelect }) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Body>
        <h3 className={" text-center"}>Color Picker</h3>
        <p>
          The colors below are the only colors supported by PES v1 files.
          Looking for a different color? Don't bother creating the perfect file.
          Just place the correct thread on your machine!
        </p>
        <hr />
        {pesColors.map((clr) => (
          <ThreadColor
            key={clr}
            color={clr}
            onClick={(_e) => {
              onSelect(clr);
              onHide(_e);
            }}
          />
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
