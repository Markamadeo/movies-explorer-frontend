import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import beatFilmApi from "../../utils/MoviesApi";
import MoreMovies from "../MoreMovies/MoreMovies";
import { useEffect, useState } from "react";
import movieImageNotFound from "../../images/movie-image-not-found.png";
import useWindowDimensions from "../../utils/WindowDimensions";
import Preloader from "../Preloader/Preloader";

function Movies({ loggedIn, savedMovies, setSavedMovies }) {
  const baseBeatfilmUrl = "https://api.nomoreparties.co";

  const [preloaderActive, setPreloaderActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [foundFilms, setFoundFilms] = useState([]);
  const [moviesListToShow, setMoviesListToShow] = useState([]);
  const [moviesContentText, setMoviesContentText] = useState(
    "Введите запрос в поисковую строку, для просмотра результата"
  );
  const [inputValue, setInputValue] = useState("");
  const [shortFilmFilter, setShortFilmFilter] = useState(false);
  const [showFilmsParams, setShowFilmParams] = useState({
    countMoviesToShow: 12,
    countMoviesToMoreButton: 4,
  });
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    setPreloaderActive(false);
  }, [preloaderActive]);

  useEffect(() => {
    if (windowDimensions.width <= 1280 && windowDimensions.width >= 769) {
      setShowFilmParams({ countMoviesToShow: 12, countMoviesToMoreButton: 4 });
      return;
    }
    if (windowDimensions.width <= 768 && windowDimensions.width >= 424) {
      setShowFilmParams({ countMoviesToShow: 8, countMoviesToMoreButton: 2 });
      return;
    }
    if (windowDimensions.width <= 425) {
      setShowFilmParams({ countMoviesToShow: 5, countMoviesToMoreButton: 2 });
      return;
    }
  }, [windowDimensions]);

  useEffect(() => {
    setMovies(moviesListToShow);
    setPreloaderActive(false);
  }, [moviesListToShow]);

  useEffect(() => {
    let moviesToShow;
    if (foundFilms.length <= showFilmsParams.countMoviesToShow) {
      moviesToShow = foundFilms;
    }
    if (foundFilms.length > showFilmsParams.countMoviesToShow) {
      moviesToShow = foundFilms.slice(0, showFilmsParams.countMoviesToShow);
    }
    setMoviesListToShow(moviesToShow);
  }, [foundFilms, showFilmsParams]);

  useEffect(() => {
    if (shortFilmFilter) {
      const shortFilmList = foundFilms.filter((movieItem) => {
        return movieItem.duration <= 40;
      });

      if (shortFilmList.length === 0) {
        setMovies([]);
        setMoviesContentText("Ничего не найдено");
        return;
      }
      setMovies(shortFilmList);
      return;
    }
    setMovies(moviesListToShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortFilmFilter]);

  function findMovie(inputData) {
    let correctMoviesFullList = [];

    correctMoviesFullList = JSON.parse(localStorage.getItem("beatFilms")).map(
      (film) => {
        const movieItem = {
          country: film.country === null ? "Неопределено" : film.country,
          director: film.director,
          duration: film.duration,
          year: film.year,
          description: film.description,
          image:
            film.image === null
              ? `${movieImageNotFound}`
              : `${baseBeatfilmUrl}${film.image.url}`,
          trailer: film.trailerLink,
          thumbnail:
            film.image === null
              ? `${movieImageNotFound}`
              : `${baseBeatfilmUrl}${film.image.formats.thumbnail.url}`,
          movieId: `${film.id}`,
          nameRU: film.nameRU,
          nameEN: film.nameEN,
          liked: false,
        };
        if (savedMovies) {
          savedMovies.forEach((savedMovie) => {
            if (savedMovie.movieId === film.id.toString()) {
              movieItem.liked = true;
            }
          });
        }
        return movieItem;
      }
    );
    const wasFoundFilms = correctMoviesFullList.filter((movieItem) => {
      return movieItem.nameRU.toLowerCase().includes(inputData.toLowerCase());
    });
    if (wasFoundFilms.length === 0) {
      setMoviesContentText("Ничего не найдено");
    }
    setFoundFilms(wasFoundFilms);
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
        .catch((err) => setMoviesContentText(err))
        .finally(() => {
          setPreloaderActive(false);
        });
    }

    if (localStorage.getItem("beatFilms") !== null) {
      findMovie(inputValue);
    }
  }

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        setPreloaderActive={setPreloaderActive}
        setMoviesContentText={setMoviesContentText}
        createFilmsList={createFilmsList}
        inputValue={inputValue}
        setInputValue={setInputValue}
        shortFilmFilter={shortFilmFilter}
        setShortFilmFilter={setShortFilmFilter}
      />
      {preloaderActive && <Preloader />}
      {movies.length === 0 ? (
        <p className="movies__content-text">{moviesContentText}</p>
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
      )}
      {!(foundFilms.length === moviesListToShow.length) &&
        movies.length >= showFilmsParams.countMoviesToShow && (
          <MoreMovies
            foundFilms={foundFilms}
            moviesListToShow={moviesListToShow}
            setMoviesListToShow={setMoviesListToShow}
            showFilmsParams={showFilmsParams}
          />
        )}
      <Footer />
    </section>
  );
}

export default Movies;
