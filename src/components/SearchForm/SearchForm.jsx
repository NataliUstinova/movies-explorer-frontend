import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Separator from "../Separator/Separator";
import useValidation from "../../hooks/useValidation";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SearchForm = ({ onSearch, onToggle, isShorts, setIsShorts }) => {
  const currentUser = useContext(CurrentUserContext);
  const { setItem, getItem } = useLocalStorage();
  const { values, errors, handleInputChange } =
    useValidation(".search-form__form");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", values.search);
    onSearch(values.search);
  }

  // useEffect(() => {
  //   if (window.location.pathname === "/movies" && getItem("inputQuery")) {
  //     values.search = getItem("inputQuery");
  //   }
  // }, [currentUser]);

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="search-form__input"
          placeholder="Фильмы"
          required
          value={values.search || ""}
          minLength="1"
          maxLength="200"
          onChange={handleInputChange}
        />
        <button className="search-form__button" aria-label="найти">
          Найти
        </button>
        <p className="search-form__error">{errors.search}</p>
      </form>
      <div className="search-form__filter-container">
        <FilterCheckbox
          onToggle={onToggle}
          isShorts={isShorts}
          setIsShorts={setIsShorts}
        />
        <p className="search-form__filter-text">Короткометражки</p>
      </div>
      <Separator />
    </div>
  );
};

export default SearchForm;
