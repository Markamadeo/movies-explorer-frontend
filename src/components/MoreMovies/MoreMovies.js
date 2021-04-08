function MoreMovies(props) {
  function handleAddCard() {}

  return (
    <section className="more-movies movies__section">
      <button
        type="button"
        className="more-movies__button"
        onClick={handleAddCard}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoreMovies;
