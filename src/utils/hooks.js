import { useEffect, useRef, useState } from "react";

export const useIsFirstRender = (delay) => {
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setTimeout(() => setFirstRender(false), delay);
  }, []);

  return isFirstRender;
};

export const useOnUpdate = (cb, deps) => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!firstRender) cb();
    else setFirstRender(false);
  }, deps);
};
