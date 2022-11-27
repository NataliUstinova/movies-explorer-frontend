import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import mockCards from "../MoviesCard/mock-data";
import { useState } from "react";

const MoviesCardList = () => {
  //временные стейты кврточек
  //TODO сделать логику в app
  const [cards, setCards] = useState(mockCards.slice(0, 7));

  function loadCards() {
    setCards((cards) => [
      ...cards,
      ...mockCards.slice(7, mockCards.length - 1),
    ]);
  }

  return (
    <ul className="movies-card-list">
      {cards.map((card) => (
        <MoviesCard
          key={card.id}
          trailerLink={card.trailerLink}
          title={card.title}
          duration={card.duration}
          thumbnail={card.thumbnail}
        />
      ))}
      {mockCards.length > 7 && cards.length !== mockCards.length && (
        <button className="movies-card-list__more-button" onClick={loadCards}>
          Ещё
        </button>
      )}
    </ul>
  );
};

export default MoviesCardList;
