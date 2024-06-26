import { createSlice } from "@reduxjs/toolkit";

export const fumoFaceSlice = createSlice({
  name: "fumoFace",
  initialState: {
    eyelashes: 0,
    eyes: 0,
    blush: 0,
    mouth: 0,
    hasBlush: false,
    accessories: [],
  },
  reducers: {
    setCombination: (state, action) => {
      state.eyelashes = action.eyelashes;
      state.eyes = action.eyes;
      state.blush = action.blush;
      state.mouth = action.mouth;
    },
    setBlush: (state, action) => {
      state.hasBlush = action.hasBlush;
    },
    setAccessories: (state, action) => {
      state.accessories = action.accessories;
    },
  },
});

export const { setCombination, setBlush, setAccessories } =
  fumoFaceSlice.actions;
export default fumoFaceSlice.reducer;
