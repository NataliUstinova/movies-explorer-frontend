import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const Movies = ({
  onDelete,
  onLike,
  openModal,
  closeModal,
  isLoading,
  isLoggedIn,
  movies,
  onSearch,
  isShorts,
  setIsShorts,
  serverResponse,
  savedMovies,
  inputQuery,
}) => {
  return (
    <>
      <Header
        openModal={openModal}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
      />
      <main>
        <SearchForm
          onSearch={onSearch}
          isShorts={isShorts}
          setIsShorts={setIsShorts}
          inputQuery={inputQuery}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            serverResponse={serverResponse}
            savedMovies={savedMovies}
            movies={movies}
            onLike={onLike}
            onDelete={onDelete}
          />
        )}
      </main>
      <Footer movies={movies} />
    </>
  );
};

export default Movies;
