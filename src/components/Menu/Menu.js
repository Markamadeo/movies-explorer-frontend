import { NavLink } from "react-router-dom";

function Menu({ menuActive, setMenuActive }) {
  return (
    <section
      className={menuActive ? "menu menu_active" : "menu"}
      onClick={() => {
        setMenuActive(false);
        document.body.style.overflow = "visible";
      }}
    >
      <div className="menu__blur"></div>
      <div className="menu__content">
        <ul className="menu__links-container">
          <li className="menu__item menu__item_loggedin">
            <NavLink
              activeClassName="menu__link_selected"
              className="menu__link"
              exact
              to="/"
            >
              <p className="menu__link-text">Главная</p>
            </NavLink>
          </li>
          <li className="menu__item menu__item_loggedin">
            <NavLink
              activeClassName="menu__link_selected"
              className="menu__link"
              to="/movies"
            >
              <p className="menu__link-text ">Фильмы</p>
            </NavLink>
          </li>
          <li className="menu__item menu__item_loggedin">
            <NavLink
              activeClassName="menu__link_selected"
              className="menu__link"
              to="/saved-movies"
            >
              <p className="menu__link-text">Сохранённые фильмы</p>
            </NavLink>
          </li>
        </ul>
        <ul className="menu__links-container">
          <li className="menu__item menu__item_account menu__item_loggedin">
            <NavLink
              activeClassName="menu__link_selected"
              className="menu__link"
              to="/profile"
            >
              <p className="menu__link-text menu__link-text_account">Аккаунт</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Menu;
