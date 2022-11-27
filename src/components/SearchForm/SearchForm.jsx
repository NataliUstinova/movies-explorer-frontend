import React, { useState } from "react";
import "./SearchForm.css";
import Separator from "../Separator/Separator";

const SearchForm = () => {
  const [isOn, setIsOn] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Сабмит формы");
  }

  function toggle() {
    setIsOn(!isOn);
  }

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильмы"
        />
        <button className="search-form__button">Найти</button>
      </form>
      <div className="search-form__filter-container">
        <div
          className={
            isOn ? "search-form__toggle_on" : "search-form__toggle_off"
          }
          onClick={toggle}
        />
        <p className="search-form__filter-text">Короткометражки</p>
      </div>
      <Separator />
    </div>
  );
};

export default SearchForm;
