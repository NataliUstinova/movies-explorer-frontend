import { useEffect, useState } from "react";

const usePageIdentification = () => {
  const location = window.location.pathname;
  const [isMainPage, setIsMainPage] = useState(true);
  const [isSavedPage, setIsSavedPage] = useState(false);

  useEffect(() => {
    if (location === "/") {
      setIsMainPage(true);
    } else if (location !== "/") {
      setIsMainPage(false);
    }
  }, [location]);

  useEffect(() => {
    if (location === "/saved") {
      setIsSavedPage(true);
    } else if (location !== "/saved") {
      setIsSavedPage(false);
    }
  }, [location]);

  return { isMainPage, isSavedPage };
};

export default usePageIdentification;
