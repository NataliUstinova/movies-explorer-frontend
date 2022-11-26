import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const mediaQuery = window.matchMedia("(max-width: 768px)").matches;
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  useEffect(() => {
    if (mediaQuery) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [width]);

  return { isSmallScreen };
};

export default useMediaQuery;
