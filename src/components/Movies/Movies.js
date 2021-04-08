import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function Movies({ cards }) {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList cards={cards}/>
      <MoreMovies />
      <Footer />
    </section>
  );
}

export default Movies;
