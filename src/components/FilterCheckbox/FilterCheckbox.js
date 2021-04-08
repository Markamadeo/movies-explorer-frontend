import { useState } from "react";

function FilterCheckbox({ setShortFilm, shortFilm }) {
  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked(!checked);
    setShortFilm(!shortFilm);
  }

  return (
    <div className="filter-checkbox__container">
      <button
        onClick={handleChecked}
        type="button"
        className={
          checked
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
