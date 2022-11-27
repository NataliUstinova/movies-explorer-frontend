import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const Movies = ({ openModal, closeModal, isLoading }) => {
  return (
    <div className="movies">
      <Header openModal={openModal} closeModal={closeModal} />
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList />}
      <Footer />
    </div>
  );
};

export default Movies;
