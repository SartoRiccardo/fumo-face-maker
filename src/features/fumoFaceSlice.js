import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultEyes = {
  chosen: [0, 0],
  colors: {
    inner: ["red", "blue"],
    outline: ["darkred", "darkblue"],
    gradient: ["magenta", "lightblue"],
  },
};

export const fumoFaceSlice = createSlice({
  name: "fumoFace",
  initialState: {
    eyebrows: 0,
    eyebrow2: 0,
    eyes: { ...defaultEyes },
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
      for (const key of Object.keys(state)) {
        if (key in payload) state[key] = payload[key];
      }
    },
    setEyebrows: (state, { payload }) => {
      state.eyebrows = payload.eyebrows;
    },
    setOtherEyebrow: (state, { payload }) => {
      state.eyebrow2 = payload.eyebrow2;
    },
    setEyes: (state, { payload }) => {
      if ("chosen" in payload) {
        for (const eyeNum of Object.keys(payload.chosen)) {
          state.eyes.chosen[eyeNum] = payload.chosen[eyeNum];
        }
      }
      if ("colors" in payload) {
        if ("inner" in payload.colors) {
          for (const eyeNum of Object.keys(payload.colors.inner)) {
            state.eyes.colors.inner[eyeNum] = payload.colors.inner[eyeNum];
          }
        }
        if ("outline" in payload.colors) {
          for (const eyeNum of Object.keys(payload.colors.outline)) {
            state.eyes.colors.outline[eyeNum] = payload.colors.outline[eyeNum];
          }
        }
        if ("gradient" in payload.colors) {
          for (const eyeNum of Object.keys(payload.colors.gradient)) {
            state.eyes.colors.gradient[eyeNum] =
              payload.colors.gradient[eyeNum];
          }
        }
      }
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
  description: <>The color of the eyebrows and mouth.</>,
};

const threadColorSelector = (fumoFace) => {
  let threadColors = [
    {
      color: "white",
      description: (
        <>The color of the little eye shine on the top left of each eye.</>
      ),
    },
  ];

  if (fumoFace.hasHeterochromia) {
    threadColors.splice(
      0,
      0,
      {
        color: fumoFace.eyes.colors.inner[0],
        description: (
          <>
            The color of the <b>left</b> eye.
          </>
        ),
      },
      {
        color: fumoFace.eyes.colors.inner[1],
        description: (
          <>
            The color of the <b>right</b> eye.
          </>
        ),
      }
    );
  } else {
    threadColors.splice(0, 0, {
      color: fumoFace.eyes.colors.inner[0],
      description: <>The color of the eyes.</>,
    });
  }

  if (fumoFace.hasDifferentEyeOutline) {
    if (fumoFace.hasHeterochromia) {
      threadColors.push(
        {
          color: fumoFace.eyes.colors.outline[0],
          description: (
            <>
              The color of the outline of the <b>left</b> eye.
            </>
          ),
        },
        {
          color: fumoFace.eyes.colors.outline[1],
          description: (
            <>
              The color of the outline of the <b>right</b> eye.
            </>
          ),
        }
      );
    } else {
      threadColors.push({
        color: fumoFace.eyes.colors.outline[0],
        description: <>The color of the outline of the eyes.</>,
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
        description: <>The color of the tongue.</>,
      },
      blackColor
    );
  } else if (fumoFace.mouth === 10) {
    threadColors.push(
      {
        color: "white",
        description: <>The color of the mouth's teeth.</>,
      },
      {
        color: "salmon",
        description: <>The color inside the mouth.</>,
      },
      blackColor
    );
  }

  return threadColors;
};

export const getFaceQuery = (fumoFace) => {
  const { eyebrows, eyes, eyelash, mouth } = fumoFace;
  const params = {
    eb: eyebrows,
    ey: eyes,
    el: eyelash,
    mt: mouth,
  };
  if (fumoFace.hasBlush) params.bl = fumoFace.blush;
  if (fumoFace.hasHeterochromia) params.het = true;
  if (fumoFace.hasDifferentEyeOutline) params.doc = true;
  return new URLSearchParams(params).toString();
};

export const getFaceFromQuery = (query, options) => {
  const face = {};
  face.eyes = { ...defaultEyes };

  if (
    "eb" in query &&
    0 <= parseInt(query.eb) &&
    parseInt(query.eb) < options.eyebrows
  )
    face.eyebrows = parseInt(query.eb);
  if (
    "ey" in query &&
    0 <= parseInt(query.ey) &&
    parseInt(query.ey) < options.eyes
  ) {
    face.eyes.chosen[0] = parseInt(query.ey);
  }
  if (
    "el" in query &&
    0 <= parseInt(query.el) &&
    parseInt(query.el) < options.eyelashes
  )
    face.eyelash = parseInt(query.el);
  if (
    "mt" in query &&
    0 <= parseInt(query.mt) &&
    parseInt(query.mt) < options.mouths
  )
    face.mouth = parseInt(query.mt);
  if (
    "bl" in query &&
    0 <= parseInt(query.bl) &&
    parseInt(query.bl) < options.blushes
  ) {
    face.blush = parseInt(query.bl);
    face.hasBlush = true;
  }
  if ("het" in query && query.het === "true") face.hasHeterochromia = true;
  if ("doc" in query && query.doc === "true")
    face.hasDifferentEyeOutline = true;
  return face;
};

export const selectFumoFace = (state) => state.fumoFace;
export const selectThreadColors = createSelector(
  [selectFumoFace],
  threadColorSelector
);

export const {
  setFace,
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
