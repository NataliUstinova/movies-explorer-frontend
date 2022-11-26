import React from "react";
import usePageIdentification from "../../hooks/usePageIdentification";

const Burger = () => {
  const { isMainPage } = usePageIdentification();

  return <div>burger</div>;
};

export default Burger;
