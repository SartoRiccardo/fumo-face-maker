"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../lib/store";
import { setFace } from "@/features/fumoFaceSlice";

export default function StoreProvider({ children, initialState }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    if (initialState) {
      if ("fumoFace" in initialState)
        storeRef.current.dispatch(setFace(initialState.fumoFace));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
