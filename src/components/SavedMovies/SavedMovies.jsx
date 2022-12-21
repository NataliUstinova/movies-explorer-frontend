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
  onDelete,
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
          <MoviesCardList onLike={onLike} onDelete={onDelete} movies={movies} />
        )}
      </main>
      <Footer movies={movies} />
    </>
  );
};

export default SavedMovies;
