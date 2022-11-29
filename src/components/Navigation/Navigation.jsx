import React from "react";
import "./Navigation.css";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link smooth to="#AboutProject" className="navigation__link">
        О проекте
      </Link>
      <Link smooth to="#Techs" className="navigation__link">
        Технологии
      </Link>
      <Link smooth to="#AboutMe" className="navigation__link">
        Студент
      </Link>
    </nav>
  );
};

export default Navigation;
