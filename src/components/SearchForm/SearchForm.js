import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const [shortFilm, setShortFilm] = useState(false);
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <section className="movies__section">
      <form name="search-movies" className="search-form">
        <div className="search-form__find-container">
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="search-form__search-button"
          ></button>
        </div>
        <FilterCheckbox shortFilm={shortFilm} setShortFilm={setShortFilm} />
      </form>
    </section>
  );
}

export default SearchForm;
