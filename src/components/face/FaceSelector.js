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
import { useRouter } from "next/navigation";
import { getFaceQuery } from "@/features/fumoFaceSlice";

const EYEBROWS = getEyebrows(800 / 2.5, 110 / 2.5);
const EYES = getEyes(300 * 1.2, 100 * 1.2);
const BLUSHES = getBlushes(100, 100);
const MOUTHS = getMouths(300 / 2.5, 100 / 2.5);

export default function FaceSelector({ faceOptions }) {
  const fumoFace = useAppSelector((state) => state.fumoFace);
  const dispatch = useAppDispatch();
  const isLoading = faceOptions === null;
  const router = useRouter();

  return isLoading ? (
    <FaceSelectorPlc />
  ) : (
    <div className={"panel shadow face-selector"}>
      <OptionShift
        options={faceOptions.eyebrows}
        onChange={(eyebrows) => {
          dispatch(setEyebrows({ eyebrows }));
          window.history.replaceState(
            null,
            document.title,
            `?${getFaceQuery({ ...fumoFace, eyebrows })}`
          );
        }}
        value={fumoFace.eyebrows}
      >
        <div className="eyebrows">{EYEBROWS[fumoFace.eyebrows]}</div>
      </OptionShift>
      <OptionShift
        options={faceOptions.eyes}
        onChange={(eyes) => {
          dispatch(setEyes({ eyes }));
          window.history.replaceState(
            null,
            document.title,
            `?${getFaceQuery({ ...fumoFace, eyes })}`
          );
        }}
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
          onChange={(blush) => {
            dispatch(setBlush({ blush }));
            window.history.replaceState(
              null,
              document.title,
              `?${getFaceQuery({ ...fumoFace, blush })}`
            );
          }}
          value={fumoFace.blush}
        >
          Blush {fumoFace.blush}
        </OptionShift>
      )}
      <OptionShift
        options={faceOptions.mouths}
        onChange={(mouth) => {
          dispatch(setMouth({ mouth }));
          window.history.replaceState(
            null,
            document.title,
            `?${getFaceQuery({ ...fumoFace, mouth })}`
          );
        }}
        value={fumoFace.mouth}
        counterPos={"up"}
      >
        <div className="mouth">{MOUTHS[fumoFace.mouth]}</div>
      </OptionShift>
    </div>
  );
}
