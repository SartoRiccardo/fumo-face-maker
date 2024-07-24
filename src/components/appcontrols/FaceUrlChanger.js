"use client";
import { getFaceQuery, selectFumoFace } from "@/features/fumoFaceSlice";
import { useAppSelector } from "@/lib/store";

let prevValue = "";
export default function FaceUrlChanger() {
  const fumoFace = useAppSelector(selectFumoFace);
  const curQuery = `?${getFaceQuery(fumoFace)}`;
  if (prevValue != curQuery) {
    window.history.replaceState(null, document.title, curQuery);
    prevValue = curQuery;
  }
  return null;
}
