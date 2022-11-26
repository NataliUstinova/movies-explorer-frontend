import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const usePageIdentification = () => {
  const location = useLocation();
  const [isMainPage, setIsMainPage] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }
  });

  return { isMainPage };
};

export default usePageIdentification;
