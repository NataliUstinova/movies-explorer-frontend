import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesApi } from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const MoviesCardList = ({ movies, serverResponse, onLike }) => {
  const [cards, setCards] = useState([]);
  const { getItem } = useLocalStorage();

  useEffect(() => {
    setCards(movies.slice(0, 7 || movies.length));
  }, [movies]);

  function loadCards() {
    setCards((cards) => [
      ...cards,
      ...movies.slice(cards.length, cards.length + 7 || movies.length),
    ]);
  }

  return (
    <div className="movies-card-list">
      {cards.map((card) => (
        <MoviesCard
          onLike={onLike}
          movie={card}
          key={card.id}
          trailerLink={card.trailerLink}
          title={card.nameRU}
          duration={card.duration}
          thumbnail={`${moviesApi._baseUrl}${card.image.url || card.image}`}
        />
      ))}

      {movies.length === 0 && (
        <>
          <p className="movies-card-list__alert">Ничего не найдено</p>
          {serverResponse && (
            <p className="movies-card-list__alert">{serverResponse}</p>
          )}
        </>
      )}
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
    </div>
  );
};

export default MoviesCardList;
