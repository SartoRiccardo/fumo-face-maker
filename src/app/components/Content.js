"use client";
import styles from "./content.module.css";
import FaceControls from "./face/FaceControls";
import FaceSelector from "./face/FaceSelector";
import ThreadColorOverview from "./face/ThreadColorOverview";
import ButtonSelector from "./controls/ButtonSelector";
import FileButtons from "./controls/FileButtons";
import Accordion from "react-bootstrap/Accordion";

export default function Content() {
  return (
    <div className={styles.container_wrap + " py-sm-2"}>
      <div className={styles.container + " container"}>
        <div className={"row"}>
          <div className={"col"}>
            <FaceSelector />
            <ThreadColorOverview />
            <FileButtons />
          </div>
          <div className={"col"}>
            <FaceControls />

            <Accordion className={"my-3 shadow"}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Eyelashes</Accordion.Header>
                <Accordion.Body>
                  <ButtonSelector />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* <Accordion className="shadow">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accessories</Accordion.Header>
                <Accordion.Body>
                  <ButtonSelector />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> */}
          </div>
        </div>
      </div>
    </div>
  );
}
