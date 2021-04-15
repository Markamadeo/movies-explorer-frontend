import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ loggedIn, savedMovies, setSavedMovies }) {
  const [movies, setMovies] = useState([...savedMovies]);
  const [foundFilms, setFoundFilms] = useState([...savedMovies]);
  const [preloaderActive, setPreloaderActive] = useState(false);
  const [moviesContentText, setMoviesContentText] = useState(
    "Введите запрос в поисковую строку, для просмотра результата"
  );
  const [inputValue, setInputValue] = useState("");
  const [shortFilmFilter, setShortFilmFilter] = useState(false);

  useEffect(() => {
    setMovies(savedMovies);
    setPreloaderActive(false);
  }, [savedMovies]);

  useEffect(() => {
    setPreloaderActive(false);
  }, [preloaderActive]);

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
    setMovies(foundFilms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortFilmFilter]);

  function createFilmsList(inputValue) {
    if (!inputValue) {
      setMoviesContentText(
        "Запрос не может быть пустым, введите коректные данные"
      );
      setMovies([]);
      return;
    }
    findMovie(inputValue);
  }

  function findMovie(inputData) {
    let correctMoviesFullList = [...savedMovies];

    const wasFoundFilms = correctMoviesFullList.filter((movieItem) => {
      return movieItem.nameRU.toLowerCase().includes(inputData.toLowerCase());
    });
    if (wasFoundFilms.length === 0) {
      setMoviesContentText("Ничего не найдено");
    }
    setFoundFilms(wasFoundFilms);
    setMovies(wasFoundFilms);
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
      {preloaderActive === true && <Preloader />}
      {movies.length === 0 ? (
        <p className="movies__content-text">{moviesContentText}</p>
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
      )}
      <Footer />
    </section>
  );
}

export default SavedMovies;
