import { NavLink } from "react-router-dom";
import "./HeaderLinks.css";
import usePageIdentification from "../../hooks/usePageIdentification";

const HeaderLinks = ({ isModalOpen, closeModal, isLoggedIn }) => {
  const { isMainPage } = usePageIdentification();

  return (
    <>
      {isMainPage && !isLoggedIn && (
        <nav className="header-links">
          <NavLink className="header-links__link" to="/signup">
            Регистрация
          </NavLink>
          <NavLink
            className="header-links__link header-links__button"
            to="/signin"
          >
            Войти
          </NavLink>
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
              <NavLink
                className={`header-links__link header-links__link_movies ${
                  isMainPage && "header-links__link_movies-white"
                } ${isModalOpen && "header-link_modal"}`}
                to="/"
                onClick={closeModal}
              >
                Главная
              </NavLink>
            )}
            <NavLink
              activeClassName="header-links__link_movies_active"
              className={`header-links__link header-links__link_movies ${
                isMainPage && "header-links__link_movies-white"
              } ${isModalOpen && "header-link_modal"}`}
              to="/movies"
              onClick={closeModal}
            >
              Фильмы
            </NavLink>
            <NavLink
              activeClassName="header-links__link_movies_active"
              className={`header-links__link header-links__link_movies ${
                isMainPage && "header-links__link_movies-white"
              } ${isModalOpen && "header-link_modal"}`}
              to="/saved"
              onClick={closeModal}
            >
              Сохранённые фильмы
            </NavLink>
          </div>

          <NavLink
            className="header-links__account-button"
            to="/profile"
            onClick={closeModal}
          >
            <p className="header-links__account-button-text">Аккаунт</p>
            <div className="header-links__account-icon" />
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default HeaderLinks;
