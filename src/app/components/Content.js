"use client";
import styles from "./content.module.css";
import FaceControls from "./face/FaceControls";
import FaceSelector from "./face/FaceSelector";
import ThreadColorOverview from "./face/ThreadColorOverview";
import ButtonSelector from "./controls/ButtonSelector";
import FileButtons from "./controls/FileButtons";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";

export default function Content() {
  const [faceOptions, setFaceOptions] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + "/face/list"
      );
      setFaceOptions(await response.json());
    };
    getData();
  }, []);

  return (
    <div className={styles.container_wrap + " py-sm-2"}>
      <div className={styles.container + " container"}>
        <div className={"row"}>
          <div className={"col"}>
            <FaceSelector faceOptions={faceOptions} />
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
