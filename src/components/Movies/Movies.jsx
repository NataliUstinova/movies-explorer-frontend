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
  onToggle,
}) => {
  return (
    <>
      <Header
        openModal={openModal}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
      />
      <main>
        <SearchForm onSearch={onSearch} onToggle={onToggle} />
        {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
