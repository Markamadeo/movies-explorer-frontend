import { useState } from "react";
import { Route, Switch } from "react-router";

function MoviesCard({ dataCard }) {
  const baseBeatfilmUrl = "https://api.nomoreparties.co";
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  function handleDelete() {}

  return (
    <li className="movies-card">
      <a
        className="movies-card__trailer-link"
        href={dataCard.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={`${baseBeatfilmUrl}${dataCard.image.url}`}
          alt={dataCard.nameRU}
        />
      </a>
      <div className="movies-card__discription-items">
        <div className="movie-card__discription-container">
          <p className="movies-card__film-name">{dataCard.nameRU}</p>
          <Switch>
            <Route exact path="/movies">
              <button
                type="button"
                className={
                  liked
                    ? "movies-card__like-button movies-card__like-button_active"
                    : "movies-card__like-button"
                }
                onClick={handleLike}
              />
            </Route>
            <Route exact path="/saved-movies">
              <button
                type="button"
                className="movies-card__delete-button"
                onClick={handleDelete}
              />
            </Route>
          </Switch>
        </div>
        <p className="movies-card__duration">
          {dataCard.duration <= 60
            ? `${dataCard.duration}м`
            : `${Math.floor(dataCard.duration / 60)}ч${
                dataCard.duration % 60
              }м`}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
