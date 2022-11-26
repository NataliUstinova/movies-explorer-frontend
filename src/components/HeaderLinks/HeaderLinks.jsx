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
        <nav className="header-links">
          <Link className="header-links__link" to="/signup">
            Регистрация
          </Link>
          <Link
            className="header-links__link header-links__button"
            to="/signin"
          >
            Войти
          </Link>
        </nav>
      )}

      {(!isMainPage || isLoggedIn) && (
        <nav className="header-links header-links_movies">
          <Link
            className={`header-links__link header-links__link_movies ${
              isMainPage && "header-links__link_movies-white"
            }`}
            to="/movies"
          >
            Фильмы
          </Link>
          <Link
            className={`header-links__link header-links__link_movies ${
              isMainPage && "header-links__link_movies-white"
            }`}
            to="/saved"
          >
            Сохранённые фильмы
          </Link>
          <Link className="header-links__account-button" to="/profile">
            <p className="header-links__account-button-text">Аккаунт</p>
            <div className="header-links__account-icon" />
          </Link>
        </nav>
      )}
    </div>
  );
};

export default HeaderLinks;
