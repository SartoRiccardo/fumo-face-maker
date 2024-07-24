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
        {Object.keys(pesColors).map((clr) => (
          <ThreadColor
            color={pesColors[clr]}
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
