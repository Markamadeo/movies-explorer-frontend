import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ cards, loggedIn }) {
  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList movies={cards} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
