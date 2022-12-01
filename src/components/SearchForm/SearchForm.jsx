import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Separator from "../Separator/Separator";
import useValidation from "../../hooks/useValidation";

const SearchForm = ({ onSearch, onToggle }) => {
  const { values, errors, isDisabled, handleInputChange } =
    useValidation(".search-form__form");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", values.search);
    onSearch(values.search);
  }

  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="search-form__input"
          placeholder="Фильмы"
          required
          minLength="1"
          maxLength="200"
          onChange={handleInputChange}
        />
        <button className="search-form__button" aria-label="найти">
          Найти
        </button>
      </form>
      <div className="search-form__filter-container">
        <FilterCheckbox onToggle={onToggle} />
        <p className="search-form__filter-text">Короткометражки</p>
      </div>
      <Separator />
    </div>
  );
};

export default SearchForm;
