import "./Profile.css";
import Header from "../Header/Header";
import Separator from "../Separator/Separator";
import useValidation from "../../hooks/useValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";

const Profile = ({
  openModal,
  closeModal,
  isLoggedIn,
  onUpdateUser,
  onLogout,
  serverResponse,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isDisabled, resetForm, handleInputChange } =
    useValidation(".profile__edit-form");

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  const customValidation =
    !isDisabled ||
    (values.name === currentUser.name && values.email === currentUser.email);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: values.name.trim(), email: values.email.trim() });
  }

  return (
    <>
      <Header
        openModal={openModal}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
      />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__edit-form" onSubmit={handleSubmit}>
          <div className="profile__info-container">
            <div className="profile__info-row">
              <label htmlFor="name" className="profile__info-text">
                Имя
              </label>
              <input
                type="text"
                required
                name="name"
                className="profile__info-text"
                placeholder="Введите имя"
                pattern="[a-zA-Zа-яА-ЯёЁ\\ \\-]{2,40}"
                title="Имя должно быть от 2 до 40 символов и может содержать латиницу, кириллицу, пробел или дефис"
                value={values.name || ""}
                onChange={handleInputChange}
              />
            </div>
            <Separator />
            <div className="profile__info-row">
              <label htmlFor="email" className="profile__info-text">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                minLength="2"
                maxLength="40"
                className="profile__info-text"
                placeholder="Введите email"
                value={values.email || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="profile__text-container">
            <p className="profile__text profile__error-text">{errors.name}</p>
            <p className="profile__text profile__error-text">{errors.email}</p>
            <p className="profile__text">{serverResponse}</p>
            <button
              type="submit"
              aria-label="Редактировать"
              className={`profile__text ${
                customValidation && "profile__text_disabled"
              }`}
            >
              Редактировать
            </button>
            <div
              className="profile__text profile__text_exit"
              onClick={onLogout}
            >
              Выйти из аккаунта
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
