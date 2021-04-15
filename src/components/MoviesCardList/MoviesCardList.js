import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, savedMovies, setSavedMovies }) {
  return (
    <ul className="movies-card-list movies__section">
      {movies.map((dataFilm) => {
        return (
          <MoviesCard
            key={dataFilm.movieId}
            dataFilm={dataFilm}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
