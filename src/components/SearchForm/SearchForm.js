import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const [shortFilm, setShortFilm] = useState(false);
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form name="search-movies" className="search-form movies__section">
      <div className="search-form__find-container">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button
          onClick={handleSubmit}
          type="submit"
          className="search-form__search-button"
        ></button>
      </div>
      <FilterCheckbox shortFilm={shortFilm} setShortFilm={setShortFilm} />
    </form>
  );
}

export default SearchForm;
