import { createSlice } from "@reduxjs/toolkit";

export const fumoFaceSlice = createSlice({
  name: "fumoFace",
  initialState: {
    eyebrows: 0,
    eyes: 0,
    blush: 0,
    mouth: 0,
    hasBlush: false,
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
  },
});

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
