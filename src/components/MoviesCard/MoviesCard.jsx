import "./MoviesCard.css";
import { useState } from "react";
import usePageIdentification from "../../hooks/usePageIdentification";

const MoviesCard = ({ title, duration, thumbnail, trailerLink }) => {
  const { isSavedPage } = usePageIdentification();
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info-container">
        <div className="movies-card__info">
          <a className="movies-card__title" href={trailerLink} target="_blank">
            <p className="movies-card__title">{title}</p>
          </a>
          <p className="movies-card__duration">{duration}</p>
        </div>
        {isSavedPage ? (
          <div className="movies-card__delete" />
        ) : (
          <div
            className={
              isLiked ? "movies-card__like_active" : "movies-card__like"
            }
            onClick={toggleLike}
          />
        )}
      </div>
      <a className="movies-card__img" href={trailerLink} target="_blank">
        <img src={thumbnail} alt={title} className="movies-card__img" />
      </a>
    </div>
  );
};

export default MoviesCard;
