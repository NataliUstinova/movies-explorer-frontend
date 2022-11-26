import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";

const MoviesHeader = ({ isMainHeader }) => {
  //TODO временная переменная для состояния логина
  const isLoggedIn = true;
  return (
    <div>
      {isMainHeader && !isLoggedIn && (
        <nav className="header__links">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link header__button" to="/signin">
            Войти
          </Link>
        </nav>
      )}

      {(!isMainHeader || isLoggedIn) && (
        <nav className="header__links header__links_movies">
          <Link
            className={`header__link header__link_movies ${
              isMainHeader && "header__link_movies-white"
            }`}
            to="/movies"
          >
            Фильмы
          </Link>
          <Link
            className={`header__link header__link_movies ${
              isMainHeader && "header__link_movies-white"
            }`}
            to="/saved"
          >
            Сохранённые фильмы
          </Link>
          <Link className="header__account-button" to="/profile">
            <p className="header__account-button-text">Аккаунт</p>
            <div className="header__account-icon" />
          </Link>
        </nav>
      )}
    </div>
  );
};

const Header = ({ isMainHeader }) => {
  //TODO временная переменная для состояния логина
  const isLoggedIn = true;
  const mediaQuery = window.matchMedia("(max-width: 768px)").matches;
  const [isSmallScreen, setIsSmallScreen] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  useEffect(() => {
    if (mediaQuery) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [width]);

  return (
    <header className={`header ${!isMainHeader && "movies-header"}`}>
      <Logo />
      {isSmallScreen ? (
        <Burger isMainHeader={isMainHeader} />
      ) : (
        <MoviesHeader isMainHeader={isMainHeader} />
      )}
    </header>
  );
};

export default Header;
