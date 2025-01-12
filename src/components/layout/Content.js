"use client";
import styles from "./content.module.css";
import FaceControls from "../face/FaceControls";
import FaceSelector from "../face/FaceSelector";
import ThreadColorOverview from "../face/ThreadColorOverview";
import ButtonSelector from "../usercontrols/ButtonSelector";
import FileButtons from "../usercontrols/FileButtons";
import Accordion from "react-bootstrap/Accordion";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { selectFumoFace, setEyelash } from "@/features/fumoFaceSlice";
import Lash1 from "../../../public/images/eyelashes/lash-1.svg";
import Lash2 from "../../../public/images/eyelashes/lash-2.svg";
import Lash3 from "../../../public/images/eyelashes/lash-3.svg";
import Lash4 from "../../../public/images/eyelashes/lash-4.svg";
import Lash5 from "../../../public/images/eyelashes/lash-5.svg";
import Lash6 from "../../../public/images/eyelashes/lash-6.svg";
import Lash7 from "../../../public/images/eyelashes/lash-7.svg";

let LASH_W, LASH_H;
LASH_W = LASH_H = "2rem";

export default function Content({ facePartInfo }) {
  const fumoFace = useAppSelector(selectFumoFace);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container_wrap + " py-sm-2"}>
      <div className={styles.container + " container"}>
        <div className={"row"}>
          <div className={"col-12 col-lg-7 col-xl-6"}>
            <FaceSelector
              facePartCount={facePartInfo.count}
              facePartSvgs={facePartInfo.svg_paths}
            />
            <ThreadColorOverview />
            <FileButtons />
          </div>
          <div className={"col-12 col-lg-5 col-xl-6"}>
            <FaceControls />

            <Accordion className={"my-3 shadow"}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Eyelashes</Accordion.Header>
                <Accordion.Body>
                  <ButtonSelector
                    onChange={(eyelash) => {
                      dispatch(setEyelash({ eyelash }));
                    }}
                    value={fumoFace.eyelash}
                  >
                    <Lash1 width={LASH_W} height={LASH_H} />
                    <Lash2 width={LASH_W} height={LASH_H} />
                    <Lash3 width={LASH_W} height={LASH_H} />
                    <Lash4 width={LASH_W} height={LASH_H} />
                    <Lash5 width={LASH_W} height={LASH_H} />
                    <Lash6 width={LASH_W} height={LASH_H} />
                    <Lash7 width={LASH_W} height={LASH_H} />
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
