"use client";
import "./FaceSelector.css";
import OptionShift from "../usercontrols/OptionShift";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import {
  setEyebrows,
  setEyes,
  setBlush,
  setMouth,
  selectFumoFace,
} from "@/features/fumoFaceSlice";
import FaceSelectorPlc from "../placeholders/FaceSelectorPlc";
import { getBlushes, getEyebrows, getMouths, getEyes } from "./svgParts";
import { cloneElement } from "react";

const EYEBROWS = getEyebrows(800 / 2.5, 110 / 2.5);
const EYES = getEyes(300 * 1.2, 100 * 1.2);
const BLUSHES = getBlushes(100, 100);
const MOUTHS = getMouths(300 / 2.5, 100 / 2.5);

export default function FaceSelector({ faceOptions }) {
  const fumoFace = useAppSelector(selectFumoFace);
  const dispatch = useAppDispatch();
  const isLoading = faceOptions === null;

  return isLoading ? (
    <FaceSelectorPlc />
  ) : (
    <div className={"panel shadow face-selector"}>
      <OptionShift
        options={faceOptions.eyebrows}
        onChange={(eyebrows) => {
          dispatch(setEyebrows({ eyebrows }));
        }}
        value={fumoFace.eyebrows}
      >
        <div className="eyebrows">{EYEBROWS[fumoFace.eyebrows]}</div>
      </OptionShift>
      <OptionShift
        options={faceOptions.eyes}
        onChange={(eyes) => {
          dispatch(setEyes({ chosen: { 0: eyes } }));
        }}
        value={fumoFace.eyes.chosen[0]}
      >
        <div
          className={`eyes ${
            fumoFace.hasHeterochromia ? "heterochromatic" : ""
          } ${fumoFace.hasDifferentEyeOutline ? "diff-outline" : ""}`}
        >
          {cloneElement(EYES[fumoFace.eyes.chosen[0]][fumoFace.eyelash], {
            style: { stroke: fumoFace.eyes.colors.inner[0] },
          })}
        </div>
      </OptionShift>
      {fumoFace.hasBlush && (
        <OptionShift
          options={faceOptions.blushes}
          onChange={(blush) => {
            dispatch(setBlush({ blush }));
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
        }}
        value={fumoFace.mouth}
        counterPos={"up"}
      >
        <div className="mouth">{MOUTHS[fumoFace.mouth]}</div>
      </OptionShift>
    </div>
  );
}
