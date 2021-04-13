import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ setMoviesContentText, createFilmsList }) {
  const [shortFilm, setShortFilm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    createFilmsList(inputValue);
  }

  return (
    <form name="search-movies" className="search-form movies__section">
      <div className="search-form__find-container">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          required
        />
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
