import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo" />
      <nav className="header__links">
        <Link className="header__link" to="/signup">
          Регистрация
        </Link>
        <Link className="header__link header__button" to="/signin">
          Войти
        </Link>
      </nav>
    </header>
  );
};

export default Header;
