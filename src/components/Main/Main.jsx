import React from "react";
import Promo from "../Promo/Promo";
import Navigation from "../Navigation/Navigation";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

const Main = () => {
  return (
    <main>
      <Promo />
      <Navigation />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
};

export default Main;
