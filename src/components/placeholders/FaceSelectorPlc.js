import styles from "./FaceSelectorPlc.module.css";
import Eyebrow01 from "../../../public/images/eyebrows/eyebrow-1.svg";
import Eye01Lash1 from "../../../public/images/eyes/eye-1-lash1.svg";
import Mouth01 from "../../../public/images/mouths/mouth-1.svg";
import OptionShift from "../usercontrols/OptionShift";

export default function FaceSelectorPlc() {
  return (
    <div className={`${styles.faceSelector} panel shadow`}>
      <OptionShift options={1} onChange={(_) => {}} value={0}>
        <Eyebrow01 width={800 / 2.5} height={110 / 2.5} />
      </OptionShift>
      <OptionShift options={1} onChange={(_) => {}} value={0}>
        <div>
          <Eye01Lash1 width={300 * 1.2} height={100 * 1.2} />
        </div>
      </OptionShift>
      <OptionShift options={1} onChange={(_) => {}} value={0}>
        <Mouth01 width={300 / 2.5} height={100 / 2.5} />
      </OptionShift>
    </div>
  );
}
