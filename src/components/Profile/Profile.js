/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import authApi from "../../utils/authApi";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { validateStringName } from "../../utils/utils";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

function Profile({ loggedIn, setCurrentUser, setLoggedIn }) {
  const history = useHistory();
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [afterSubmitText, setAfterSubmitText] = useState({
    status: false,
    theme: "",
    message: "",
  });
  const currentUser = useContext(CurrentUserContext);
  const formData = useFormWithValidation();
  const userData = { name: currentUser.name, email: currentUser.email };
  function compareUserData() {
    if (
      formData.values.name === userData.name &&
      formData.values.email === userData.email &&
      formData.isValid
    ) {
      return true;
    }

    if (
      (formData.values.name !== userData.name ||
        formData.values.email !== userData.email) &&
      formData.isValid
    ) {
      return false;
    }

    if (
      (formData.values.name !== userData.name ||
        formData.values.email !== userData.email) &&
      !formData.isValid
    ) {
      return true;
    }
  }

  useEffect(() => {
    formData.handleSetDefaultValue(userData);
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    setPreloaderActive(false);
    authApi
      .editUserProfileData({
        name: formData.values.name,
        email: formData.values.email,
      })
      .then((data) => {
        if (data) {
          setCurrentUser({
            ...data.data,
          });
          setPreloaderActive(true);
          setAfterSubmitText({
            status: true,
            theme: "successful",
            message: "Данные обновлены ✓",
          });
          return;
        }
        return Promise.reject(
          "Данные заполнены неверно, или такой пользователь уже существует"
        );
      })
      .catch((err) => {
        setPreloaderActive(true);
        setAfterSubmitText({ status: true, theme: "rejected", message: err });
      });
  }

  function handleLogout(evt) {
    evt.preventDefault();
    authApi
      .logout()
      .then((res) => {
        localStorage.removeItem("beatFilms");
      })
      .catch((err) => console.log(err));
    setLoggedIn({ status: false });
    history.push("/");
  }

  return (
    <section className="profile">
      <Header loggedIn={loggedIn} />
      <div className="profile__content">
        <h2 className="profile__greeting-text">{`Привет, ${userData.name}!`}</h2>
        <form className="form profile__form">
          {!preloaderActive && <Preloader />}
          {preloaderActive && (
            <ul className="profile__inputs-container">
              <li className="profile__inputs-item">
                <div className="profile__inputs-text-container">
                  <label
                    className="profile__input-label"
                    htmlFor="user-name-input"
                  >
                    Имя
                  </label>
                  <input
                    pattern={validateStringName}
                    max="23"
                    min="2"
                    title="Имя должно начинаться с заглавной буквы, быть от 2 до 23 символов, может включать пробел и дефис, написано Кириллицей или Латиницей"
                    required
                    placeholder="Введите ваше имя"
                    onChange={formData.handleChange}
                    type="text"
                    id="user-name-input"
                    value={formData.values.name}
                    name="name"
                    className="profile__user-name-input"
                  ></input>
                </div>
                <div className="profile__error-container">
                  {formData.errors.name && (
                    <p className="profile__input-error-text">
                      {formData.errors.name}
                    </p>
                  )}
                </div>
              </li>
              <li className="profile__inputs-item">
                <div className="profile__inputs-text-container">
                  <label
                    className="profile__input-label"
                    htmlFor="user-email-input"
                  >
                    E-mail
                  </label>
                  <input
                    onChange={formData.handleChange}
                    type="email"
                    required
                    placeholder="Введите ваш email"
                    id="user-email-input"
                    value={formData.values.email}
                    name="email"
                    className="profile__user-name-input"
                  ></input>
                </div>
                <div className="profile__error-container">
                  {formData.errors.email && (
                    <p className="profile__input-error-text">
                      {formData.errors.email}
                    </p>
                  )}
                </div>
              </li>
              {afterSubmitText.status && (
                <p
                  className={`profile__after-submit-text profile__after-submit-text__${afterSubmitText.theme}`}
                >
                  {afterSubmitText.message}
                </p>
              )}
            </ul>
          )}
          <div className="profile__button-conteiner">
            <button
              disabled={compareUserData()}
              className="profile__edit-button"
              type="submit"
              onClick={handleSubmit}
            >
              Редактировать
            </button>
            <button
              className="profile__logout-button"
              type="button"
              onClick={handleLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
