import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({ openModal, closeModal }) => {
  return (
    <div className="movies">
      <Header openModal={openModal} closeModal={closeModal} />
      <SearchForm />
    </div>
  );
};

export default Movies;
