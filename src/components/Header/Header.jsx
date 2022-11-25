import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

const Header = ({ isMainHeader }) => {
  return (
    <header className={`header ${!isMainHeader && "movies-header"}`}>
      <Logo />
      {isMainHeader && (
        <nav className="header__links">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link header__button" to="/signin">
            Войти
          </Link>
        </nav>
      )}
      {!isMainHeader && (
        <nav className="header__links header__links_movies">
          <Link className="header__link header__link_movies" to="/movies">
            Фильмы
          </Link>
          <Link className="header__link header__link_movies" to="/saved">
            Сохранённые фильмы
          </Link>
          <Link className="header__account-button" to="/profile">
            <p className="header__account-button-text">Аккаунт</p>
            <div className="header__account-icon" />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
