import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreMovies from "../MoreMovies/MoreMovies";

function Movies(props) {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <MoreMovies />
      <Footer />
    </section>
  );
}

export default Movies;
