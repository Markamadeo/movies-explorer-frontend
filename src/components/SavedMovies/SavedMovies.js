import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ cards }) {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList cards={cards} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
