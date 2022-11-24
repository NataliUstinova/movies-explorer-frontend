import React from "react";
import "./Navigation.css";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link smooth to="Main#AboutProject" className="navigation__link">
        О проекте
      </Link>
      <Link smooth to="Main#Techs" className="navigation__link">
        Технологии
      </Link>
      <Link smooth to="Main#AboutMe" className="navigation__link">
        Студент
      </Link>
    </div>
  );
};

export default Navigation;
