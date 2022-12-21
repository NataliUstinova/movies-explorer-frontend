import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const SavedMovies = ({
  openModal,
  closeModal,
  isLoading,
  isLoggedIn,
  movies,
  onLike,
}) => {
  return (
    <>
      <Header
        openModal={openModal}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
      />
      <main>
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList onLike={onLike} movies={movies} />
        )}
      </main>
      <Footer movies={movies} />
    </>
  );
};

export default SavedMovies;
