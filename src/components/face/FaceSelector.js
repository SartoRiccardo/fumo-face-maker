"use client";
import cssFaceSelector from "./FaceSelector.module.css";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import {
  setEyebrows,
  setEyes,
  setBlush,
  setMouth,
  selectFumoFace,
} from "@/features/fumoFaceSlice";
import FaceSelectorPlc from "../placeholders/FaceSelectorPlc";
import OptionShift from "../usercontrols/OptionShift";
import { atma } from "@/lib/fonts";

export default function FaceSelector({ faceOptions }) {
  const fumoFace = useAppSelector(selectFumoFace);
  const dispatch = useAppDispatch();
  const isLoading = faceOptions === null;

  return isLoading ? (
    <FaceSelectorPlc />
  ) : (
    <div className="panel shadow face-selector row gx-0 p-relative">
      <div className="col-auto">
        <div className="h-100 py-2 d-flex flex-column justify-content-between">
          <OptionShift
            type="prev"
            options={faceOptions.eyebrows}
            value={fumoFace.eyebrows}
            onChange={(eyebrows) => dispatch(setEyebrows({ eyebrows }))}
          />
          <OptionShift
            type="prev"
            options={faceOptions.eyes}
            value={fumoFace.eyes.chosen[0]}
            onChange={(eyes) => dispatch(setEyes({ chosen: { 0: eyes } }))}
          />
          <OptionShift
            type="prev"
            options={faceOptions.mouths}
            value={fumoFace.mouth}
            onChange={(mouth) => dispatch(setMouth({ mouth }))}
          />
        </div>
      </div>

      <svg
        className="col"
        viewBox="-50 -50 100 50"
        style={{ border: "1px solid red" }}
      ></svg>

      <div className="col-auto d-flex flex-column justify-content-between">
        <div className="h-100 py-2 d-flex flex-column justify-content-between">
          <OptionShift
            type="next"
            options={faceOptions.eyebrows}
            value={fumoFace.eyebrows}
            onChange={(eyebrows) => dispatch(setEyebrows({ eyebrows }))}
          />
          <OptionShift
            type="next"
            options={faceOptions.eyes}
            value={fumoFace.eyes.chosen[0]}
            onChange={(eyes) => dispatch(setEyes({ chosen: { 0: eyes } }))}
          />
          <OptionShift
            type="next"
            options={faceOptions.mouths}
            value={fumoFace.mouth}
            onChange={(mouth) => dispatch(setMouth({ mouth }))}
          />
        </div>
      </div>

      <div className={cssFaceSelector.label_container}>
        <div className="h-100 py-2 d-flex flex-column justify-content-between">
          <p
            className={`${atma.className} ${cssFaceSelector.counter} fs-3`}
            key={`eyebrows-${fumoFace.eyebrows}`}
          >
            {fumoFace.eyebrows + 1}/{faceOptions.eyebrows}
          </p>
          <p
            className={`${atma.className} ${cssFaceSelector.counter} fs-3`}
            key={`eyes-${fumoFace.eyes.chosen[0]}`}
          >
            {fumoFace.eyes.chosen[0] + 1}/{faceOptions.eyes}
          </p>
          <p
            className={`${atma.className} ${cssFaceSelector.counter} fs-3`}
            key={`mouth-${fumoFace.mouth}`}
          >
            {fumoFace.mouth + 1}/{faceOptions.mouths}
          </p>
        </div>
      </div>
      {/* <OptionShift
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
          style={{
            "--clr-inn0": fumoFace.eyes.colors.inner[0],
            "--clr-inn1": fumoFace.eyes.colors.inner[1],
            "--clr-out0": fumoFace.eyes.colors.outline[0],
            "--clr-out1": fumoFace.eyes.colors.outline[1],
          }}
          className={`eyes ${
            fumoFace.hasHeterochromia ? "heterochromatic" : ""
          } ${fumoFace.hasDifferentEyeOutline ? "diff-outline" : ""}`}
        >
          {EYES[fumoFace.eyes.chosen[0]][fumoFace.eyelash]}
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
      </OptionShift> */}
    </div>
  );
}
