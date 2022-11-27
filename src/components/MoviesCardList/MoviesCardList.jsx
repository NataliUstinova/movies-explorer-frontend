import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  return (
    <ul className="movies-card-list">
      <li>
        <MoviesCard />
      </li>
    </ul>
  );
};

export default MoviesCardList;
