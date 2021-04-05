/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { validateStringName } from "../../utils/utils";
import Header from "../Header/Header";

function Profile(props) {
  const formData = useFormWithValidation();
  const userData = { name: "Username", email: "useremail@email.com" }; //позже берём из currentUser context
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
  }

  function handleLogout(evt) {
    evt.preventDefault();
  }

  return (
    <section className="profile">
      <Header />
      <div className="profile__content">
        <h2 className="profile__greeting-text">{`Привет, ${userData.name}!`}</h2>
        <form className="form profile__form">
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
          </ul>
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
