import { Link } from "react-router-dom";
import "./HeaderLinks.css";
import usePageIdentification from "../../hooks/usePageIdentification";

const HeaderLinks = ({ isModalOpen, closeModal }) => {
  //TODO временная переменная для состояния логина
  const isLoggedIn = true;
  const { isMainPage } = usePageIdentification();

  return (
    <>
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
        <nav
          className={`header-links header-links_movies ${
            isModalOpen && "header-links_modal"
          }`}
        >
          {isModalOpen}
          <div
            className={
              isModalOpen ? "header-links__pages" : "header-links_movies"
            }
          >
            {isModalOpen && (
              <Link
                className={`header-links__link header-links__link_movies ${
                  isMainPage && "header-links__link_movies-white"
                } ${isModalOpen && "header-link_modal"}`}
                to="/"
                onClick={closeModal}
              >
                Главная
              </Link>
            )}
            <Link
              className={`header-links__link header-links__link_movies ${
                isMainPage && "header-links__link_movies-white"
              } ${isModalOpen && "header-link_modal"}`}
              to="/movies"
              onClick={closeModal}
            >
              Фильмы
            </Link>
            <Link
              className={`header-links__link header-links__link_movies ${
                isMainPage && "header-links__link_movies-white"
              } ${isModalOpen && "header-link_modal"}`}
              to="/saved"
              onClick={closeModal}
            >
              Сохранённые фильмы
            </Link>
          </div>

          <Link
            className="header-links__account-button"
            to="/profile"
            onClick={closeModal}
          >
            <p className="header-links__account-button-text">Аккаунт</p>
            <div className="header-links__account-icon" />
          </Link>
        </nav>
      )}
    </>
  );
};

export default HeaderLinks;
