import "./MoviesCard.css";
import { useEffect, useState } from "react";
import usePageIdentification from "../../hooks/usePageIdentification";
import useDuration from "../../hooks/useDuration";

const MoviesCard = ({
  movie,
  title,
  duration,
  thumbnail,
  trailerLink,
  onLike,
  onDelete,
  savedMovies,
}) => {
  const { hours, minutes } = useDuration({ duration });

  const { isSavedPage } = usePageIdentification();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (savedMovies.some((m) => movie.id === m.movieId)) {
      console.log(
        "savedMovies.some(m => movie.id === m.id)",
        savedMovies.some((m) => movie.id === m.id)
      );
      console.log(savedMovies);
      setIsLiked(true);
      console.log("isLiked", isLiked);
    }
  }, [savedMovies]);

  console.log(isLiked);
  function toggleLike() {
    setIsLiked(!isLiked);

    isLiked ? onDelete(movie) : onLike(movie);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__info-container">
        <div className="movies-card__info">
          <a className="movies-card__title" href={trailerLink} target="_blank">
            <p className="movies-card__title">{title}</p>
          </a>
          <p className="movies-card__duration">
            {hours && `${hours}ч `}
            {minutes && `${minutes}м`}
          </p>
        </div>
        {isSavedPage ? (
          <button
            className="movies-card__delete"
            aria-label="удалить"
            onClick={() => onDelete(movie)}
          />
        ) : (
          <button
            aria-label="лайк"
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
    </li>
  );
};

export default MoviesCard;
