import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultEyes = {
  chosen: [0, 0],
  colors: {
    inner: ["#ec0000", "#0f75ff"],
    outline: ["#69260d", "#001cdf"],
    gradient: ["#df00b8", "#0097df"],
  },
};

export const fumoFaceSlice = createSlice({
  name: "fumoFace",
  initialState: {
    eyebrows: 0,
    eyebrow2: 0,
    eyes: { ...defaultEyes },
    eyelash: 0,
    blush: 0, // Unused
    mouth: 0,
    pupil: 0,
    hasBlush: false, // Unused
    hasHeterochromia: false,
    hasDifferentEyeOutline: false,
    hasDifferentEyebrows: false, // Unused
    hasDifferentEyes: false, // Unused
    accessories: [], // Unused
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
    setPupil: (state, { payload }) => {
      state.pupil = payload.pupil;
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
    setEyelash: (state, { payload }) => {
      state.eyelash = payload.eyelash;
    },
  },
});

const BLACK = {
  color: "black",
  description: <>The color of the eyebrows and mouth.</>,
};

const threadColorSelector = (fumoFace) => {
  let threadColors = [];

  if (fumoFace.hasHeterochromia) {
    threadColors.push(
      {
        key: "inner",
        idx: 0,
        color: fumoFace.eyes.colors.inner[0],
        description: (
          <>
            The color of the <b>left</b> eye.
          </>
        ),
      },
      {
        key: "inner",
        idx: 1,
        color: fumoFace.eyes.colors.inner[1],
        description: (
          <>
            The color of the <b>right</b> eye.
          </>
        ),
      }
    );
  } else {
    threadColors.push({
      key: "inner",
      idx: 0,
      color: fumoFace.eyes.colors.inner[0],
      description: "The color of the eyes.",
    });
  }

  if (fumoFace.pupil > 0) {
    if (fumoFace.hasHeterochromia) {
      threadColors.push(
        {
          key: "gradient",
          idx: 0,
          color: fumoFace.eyes.colors.gradient[0],
          description: (
            <>
              The color of the gradient of the <b>left</b> eye.
            </>
          ),
        },
        {
          key: "gradient",
          idx: 1,
          color: fumoFace.eyes.colors.gradient[1],
          description: (
            <>
              The color of the gradient of the <b>right</b> eye.
            </>
          ),
        }
      );
    } else {
      threadColors.push({
        key: "gradient",
        idx: 0,
        color: fumoFace.eyes.colors.gradient[0],
        description: "The color of the gradient part of the eyes.",
      });
    }
  }

  threadColors.push({
    color: "white",
    description:
      "The color of the little eye shine on the top left of each eye.",
  });

  if (fumoFace.hasDifferentEyeOutline) {
    if (fumoFace.hasHeterochromia) {
      threadColors.push(
        {
          key: "outline",
          idx: 0,
          color: fumoFace.eyes.colors.outline[0],
          description: (
            <>
              The color of the outline of the <b>left</b> eye.
            </>
          ),
        },
        {
          key: "outline",
          idx: 1,
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
        key: "outline",
        idx: 0,
        color: fumoFace.eyes.colors.outline[0],
        description: "The color of the outline of the eyes.",
      });
    }
  }

  threadColors.push(BLACK);

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
      BLACK
    );
  } else if (fumoFace.mouth === 5) {
    threadColors.push(
      {
        color: "red",
        description: "The color of the tongue.",
      },
      BLACK
    );
  } else if (fumoFace.mouth === 10) {
    threadColors.push(
      {
        color: "white",
        description: "The color of the mouth's teeth.",
      },
      {
        color: "salmon",
        description: "The color inside the mouth.",
      },
      BLACK
    );
  }

  return threadColors;
};

export const getFaceQuery = (fumoFace) => {
  const { eyebrows, eyes, eyelash, mouth, pupil } = fumoFace;
  const params = {
    eb: eyebrows,
    ey: eyes.chosen[0],
    el: eyelash,
    mt: mouth,
    ir: pupil,
  };
  if (fumoFace.hasBlush) params.bl = fumoFace.blush;
  if (fumoFace.hasHeterochromia) {
    params.het = true;
    params.ecl = eyes.colors.inner.join(",");
  } else {
    params.ecl = eyes.colors.inner[0];
  }
  if (fumoFace.hasDifferentEyeOutline) {
    params.doc = true;
    if (fumoFace.hasHeterochromia) params.ocl = eyes.colors.outline.join(",");
    else params.ocl = eyes.colors.outline[0];
  }
  if (fumoFace.pupil > 0) {
    if (fumoFace.hasHeterochromia) params.gcl = eyes.colors.gradient.join(",");
    else params.gcl = eyes.colors.gradient[0];
  }
  return new URLSearchParams(params).toString();
};

export const getFaceFromQuery = (query, options) => {
  const face = {};
  face.eyes = JSON.parse(JSON.stringify(defaultEyes));

  if (0 <= parseInt(query?.eb) && parseInt(query?.eb) < options.eyebrows)
    face.eyebrows = parseInt(query.eb);
  if (0 <= parseInt(query?.ey) && parseInt(query?.ey) < options.eyes)
    face.eyes.chosen[0] = parseInt(query.ey);
  if (0 <= parseInt(query?.el) && parseInt(query?.el) < options.eyelashes)
    face.eyelash = parseInt(query.el);
  if (0 <= parseInt(query?.mt) && parseInt(query?.mt) < options.mouths)
    face.mouth = parseInt(query.mt);
  if (0 <= parseInt(query?.ir) && parseInt(query?.ir) < options.fills)
    face.pupil = parseInt(query.ir);
  if (0 <= parseInt(query?.bl) && parseInt(query?.bl) < options.blushes) {
    face.blush = parseInt(query.bl);
    face.hasBlush = true;
  }
  if ("het" in query && query.het === "true") face.hasHeterochromia = true;
  if ("doc" in query && query.doc === "true")
    face.hasDifferentEyeOutline = true;
  if ("ecl" in query) {
    const eyecols = query.ecl.split(",");
    for (let i = 0; i < Math.min(eyecols.length, 2); i++) {
      face.eyes.colors.inner[i] = eyecols[i];
    }
  }
  if ("ocl" in query) {
    const outcols = query.ocl.split(",");
    for (let i = 0; i < Math.min(outcols.length, 2); i++) {
      face.eyes.colors.outline[i] = outcols[i];
    }
  }
  if ("gcl" in query) {
    const gradientcols = query.gcl.split(",");
    for (let i = 0; i < Math.min(gradientcols.length, 2); i++) {
      face.eyes.colors.gradient[i] = gradientcols[i];
    }
  }
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
  setPupil,
  setHasDifferentEyebrows,
  setHasDifferentEyes,
  setOtherEyebrow,
  setOtherEye,
  setHasHeterochromia,
  setHasDifferentEyeOutline,
  setEyelash,
} = fumoFaceSlice.actions;
export default fumoFaceSlice.reducer;
