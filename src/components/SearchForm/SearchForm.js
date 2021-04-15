import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  setPreloaderActive,
  createFilmsList,
  inputValue,
  setInputValue,
  shortFilmFilter,
  setShortFilmFilter,
}) {
  const [filterChecked, setFilterChecked] = useState(false);

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    createFilmsList(inputValue);
    setFilterChecked(false);
    setShortFilmFilter(false);
    setPreloaderActive(true);
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
      <FilterCheckbox
        filterChecked={filterChecked}
        setFilterChecked={setFilterChecked}
        shortFilmFilter={shortFilmFilter}
        setShortFilmFilter={setShortFilmFilter}
      />
    </form>
  );
}

export default SearchForm;
