import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesApi } from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import { MAX_CARDS } from "../../utils/constants";

const MoviesCardList = ({
  movies,
  serverResponse,
  onLike,
  onDelete,
  savedMovies,
  isSaved,
}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(movies?.slice(0, MAX_CARDS || movies?.length));
  }, [movies]);

  function loadCards() {
    setCards((cards) => [
      ...cards,
      ...movies?.slice(
        cards?.length,
        cards?.length + MAX_CARDS || movies?.length
      ),
    ]);
  }

  return (
    <div className="movies-card-list">
      {cards?.map((card) => (
        <MoviesCard
          savedMovies={savedMovies}
          onDelete={onDelete}
          onLike={onLike}
          movie={card}
          key={card.id || card._id}
          trailerLink={card.trailerLink}
          title={card.nameRU}
          duration={card.duration}
          thumbnail={`${moviesApi._baseUrl}${card.image.url || card.image}`}
        />
      ))}

      {movies?.length === 0 && !isSaved && (
        <>
          <p className="movies-card-list__alert">Ничего не найдено</p>
          {serverResponse && (
            <p className="movies-card-list__alert">{serverResponse}</p>
          )}
        </>
      )}
      {movies?.length === 0 && isSaved && (
        <>
          <p className="movies-card-list__alert">Ничего не сохранено</p>
          {serverResponse && (
            <p className="movies-card-list__alert">{serverResponse}</p>
          )}
        </>
      )}
      {movies?.length > MAX_CARDS && cards?.length !== movies?.length ? (
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
