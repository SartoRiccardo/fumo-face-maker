import { useEffect, useState } from "react";

export const useIsFirstRender = () => {
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  return isFirstRender;
};
