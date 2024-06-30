"use client";
import "./FaceSelector.css";
import OptionShift from "../controls/OptionShift";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import {
  setEyebrows,
  setEyes,
  setBlush,
  setMouth,
} from "@/features/fumoFaceSlice";
import Eyebrow01 from "../../../public/images/eyebrows/eyebrow-1.svg";
import Eyebrow02 from "../../../public/images/eyebrows/eyebrow-2.svg";
import Eye01Lash1 from "../../../public/images/eyes/eye-1-lash1.svg";
import Eye01Lash2 from "../../../public/images/eyes/eye-1-lash2.svg";
import Eye02Lash1 from "../../../public/images/eyes/eye-2-lash1.svg";
import Eye02Lash2 from "../../../public/images/eyes/eye-2-lash2.svg";
import Mouth01 from "../../../public/images/mouths/mouth-1.svg";
import Mouth02 from "../../../public/images/mouths/mouth-2.svg";
import Mouth03 from "../../../public/images/mouths/mouth-3.svg";
import Mouth04 from "../../../public/images/mouths/mouth-4.svg";
import Mouth05 from "../../../public/images/mouths/mouth-5.svg";
import Mouth06 from "../../../public/images/mouths/mouth-6.svg";
import Mouth07 from "../../../public/images/mouths/mouth-7.svg";
import Mouth08 from "../../../public/images/mouths/mouth-8.svg";
import Mouth09 from "../../../public/images/mouths/mouth-9.svg";
import Mouth10 from "../../../public/images/mouths/mouth-10.svg";
import Mouth11 from "../../../public/images/mouths/mouth-11.svg";
import Mouth12 from "../../../public/images/mouths/mouth-12.svg";
import Mouth13 from "../../../public/images/mouths/mouth-13.svg";
import Mouth14 from "../../../public/images/mouths/mouth-14.svg";
import Mouth15 from "../../../public/images/mouths/mouth-15.svg";
import Mouth16 from "../../../public/images/mouths/mouth-16.svg";
import Mouth17 from "../../../public/images/mouths/mouth-17.svg";
import Mouth18 from "../../../public/images/mouths/mouth-18.svg";
import Mouth19 from "../../../public/images/mouths/mouth-19.svg";

const [EYEBROW_W, EYEBROW_H] = [800 / 2.5, 70 / 2.5];
const EYEBROWS = [
  <Eyebrow01 width={EYEBROW_W} height={EYEBROW_H} />,
  <Eyebrow02 width={EYEBROW_W} height={EYEBROW_H} />,
];
const [EYE_W, EYE_H] = [300 * 1.2, 100 * 1.2];
const EYES = [
  [
    <Eye01Lash1 width={EYE_W} height={EYE_H} />,
    <Eye01Lash2 width={EYE_W} height={EYE_H} />,
  ],
  [
    <Eye02Lash1 width={EYE_W} height={EYE_H} />,
    <Eye02Lash2 width={EYE_W} height={EYE_H} />,
  ],
];
const BLUSHES = ["a", "b", "c"];
const [MOUTH_W, MOUTH_H] = [300 / 2.5, 100 / 2.5];
const MOUTHS = [
  <Mouth01 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth02 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth03 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth04 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth05 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth06 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth07 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth08 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth09 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth10 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth11 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth12 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth13 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth14 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth15 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth16 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth17 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth18 width={MOUTH_W} height={MOUTH_H} />,
  <Mouth19 width={MOUTH_W} height={MOUTH_H} />,
];

export default function FaceSelector({ faceOptions }) {
  const fumoFace = useAppSelector((state) => state.fumoFace);
  const dispatch = useAppDispatch();

  return (
    <div className={"panel shadow"}>
      <OptionShift
        options={faceOptions.eyebrows}
        onChange={(eyebrows) => dispatch(setEyebrows({ eyebrows }))}
        value={fumoFace.eyebrows}
      >
        {EYEBROWS[fumoFace.eyebrows]}
      </OptionShift>
      <OptionShift
        options={faceOptions.eyes}
        onChange={(eyes) => dispatch(setEyes({ eyes }))}
        value={fumoFace.eyes}
      >
        <div
          className={`eyes ${
            fumoFace.hasHeterochromia ? "heterochromatic" : ""
          } ${fumoFace.hasDifferentEyeOutline ? "diff-outline" : ""}`}
        >
          {EYES[fumoFace.eyes][fumoFace.eyelash]}
        </div>
      </OptionShift>
      {fumoFace.hasBlush && (
        <OptionShift
          options={faceOptions.blushes}
          onChange={(blush) => dispatch(setBlush({ blush }))}
          value={fumoFace.blush}
        >
          Blush {fumoFace.blush}
        </OptionShift>
      )}
      <OptionShift
        options={faceOptions.mouths}
        onChange={(mouth) => dispatch(setMouth({ mouth }))}
        value={fumoFace.mouth}
      >
        {MOUTHS[fumoFace.mouth]}
      </OptionShift>
    </div>
  );
}
