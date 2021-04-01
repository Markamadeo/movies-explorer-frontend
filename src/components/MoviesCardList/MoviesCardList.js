import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards }) {
  return (
    <ul className="movies-card-list movies__section">
      {cards.map((dataCard) => {
        return <MoviesCard key={dataCard.id} dataCard={dataCard} />;
      })}
    </ul>
  );
}

export default MoviesCardList;
