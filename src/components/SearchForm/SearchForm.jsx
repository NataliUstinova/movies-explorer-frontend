import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Separator from "../Separator/Separator";

const SearchForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Сабмит формы");
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
        <FilterCheckbox />
        <p className="search-form__filter-text">Короткометражки</p>
      </div>
      <Separator />
    </div>
  );
};

export default SearchForm;
