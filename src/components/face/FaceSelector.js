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
import FaceSelectorPlc from "../placeholders/FaceSelectorPlc";
import { getBlushes, getEyebrows, getMouths, getEyes } from "./svgParts";

const EYEBROWS = getEyebrows(800 / 2.5, 110 / 2.5);
const EYES = getEyes(300 * 1.2, 100 * 1.2);
const BLUSHES = getBlushes(100, 100);
const MOUTHS = getMouths(300 / 2.5, 100 / 2.5);

export default function FaceSelector({ faceOptions }) {
  const fumoFace = useAppSelector((state) => state.fumoFace);
  const dispatch = useAppDispatch();
  const isLoading = faceOptions === null;

  return isLoading ? (
    <FaceSelectorPlc />
  ) : (
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
        counterPos={"up"}
      >
        {MOUTHS[fumoFace.mouth]}
      </OptionShift>
    </div>
  );
}
