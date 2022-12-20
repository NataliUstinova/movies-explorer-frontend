import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const Movies = ({
  openModal,
  closeModal,
  isLoading,
  isLoggedIn,
  movies,
  onSearch,
  isShorts,
  setIsShorts,
  serverResponse,
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
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList serverResponse={serverResponse} movies={movies} />
        )}
      </main>
      <Footer movies={movies} />
    </>
  );
};

export default Movies;
