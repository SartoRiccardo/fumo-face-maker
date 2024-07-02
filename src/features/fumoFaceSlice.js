import { createSelector, createSlice } from "@reduxjs/toolkit";

export const fumoFaceSlice = createSlice({
  name: "fumoFace",
  initialState: {
    eyebrows: 0,
    eyebrow2: 0,
    eyes: 0,
    eye2: 0,
    eyelash: 0,
    blush: 0,
    mouth: 0,
    hasBlush: false,
    hasHeterochromia: false,
    hasDifferentEyeOutline: false,
    // hasGradient: false,
    hasDifferentEyebrows: false,
    hasDifferentEyes: false,
    accessories: [],
  },
  reducers: {
    setFace: (state, { payload }) => {
      if (eyebrows in payload) state.eyebrows = payload.eyebrows;
      if (eyes in payload) state.eyes = payload.eyes;
      if (blush in payload) state.blush = payload.blush;
      if (mouth in payload) state.mouth = payload.mouth;
    },
    setEyebrows: (state, { payload }) => {
      state.eyebrows = payload.eyebrows;
    },
    setOtherEyebrow: (state, { payload }) => {
      state.eyebrow2 = payload.eyebrow2;
    },
    setEyes: (state, { payload }) => {
      state.eyes = payload.eyes;
    },
    setOtherEye: (state, { payload }) => {
      state.eye2 = payload.eye2;
    },
    setBlush: (state, { payload }) => {
      state.blush = payload.blush;
    },
    setMouth: (state, { payload }) => {
      state.mouth = payload.mouth;
    },
    setHasBlush: (state, { payload }) => {
      state.hasBlush = payload.hasBlush;
    },
    setAccessories: (state, { payload }) => {
      state.accessories = payload.accessories;
    },
    setHasHeterochromia: (state, { payload }) => {
      state.hasHeterochromia = payload.hasHeterochromia;
    },
    setHasDifferentEyeOutline: (state, { payload }) => {
      state.hasDifferentEyeOutline = payload.hasDifferentEyeOutline;
    },
    setHasDifferentEyebrows: (state, { payload }) => {
      state.hasDifferentEyebrows = payload.hasDifferentEyebrows;
    },
    setHasDifferentEyes: (state, { payload }) => {
      state.hasDifferentEyes = payload.hasDifferentEyes;
    },
    setHasGradient: (state, { payload }) => {
      state.hasGradient = payload.hasGradient;
    },
    setEyelash: (state, { payload }) => {
      state.eyelash = payload.eyelash;
    },
  },
});

const blackColor = {
  color: "black",
  description: (
    <>
      The color of the eyebrows and mouth. <b>You should keep it black.</b>
    </>
  ),
};

const threadColorSelector = (fumoFace) => {
  let threadColors = [
    {
      color: "white",
      description: (
        <>
          The color of the little eye shine on the top left of each eye.{" "}
          <b>You should keep it white.</b>
        </>
      ),
    },
  ];

  if (fumoFace.hasHeterochromia) {
    threadColors.splice(
      0,
      0,
      {
        color: "red",
        description: (
          <>
            The color of the <b>left</b> eye. Can be any color you want.
          </>
        ),
      },
      {
        color: "blue",
        description: (
          <>
            The color of the <b>right</b> eye. Can be any color you want.
          </>
        ),
      }
    );
  } else {
    threadColors.splice(0, 0, {
      color: "red",
      description: <>The color of the eyes. Can be any color you want.</>,
    });
  }

  if (fumoFace.hasDifferentEyeOutline) {
    if (fumoFace.hasHeterochromia) {
      threadColors.push(
        {
          color: "darkred",
          description: (
            <>
              The color of the outline of the <b>left</b> eye. Can be any color
              you want.
            </>
          ),
        },
        {
          color: "darkblue",
          description: (
            <>
              The color of the outline of the <b>right</b> eye. Can be any color
              you want.
            </>
          ),
        }
      );
    } else {
      threadColors.push({
        color: "darkred",
        description: (
          <>The color of the outline of the eyes. Can be any color you want.</>
        ),
      });
    }
  }

  threadColors.push(blackColor);

  // Special multi-color mouths
  if (fumoFace.mouth === 3) {
    threadColors.push(
      {
        color: "white",
        description: (
          <>
            The color of the mouth's teeth. <b>You should keep it white.</b>
          </>
        ),
      },
      blackColor
    );
  } else if (fumoFace.mouth === 5) {
    threadColors.push(
      {
        color: "red",
        description: (
          <>
            The color of the tongue. <b>You should keep it a reddish color.</b>
          </>
        ),
      },
      blackColor
    );
  } else if (fumoFace.mouth === 10) {
    threadColors.push(
      {
        color: "white",
        description: (
          <>
            The color of the mouth's teeth. <b>You should keep it white.</b>
          </>
        ),
      },
      {
        color: "salmon",
        description: (
          <>
            The color inside the mouth. <b>You should keep a pinkish color.</b>
          </>
        ),
      },
      blackColor
    );
  }

  return threadColors;
};

export const getFaceQuery = (fumoFace) => {
  const { eyebrows, eyes, eyelash, mouth } = fumoFace;
  return new URLSearchParams({
    eyebrows,
    eyes,
    eyelash,
    mouth,
    het: fumoFace.hasHeterochromia,
    doc: fumoFace.hasDifferentEyeOutline,
  }).toString();
};

export const selectFumoFace = (state) => state.fumoFace;
export const selectThreadColors = createSelector(
  [selectFumoFace],
  threadColorSelector
);

export const {
  setCombination,
  setHasBlush,
  setAccessories,
  setEyebrows,
  setEyes,
  setBlush,
  setMouth,
  setHasDifferentEyebrows,
  setHasDifferentEyes,
  setOtherEyebrow,
  setOtherEye,
  setHasHeterochromia,
  setHasDifferentEyeOutline,
  // setHasGradient,
  setEyelash,
} = fumoFaceSlice.actions;
export default fumoFaceSlice.reducer;
