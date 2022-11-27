import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { allMovies } from "../MoviesCard/mock-data";

const Movies = ({ openModal, closeModal, isLoading }) => {
  return (
    <>
      <Header openModal={openModal} closeModal={closeModal} />
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList movies={allMovies} />}
      <Footer />
    </>
  );
};

export default Movies;
