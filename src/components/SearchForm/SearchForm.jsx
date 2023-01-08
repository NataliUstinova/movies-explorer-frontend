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
  isSaved,
  isFormDisabled,
}) => {
  const { getItem } = useLocalStorage();
  const { values, errors, handleInputChange, setValues } =
    useValidation(".search-form__form");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(values.search);
  }

  useEffect(() => {
    if (!isSaved) {
      const input = getItem("inputQuery");
      setValues({ ...values, search: input });
    }
    if (isSaved) {
      setValues({ ...values, search: "" });
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
          disabled={isFormDisabled}
          value={values.search || ""}
          minLength="1"
          maxLength="200"
          onChange={handleInputChange}
        />
        <button
          className="search-form__button"
          aria-label="найти"
          disabled={isFormDisabled}
        >
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
