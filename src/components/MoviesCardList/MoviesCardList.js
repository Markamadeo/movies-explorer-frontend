import cardsList from "../../utils/cardsList";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="movies-card-list movies__section">
      {cardsList.map((dataCard) => {
        return <MoviesCard key={dataCard.id} dataCard={dataCard} />;
      })}
    </ul>
  );
}

export default MoviesCardList;
