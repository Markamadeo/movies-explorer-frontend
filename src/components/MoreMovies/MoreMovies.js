function MoreMovies({
  foundFilms,
  moviesListToShow,
  setMoviesListToShow,
  showFilmsParams,
}) {
  function handleClick() {
    setMoviesListToShow(
      foundFilms.slice(
        0,
        moviesListToShow.length + showFilmsParams.countMoviesToMoreButton
      )
    );
  }

  return (
    <section className="more-movies movies__section">
      <button
        type="button"
        className="more-movies__button"
        onClick={handleClick}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoreMovies;
