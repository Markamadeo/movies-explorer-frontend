import { useState } from "react";
import { Route, Switch } from "react-router";
import mainApi from "../../utils/MainApi";

function MoviesCard({ dataFilm, savedMovies, setSavedMovies }) {
  const [liked, setLiked] = useState(dataFilm.liked);

  function handleLike() {
    if (!liked) {
      mainApi
        .savedMovie(dataFilm)
        .then((response) => {
          dataFilm.liked = true;
          mainApi.getSavedMovies().then((savedMovies) => {
            setSavedMovies([...savedMovies.data]);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (liked) {
      savedMovies.forEach((savedMovie) => {
        if (savedMovie.movieId === dataFilm.movieId) {
          mainApi
            .deleteMovie(savedMovie._id)
            .then((res) => {
              dataFilm.liked = false;
              mainApi.getSavedMovies().then((savedMovies) => {
                setSavedMovies([...savedMovies.data]);
              });
            })
            .catch((err) => console.log(err));
        }
      });
    }
    setLiked(!liked);
  }

  function handleDelete() {
    savedMovies.forEach((savedMovie) => {
      if (savedMovie.movieId === dataFilm.movieId) {
        mainApi
          .deleteMovie(savedMovie._id)
          .then((res) => {
            dataFilm.liked = false;
            mainApi.getSavedMovies().then((savedMovies) => {
              setSavedMovies([...savedMovies.data]);
            });
          })
          .catch((err) => console.log(err));
      }
    });
  }

  return (
    <li className="movies-card">
      <a
        className="movies-card__trailer-link"
        href={dataFilm.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={`${dataFilm.image}`}
          alt={dataFilm.nameRU}
        />
      </a>
      <div className="movies-card__discription-items">
        <div className="movie-card__discription-container">
          <p className="movies-card__film-name">{dataFilm.nameRU}</p>
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
          {dataFilm.duration <= 60
            ? `${dataFilm.duration}м`
            : `${Math.floor(dataFilm.duration / 60)}ч${
                dataFilm.duration % 60
              }м`}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
