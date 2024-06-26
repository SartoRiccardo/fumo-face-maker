import styles from "./content.module.css";
import FaceControls from "./face/FaceControls";
import FaceSelector from "./face/FaceSelector";
import ThreadColorOverview from "./face/ThreadColorOverview";
import Accordion from "./controls/Accordion";
import ButtonSelector from "./controls/ButtonSelector";
import FileButtons from "./controls/FileButtons";

export default function Content() {
  return (
    <div className={styles.container_wrap + " py-sm-2"}>
      <div className={styles.container + " container shadow"}>
        <div className={"row"}>
          <div className={"col"}>
            <FaceSelector></FaceSelector>
            <ThreadColorOverview />
            <FileButtons />
          </div>
          <div className={"col"}>
            <FaceControls />
            <Accordion title="Eyelashes">
              <ButtonSelector multiple />
            </Accordion>
            <Accordion title="Accessories">
              <ButtonSelector />
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
