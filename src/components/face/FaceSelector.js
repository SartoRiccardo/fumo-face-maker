"use client";
import OptionShift from "../controls/OptionShift";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import {
  setEyebrows,
  setEyes,
  setBlush,
  setMouth,
} from "@/features/fumoFaceSlice";
import Image from "next/image";

const EYEBROWS = ["a", "b", "c"];
const EYES = ["a", "b", "c"];
const BLUSHES = ["a", "b", "c"];
const MOUTHS = ["a", "b", "c"];

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
        Eyebrows {fumoFace.eyebrows}
      </OptionShift>
      <OptionShift
        options={faceOptions.eyes}
        onChange={(eyes) => dispatch(setEyes({ eyes }))}
        value={fumoFace.eyes}
      >
        Eye {fumoFace.eyes}
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
        Mouth {fumoFace.mouth}
        <Image
          src={`/images/mouths/mouth-${fumoFace.mouth + 1}.svg`}
          width={300}
          height={100}
        />
      </OptionShift>
    </div>
  );
}
