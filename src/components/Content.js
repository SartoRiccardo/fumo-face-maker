"use client";
import styles from "./content.module.css";
import FaceControls from "./face/FaceControls";
import FaceSelector from "./face/FaceSelector";
import ThreadColorOverview from "./face/ThreadColorOverview";
import ButtonSelector from "./controls/ButtonSelector";
import FileButtons from "./controls/FileButtons";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import Lash1 from "../../public/images/eyelashes/lash-1.svg";
import Lash2 from "../../public/images/eyelashes/lash-2.svg";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { selectFumoFace, setEyelash } from "@/features/fumoFaceSlice";

let LASH_W, LASH_H;
LASH_W = LASH_H = "2rem";

export default function Content() {
  const fumoFace = useAppSelector(selectFumoFace);
  const dispatch = useAppDispatch();
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
                  <ButtonSelector
                    onChange={(eyelash) => dispatch(setEyelash({ eyelash }))}
                    value={fumoFace.eyelash}
                  >
                    <Lash1 width={LASH_W} height={LASH_H} />
                    <Lash2 width={LASH_W} height={LASH_H} />
                  </ButtonSelector>
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
