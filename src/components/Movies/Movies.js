import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import beatFilmApi from "../../utils/MoviesApi";
import MoreMovies from "../MoreMovies/MoreMovies";
import { useState } from "react";

function Movies({ loggedIn }) {
  let [movies, setMovies] = useState([]);
  let [moviesContentText, setMoviesContentText] = useState(
    "Введите запрос в поисковую строку, для просмотра результата"
  );

  function findMovie(inputValue) {
    let moviesList;

    moviesList = JSON.parse(localStorage.getItem("beatFilms")).map((film) => {
      if (film.image === null) {
        film.image = { url: "" };
      }
      film.liked = false;
      return film;
    });
    console.log(moviesList);
    setMovies(moviesList);
  }

  function createFilmsList(inputValue) {
    if (!inputValue) {
      setMoviesContentText(
        "Запрос не может быть пустым, введите коректные данные"
      );
      setMovies([]);
      return;
    }

    if (localStorage.getItem("beatFilms") === null) {
      beatFilmApi
        .getMovies()
        .then((value) => {
          localStorage.setItem("beatFilms", JSON.stringify(value));
          findMovie(inputValue);
        })
        .catch((err) => setMoviesContentText(err));
    }

    if (localStorage.getItem("beatFilms") !== null) {
      findMovie(inputValue);
    }
  }

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        setMoviesContentText={setMoviesContentText}
        createFilmsList={createFilmsList}
      />
      {movies.length === 0 ? (
        <p className="movies__content-text">{moviesContentText}</p>
      ) : (
        <MoviesCardList movies={movies} />
      )}
      {movies.length !== 0 && <MoreMovies />}
      <Footer />
    </section>
  );
}

export default Movies;
