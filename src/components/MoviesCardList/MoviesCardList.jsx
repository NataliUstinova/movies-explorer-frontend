import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";

const MoviesCardList = ({ movies }) => {
  //временные стейты кaрточек
  //TODO сделать логику в app
  const [cards, setCards] = useState(movies.slice(0, 7));

  function loadCards() {
    setCards((cards) => [...cards, ...movies.slice(7, movies.length - 1)]);
  }

  return (
    <>
      <ul className="movies-card-list">
        {cards.map((card) => (
          <MoviesCard
            key={card.id}
            trailerLink={card.trailerLink}
            title={card.nameRU}
            duration={card.duration}
            thumbnail={card.image.formats.thumbnail.url}
          />
        ))}
      </ul>
      {movies.length > 7 && cards.length !== movies.length ? (
        <button
          aria-label="ещё"
          className="movies-card-list__more-button"
          onClick={loadCards}
        >
          Ещё
        </button>
      ) : (
        <div className="movies-card-list__white-space" />
      )}
    </>
  );
};

export default MoviesCardList;
