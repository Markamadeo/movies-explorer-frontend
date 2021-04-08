import { useState } from "react";
import { Route, Switch } from "react-router";
import { Link, NavLink } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import useWindowDimensions from "../../utils/WindowDimensions";
import Menu from "../Menu/Menu";

function Header(props) {
  const windowDimensions = useWindowDimensions();
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <section className="header">
          <nav className="header__nav">
            <Link to="/">
              <img
                className="header__logo"
                src={headerLogo}
                alt="Логотип"
              ></img>
            </Link>
            <ul className="header__links-container">
              <li className="header__item">
                <Link className="header__link" to="/signup">
                  <p className="header__link-text">Регистрация</p>
                </Link>
              </li>
              <li className="header__item">
                <Link to="/signin">
                  <button className="header__button">Войти</button>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </Route>
      <Route path="/">
        <section className="header">
          {windowDimensions.width <= 768 ? (
            <nav className="header__nav">
              <Link to="/">
                <img
                  className="header__logo"
                  src={headerLogo}
                  alt="Логотип"
                ></img>
              </Link>
              <button
                onClick={() => {
                  setMenuActive(!menuActive);
                  !menuActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
                }}
                className={
                  !menuActive
                    ? "header__burger-btn header__burger-btn_closed"
                    : " header__burger-btn header__burger-btn_opened"
                }
              />
              <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
            </nav>
          ) : (
            <nav className="header__nav">
              <Link to="/">
                <img
                  className="header__logo"
                  src={headerLogo}
                  alt="Логотип"
                ></img>
              </Link>
              <ul className="header__links-container">
                <li className="header__item header__item_loggedin">
                  <NavLink
                    activeClassName="header__link_selected"
                    className="header__link"
                    to="/movies"
                  >
                    <p className="header__link-text ">Фильмы</p>
                  </NavLink>
                </li>
                <li className="header__item header__item_loggedin">
                  <NavLink
                    activeClassName="header__link_selected"
                    className="header__link"
                    to="/saved-movies"
                  >
                    <p className="header__link-text">Сохранённые фильмы</p>
                  </NavLink>
                </li>
              </ul>
              <ul className="header__links-container">
                <li className="header__item header__item_account header__item_loggedin">
                  <NavLink
                    activeClassName="header__link_selected"
                    className="header__link"
                    to="/profile"
                  >
                    <p className="header__link-text header__link-text_account">Аккаунт</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </section>
      </Route>
    </Switch>
  );
}

export default Header;
