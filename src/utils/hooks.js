import { useEffect, useState } from "react";

export const useIsFirstRender = (delay) => {
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setTimeout(() => setFirstRender(false), delay);
  }, []);

  return isFirstRender;
};
