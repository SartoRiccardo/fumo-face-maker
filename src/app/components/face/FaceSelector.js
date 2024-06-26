"use client";
import OptionShift from "../controls/OptionShift";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import {
  setEyebrows,
  setEyes,
  setBlush,
  setMouth,
} from "@/features/fumoFaceSlice";

const EYEBROWS = ["a", "b", "c"];
const EYES = ["a", "b", "c"];
const BLUSHES = ["a", "b", "c"];
const MOUTHS = ["a", "b", "c"];

export default function FaceSelector() {
  const fumoFace = useAppSelector((state) => state.fumoFace);
  const dispatch = useAppDispatch();

  return (
    <div className={"panel shadow"}>
      <OptionShift
        options={EYEBROWS.length}
        onChange={(eyebrows) => dispatch(setEyebrows({ eyebrows }))}
        value={fumoFace.eyebrows}
      >
        Eyebrows {fumoFace.eyebrows}
      </OptionShift>
      <OptionShift
        options={EYES.length}
        onChange={(eyes) => dispatch(setEyes({ eyes }))}
        value={fumoFace.eyes}
      >
        Eye {fumoFace.eyes}
      </OptionShift>
      {fumoFace.hasBlush && (
        <OptionShift
          options={BLUSHES.length}
          onChange={(blush) => dispatch(setBlush({ blush }))}
          value={fumoFace.blush}
        >
          Blush {fumoFace.blush}
        </OptionShift>
      )}
      <OptionShift
        options={MOUTHS.length}
        onChange={(mouth) => dispatch(setMouth({ mouth }))}
        value={fumoFace.mouth}
      >
        Mouth {fumoFace.mouth}
      </OptionShift>
    </div>
  );
}
