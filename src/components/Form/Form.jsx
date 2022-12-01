import React from "react";
import "./Form.css";
import Logo from "../Logo/Logo";
import useValidation from "../../hooks/useValidation";
import { Link } from "react-router-dom";

const Form = ({ title, isLoginForm, onLogin, onRegister }) => {
  const { values, errors, isDisabled, handleInputChange } =
    useValidation(".form__form");

  function handleSubmit(e) {
    e.preventDefault();
    {
      isLoginForm
        ? onLogin({
            email: values.email,
            password: values.password,
          })
        : onRegister({
            name: values.name,
            email: values.email,
            password: values.password,
          });
    }
  }

  return (
    <main className="form">
      <Logo />
      <h1 className="form__title">{title}</h1>
      <form className="form__form" onSubmit={handleSubmit}>
        <div className="form__container">
          <div className="form__inputs">
            {!isLoginForm && (
              <div className="form__input-container">
                <label htmlFor="name" className="form__label">
                  Имя
                </label>
                <input
                  className={`form__input ${
                    errors.name && "form__input-error-color"
                  }`}
                  type="text"
                  name="name"
                  required
                  pattern="[a-zA-Zа-яА-ЯёЁ\\ \\-]{2,40}"
                  title="Имя должно быть от 2 до 40 символов и может содержать латиницу, кириллицу, пробел или дефис"
                  placeholder="Введите имя"
                  value={values.name || ""}
                  onChange={handleInputChange}
                />
                <p className="form__input-error-text">{errors.name}</p>
              </div>
            )}

            <div className="form__input-container">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                autoComplete="email"
                required
                minLength="2"
                maxLength="40"
                className={`form__input ${
                  errors.email && "form__input-error-color"
                }`}
                type="email"
                name="email"
                placeholder="Введите email"
                value={values.email || ""}
                onChange={handleInputChange}
              />
              <p className="form__input-error-text">{errors.email}</p>
            </div>

            <div className="form__input-container">
              <label htmlFor="password" className="form__label">
                Пароль
              </label>
              <input
                minLength="5"
                maxLength="40"
                className={`form__input ${
                  errors.password && "form__input-error-color"
                }`}
                type="password"
                name="password"
                autoComplete={isLoginForm ? "current-password" : "new-password"}
                placeholder="Введите пароль"
                //TODO
                value={values.password || ""}
                onChange={handleInputChange}
              />
              <p className="form__input-error-text">{errors.password}</p>
            </div>
          </div>
        </div>

        <div>
          <button
            className={`form__button ${!isDisabled && "form__button_disabled"}`}
            type="submit"
            aria-label={isLoginForm ? "Войти" : "Зарегистрироваться"}
          >
            {isLoginForm ? "Войти" : "Зарегистрироваться"}
          </button>

          {isLoginForm && (
            <div className="form__text-container">
              <p className="form__text">Ещё не зарегистрированы?</p>
              <Link to={"/signup"} className="form__text form__link">
                Регистрация
              </Link>
            </div>
          )}

          {!isLoginForm && (
            <div className="form__text-container">
              <p className="form__text">Уже зарегистрированы?</p>
              <Link to={"/signin"} className="form__text form__link">
                Войти
              </Link>
            </div>
          )}
        </div>
      </form>
    </main>
  );
};

export default Form;
