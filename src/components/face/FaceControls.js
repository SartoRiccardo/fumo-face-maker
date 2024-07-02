"use client";
import OptionCheckbox from "../controls/OptionCheckbox";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import {
  setHasBlush,
  setHasDifferentEyeOutline,
  setHasDifferentEyes,
  setHasHeterochromia,
  setHasDifferentEyebrows,
  selectFumoFace,
} from "@/features/fumoFaceSlice";
import { getFaceQuery } from "@/features/fumoFaceSlice";
import { useRouter } from "next/navigation";

export default function FaceControls() {
  const fumoFace = useAppSelector(selectFumoFace);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className={"panel shadow"}>
      <h3 className={"fs-2 text-center"}>Options</h3>
      <hr />
      {/* <OptionCheckbox
        value={fumoFace.hasBlush}
        onChange={(hasBlush) => dispatch(setHasBlush({ hasBlush }))}
      >
        <p>Blush</p>
      </OptionCheckbox> */}
      {/* <OptionCheckbox
        value={fumoFace.hasDifferentEyebrows}
        onChange={(hasDifferentEyebrows) =>
          dispatch(setHasDifferentEyebrows({ hasDifferentEyebrows }))
        }
      >
        <p>Different Eyebrows</p>
      </OptionCheckbox> */}
      {/* <OptionCheckbox
        value={fumoFace.hasDifferentEyes}
        onChange={(hasDifferentEyes) =>
          dispatch(setHasDifferentEyes({ hasDifferentEyes }))
        }
      >
        <p>Different Eyes</p>
      </OptionCheckbox> */}
      <h3 className={"fs-5 text-center"}>Eye Color Options</h3>
      <hr />
      <OptionCheckbox
        value={fumoFace.hasHeterochromia}
        onChange={(hasHeterochromia) => {
          dispatch(setHasHeterochromia({ hasHeterochromia }));
          // router.push(`?${getFaceQuery({ ...fumoFace, hasHeterochromia })}`, {
          //   scroll: false,
          //   shallow: true,
          // });
        }}
      >
        <p>Heterochromia</p>
      </OptionCheckbox>
      <OptionCheckbox
        value={fumoFace.hasDifferentEyeOutline}
        onChange={(hasDifferentEyeOutline) => {
          dispatch(setHasDifferentEyeOutline({ hasDifferentEyeOutline }));
          // router.push(
          //   `?${getFaceQuery({ ...fumoFace, hasDifferentEyeOutline })}`,
          //   {
          //     scroll: false,
          //     shallow: true,
          //   }
          // );
        }}
      >
        <p>Different Eye Outline Color</p>
      </OptionCheckbox>
      {/* <OptionOnOff onChange={(hasGradient) => dispatch(setHasGradient({hasGradient}))}>
        <p>Gradient Eyes</p>
      </OptionOnOff> */}
    </div>
  );
}
