import { Link } from "react-router-dom";
import "./HeaderLinks.css";
import usePageIdentification from "../../hooks/usePageIdentification";

const HeaderLinks = () => {
  //TODO временная переменная для состояния логина
  const isLoggedIn = true;
  const { isMainPage } = usePageIdentification();

  return (
    <div>
      {isMainPage && !isLoggedIn && (
        <nav className="header__links">
          <Link className="header__link" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link header__button" to="/signin">
            Войти
          </Link>
        </nav>
      )}

      {(!isMainPage || isLoggedIn) && (
        <nav className="header__links header__links_movies">
          <Link
            className={`header__link header__link_movies ${
              isMainPage && "header__link_movies-white"
            }`}
            to="/movies"
          >
            Фильмы
          </Link>
          <Link
            className={`header__link header__link_movies ${
              isMainPage && "header__link_movies-white"
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

export default HeaderLinks;
