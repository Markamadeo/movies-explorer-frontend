function FilterCheckbox({
  filterChecked,
  setFilterChecked,
  setShortFilmFilter,
  shortFilmFilter,
}) {
  function handleChecked() {
    setFilterChecked(!filterChecked);
    setShortFilmFilter(!shortFilmFilter);
  }

  return (
    <div className="filter-checkbox__container">
      <button
        onClick={handleChecked}
        type="button"
        className={
          filterChecked
            ? "filter-checkbox__button filter-checkbox__button_active"
            : "filter-checkbox__button"
        }
      >
        <div className="filter-checkbox__sphere"></div>
      </button>
      <p className="filter-checkbox__description">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
