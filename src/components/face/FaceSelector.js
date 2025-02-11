"use client";
import cssFaceSelector from "./FaceSelector.module.css";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import {
  setEyebrows,
  setEyes,
  setMouth,
  selectFumoFace,
  selectThreadColors,
} from "@/features/fumoFaceSlice";
import OptionShift from "../usercontrols/OptionShift";
import { atma } from "@/lib/fonts";
import { useState } from "react";
import { useOnUpdate } from "@/utils/hooks";

export default function FaceSelector({ facePartCount, facePartSvgs }) {
  const fumoFace = useAppSelector(selectFumoFace);
  const threadColors = useAppSelector(selectThreadColors);
  const dispatch = useAppDispatch();
  const [touched, setTouched] = useState({
    eyebrows: false,
    eyes: false,
    mouth: false,
  });

  useOnUpdate(() => {
    if (!touched.mouth) setTouched({ ...touched, mouth: true });
  }, [fumoFace.mouth]);

  useOnUpdate(() => {
    if (!touched.eyes) setTouched({ ...touched, eyes: true });
  }, [fumoFace.eyes.chosen]);

  useOnUpdate(() => {
    if (!touched.eyebrows) setTouched({ ...touched, eyebrows: true });
  }, [fumoFace.eyebrows]);

  const mouthSvgParts = facePartSvgs.mouths.find(
    ({ id }) => id === fumoFace.mouth + 1
  ).paths;
  const eyeSvgData = facePartSvgs.eyes.find(
    ({ id }) => id === fumoFace.eyes.chosen[0] + 1
  );
  const leftPupil = eyeSvgData.left.pupils.find(
    ({ id }) => id === fumoFace.pupil + 1
  ).paths;
  const leftEyeClrIdx = fumoFace.hasDifferentEyeOutline
    ? leftPupil.length + (fumoFace.hasHeterochromia && leftPupil.length) + 1
    : -1;

  return (
    <div className="panel shadow face-selector row gx-0 p-relative">
      <div className="col-auto">
        <div className="h-100 py-2 d-flex flex-column justify-content-between">
          <OptionShift
            type="prev"
            options={facePartCount.eyebrows}
            value={fumoFace.eyebrows}
            onChange={(eyebrows) => dispatch(setEyebrows({ eyebrows }))}
          />
          <OptionShift
            type="prev"
            options={facePartCount.eyes}
            value={fumoFace.eyes.chosen[0]}
            onChange={(eyes) => dispatch(setEyes({ chosen: { 0: eyes } }))}
          />
          <OptionShift
            type="prev"
            options={facePartCount.mouths}
            value={fumoFace.mouth}
            onChange={(mouth) => dispatch(setMouth({ mouth }))}
          />
        </div>
      </div>

      <svg
        className={`col ${cssFaceSelector.face}`}
        viewBox="-450 -350 900 650"
      >
        {facePartSvgs.eyebrows
          .find(({ id }) => id === fumoFace.eyebrows + 1)
          .paths.map((points, i) => (
            <path d={points} key={i} stroke="black" />
          ))}

        <path d={eyeSvgData.left.shine} stroke="white" />
        {leftPupil.map((points, i) => (
          <path
            d={points}
            key={i}
            stroke={threadColors[i * (fumoFace.hasHeterochromia ? 2 : 1)].color}
          />
        ))}
        {eyeSvgData.left.eyelashes
          .find(({ id }) => id === fumoFace.eyelash + 1)
          .paths.map((points, i) => (
            <path
              d={points}
              key={i}
              stroke={
                leftEyeClrIdx > 0 ? threadColors[leftEyeClrIdx].color : "black"
              }
            />
          ))}
        <path d={eyeSvgData.left.top} stroke="black" />

        <path d={eyeSvgData.right.shine} stroke="white" />
        {eyeSvgData.right.pupils
          .find(({ id }) => id === fumoFace.pupil + 1)
          .paths.map((points, i) => (
            <path
              d={points}
              key={i}
              stroke={
                threadColors[
                  i * (fumoFace.hasHeterochromia ? 2 : 1) +
                    (fumoFace.hasHeterochromia && 1)
                ].color
              }
            />
          ))}
        {eyeSvgData.right.eyelashes
          .find(({ id }) => id === fumoFace.eyelash + 1)
          .paths.map((points, i) => (
            <path
              d={points}
              key={i}
              stroke={
                leftEyeClrIdx > 0
                  ? threadColors[
                      leftEyeClrIdx + (fumoFace.hasHeterochromia && 1)
                    ].color
                  : "black"
              }
            />
          ))}
        <path d={eyeSvgData.right.top} stroke="black" />

        {mouthSvgParts.map((points, i) => (
          <path
            d={points}
            key={i}
            stroke={
              threadColors[threadColors.length - mouthSvgParts.length + i].color
            }
          />
        ))}
      </svg>

      <div className="col-auto d-flex flex-column justify-content-between">
        <div className="h-100 py-2 d-flex flex-column justify-content-between">
          <OptionShift
            type="next"
            options={facePartCount.eyebrows}
            value={fumoFace.eyebrows}
            onChange={(eyebrows) => dispatch(setEyebrows({ eyebrows }))}
          />
          <OptionShift
            type="next"
            options={facePartCount.eyes}
            value={fumoFace.eyes.chosen[0]}
            onChange={(eyes) => dispatch(setEyes({ chosen: { 0: eyes } }))}
          />
          <OptionShift
            type="next"
            options={facePartCount.mouths}
            value={fumoFace.mouth}
            onChange={(mouth) => dispatch(setMouth({ mouth }))}
          />
        </div>
      </div>

      <div className={cssFaceSelector.label_container}>
        <div className="h-100 py-2 d-flex flex-column justify-content-between">
          <p
            className={`${atma.className} ${cssFaceSelector.counter} ${
              touched.eyebrows ? cssFaceSelector.animated : ""
            } fs-3`}
            key={`eyebrows-${fumoFace.eyebrows}`}
          >
            {fumoFace.eyebrows + 1}/{facePartCount.eyebrows}
          </p>
          <p
            className={`${atma.className} ${cssFaceSelector.counter} ${
              touched.eyes ? cssFaceSelector.animated : ""
            } fs-3`}
            key={`eyes-${fumoFace.eyes.chosen[0]}`}
          >
            {fumoFace.eyes.chosen[0] + 1}/{facePartCount.eyes}
          </p>
          <p
            className={`${atma.className} ${cssFaceSelector.counter} ${
              touched.mouth ? cssFaceSelector.animated : ""
            } fs-3 ${cssFaceSelector.mouth}`}
            key={`mouth-${fumoFace.mouth}`}
          >
            {fumoFace.mouth + 1}/{facePartCount.mouths}
          </p>
        </div>
      </div>
    </div>
  );
}
