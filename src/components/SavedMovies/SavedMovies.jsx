import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { savedMovies } from "../MoviesCard/mock-data";

const SavedMovies = ({ openModal, closeModal, isLoading, isLoggedIn }) => {
  return (
    <>
      <Header
        openModal={openModal}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
      />
      <main>
        <SearchForm />
        {isLoading ? <Preloader /> : <MoviesCardList movies={savedMovies} />}
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
