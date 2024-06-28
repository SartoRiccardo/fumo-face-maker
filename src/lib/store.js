// https://redux.js.org/usage/nextjs
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import fumoFaceReducer from "../features/fumoFaceSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      fumoFace: fumoFaceReducer,
    },
  });
};

export const useAppDispatch = useDispatch; //.withTypes();
export const useAppSelector = useSelector; //.withTypes();
export const useAppStore = useStore; //.withTypes();
