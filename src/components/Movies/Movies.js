import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <Footer />
    </section>
  );
}

export default Movies;
