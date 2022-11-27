import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { savedMovies } from "../MoviesCard/mock-data";

const SavedMovies = ({ openModal, closeModal, isLoading }) => {
  return (
    <>
      <Header openModal={openModal} closeModal={closeModal} />
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList movies={savedMovies} />}
      <Footer />
    </>
  );
};

export default SavedMovies;
