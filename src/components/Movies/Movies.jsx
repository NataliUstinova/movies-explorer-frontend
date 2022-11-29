import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { allMovies } from "../MoviesCard/mock-data";

const Movies = ({ openModal, closeModal, isLoading, isLoggedIn }) => {
  return (
    <>
      <Header
        openModal={openModal}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
      />
      <main>
        <SearchForm />
        {isLoading ? <Preloader /> : <MoviesCardList movies={allMovies} />}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
