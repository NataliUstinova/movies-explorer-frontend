import "./Profile.css";
import Header from "../Header/Header";
import Separator from "../Separator/Separator";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";

const Profile = ({ openModal, closeModal, isLoggedIn }) => {
  //TODO user context and edit functions
  const currentUser = {
    name: "Ната",
    email: "nata@mail.ru",
  };

  const { values, errors, isDisabled, handleInputChange } = useValidation({
    form: "editProfile",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Редактирование");
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
                placeholder={currentUser.name}
                pattern="[a-zA-Zа-яА-ЯёЁ\\ \\-]{2,40}"
                title="Имя должно быть от 2 до 40 символов и может содержать латиницу, кириллицу, пробел или дефис"
                value={values.name || currentUser.name}
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
                placeholder={currentUser.email}
                value={values.email || currentUser.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="profile__text-container">
            <p className="profile__text profile__error-text">{errors.name}</p>
            <p className="profile__text profile__error-text">{errors.email}</p>
            <button
              type="submit"
              aria-label="Редактировать"
              className={`profile__text ${
                !isDisabled && "profile__text_disabled"
              }`}
            >
              Редактировать
            </button>
            <Link to="/" className="profile__text profile__text_exit">
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
