import { useEffect, useState } from "react";

const usePageIdentification = () => {
  const location = window.location.pathname;
  const [isMainPage, setIsMainPage] = useState(true);

  useEffect(() => {
    if (location === "/") {
      setIsMainPage(true);
    } else if (location !== "/") {
      setIsMainPage(false);
    }
  }, [location]);

  return { isMainPage };
};

export default usePageIdentification;
