import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({ openModal, closeModal }) => {
  return (
    <div className="movies">
      <Header openModal={openModal} closeModal={closeModal} />
      <SearchForm />
      <MoviesCardList />
    </div>
  );
};

export default Movies;
