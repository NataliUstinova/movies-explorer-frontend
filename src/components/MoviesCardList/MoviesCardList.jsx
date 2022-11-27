import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../MoviesCard/mock-data";

const MoviesCardList = () => {
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
    </ul>
  );
};

export default MoviesCardList;
