import React, { useContext } from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Navigation from "../Navigation/Navigation";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Main = ({ openModal, closeModal, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Header
        isMainPage={true}
        openModal={openModal}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
      />
      <main>
        <Promo />
        <Navigation />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
