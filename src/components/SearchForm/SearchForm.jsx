import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Separator from "../Separator/Separator";
import useValidation from "../../hooks/useValidation";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const SearchForm = ({
  onSearch,
  isShorts,
  setIsShorts,
  isShortsSaved,
  setIsShortsSaved,
}) => {
  const { getItem } = useLocalStorage();
  const { values, errors, handleInputChange } =
    useValidation(".search-form__form");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", values.search);
    onSearch(values.search);
  }

  useEffect(() => {
    if (getItem("inputQuery")) {
      values.search = getItem("inputQuery");
    }
    if (window.location.pathname === "/saved") {
      values.search = getItem("inputQuerySaved");
    }
  }, []);

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
          isShorts={isShorts}
          setIsShorts={setIsShorts}
          isShortsSaved={isShortsSaved}
          setIsShortsSaved={setIsShortsSaved}
        />
        <p className="search-form__filter-text">Короткометражки</p>
      </div>
      <Separator />
    </div>
  );
};

export default SearchForm;
