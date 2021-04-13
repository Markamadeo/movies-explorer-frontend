import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <ul className="movies-card-list movies__section">
      {movies.map((dataFilm) => {
        return <MoviesCard key={dataFilm.id} dataFilm={dataFilm} />;
      })}
    </ul>
  );
}

export default MoviesCardList;
