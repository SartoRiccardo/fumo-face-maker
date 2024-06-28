import { createSelector, createSlice } from "@reduxjs/toolkit";

export const fumoFaceSlice = createSlice({
  name: "fumoFace",
  initialState: {
    eyebrows: 0,
    eyes: 0,
    blush: 0,
    mouth: 0,
    hasBlush: false,
    hasHeterochromia: false,
    hasDifferentEyeOutline: false,
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
    setEyes: (state, { payload }) => {
      state.eyes = payload.eyes;
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
  },
});

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

  threadColors.push({
    color: "black",
    description: (
      <>
        The color of the eyebrows and mouth. <b>You should keep it black.</b>
      </>
    ),
  });

  return threadColors;
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
} = fumoFaceSlice.actions;
export default fumoFaceSlice.reducer;
