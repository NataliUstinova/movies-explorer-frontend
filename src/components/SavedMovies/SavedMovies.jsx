import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({ openModal, closeModal }) => {
  return (
    <div className="saved-movies">
      <Header openModal={openModal} closeModal={closeModal} />
      <SearchForm />
    </div>
  );
};

export default SavedMovies;
