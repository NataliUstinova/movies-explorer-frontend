import React from "react";
import "./Form.css";
import Logo from "../Logo/Logo";
import useValidation from "../../hooks/useValidation";
import { Link } from "react-router-dom";

const Form = ({ title, isLoginForm }) => {
  const { values, errors, isDisabled, handleInputChange } = useValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Отправка формы");
    // {
    //   isLoginForm
    //     ? onLogin(values.email, values.password)
    //     : onRegister(values.email, values.password);
    // }
  }

  return (
    <div className="form">
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
                  minLength="2"
                  maxLength="40"
                  placeholder="Введите имя"
                  value={values.name || ""}
                  onChange={handleInputChange}
                />
                <span className={errors.name && "form__input-error-text"}>
                  {errors.name}
                </span>
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
              <span className={errors.email && "form__input-error-text"}>
                {errors.email}
              </span>
            </div>

            <div className="form__input-container">
              <label htmlFor="email" className="form__label">
                Пароль
              </label>
              <input
                minLength="5"
                maxLength="100"
                className={`form__input ${
                  errors.password && "form__input-error-color"
                }`}
                type="password"
                name="password"
                placeholder="Введите пароль"
                value={values.password || ""}
                onChange={handleInputChange}
              />
              <span className={errors.password && "form__input-error-text"}>
                {errors.password}
              </span>
            </div>
          </div>
        </div>

        <div>
          <button
            className={`form__button ${!isDisabled && "form__button_disabled"}`}
            type="submit"
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
    </div>
  );
};

export default Form;
