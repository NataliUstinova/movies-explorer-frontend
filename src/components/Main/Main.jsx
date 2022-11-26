import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Navigation from "../Navigation/Navigation";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <main>
      <Header isMainPage={true} />
      <Promo />
      <Navigation />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Main;
