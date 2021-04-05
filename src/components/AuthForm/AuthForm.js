import { Route, Switch } from "react-router";
import { validateStringName } from "../../utils/utils";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { Link } from "react-router-dom";

function AuthForm(props) {
  const dataForm = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="form auth-form">
      <Switch>
        <Route path="/signup">
          <div className="auth-form__text-input">
            <p className="auth-form__text-input-name">Имя</p>
            <input
              pattern={validateStringName}
              max="23"
              min="2"
              title="Имя должно начинаться с заглавной буквы, быть от 2 до 23 символов, может включать пробел и дефис, написано Кириллицей или Латиницей"
              className="auth-form__input-text"
              type="text"
              name="name"
              required
              placeholder="Введите ваше имя"
              value={dataForm.values.name}
              onChange={dataForm.handleChange}
            ></input>
            <div className="auth-form__error-container">
              {dataForm.errors.name && (
                <p className="auth-form__input-error-text">
                  {dataForm.errors.name}
                </p>
              )}
            </div>
          </div>
        </Route>
      </Switch>
      <div className="auth-form__text-input">
        <p className="auth-form__text-input-name">E-mail</p>
        <input
          className="auth-form__input-text"
          type="email"
          name="email"
          required
          placeholder="Введите ваш email"
          value={dataForm.values.email}
          onChange={dataForm.handleChange}
        ></input>
        <div className="auth-form__error-container">
          {dataForm.errors.email && (
            <p className="auth-form__input-error-text">
              {dataForm.errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="auth-form__text-input">
        <p className="auth-form__text-input-name">Пароль</p>
        <input
          className="auth-form__input-text"
          type="password"
          name="password"
          maxLength="30"
          minLength="6"
          required
          placeholder="Введите ваш пароль"
          value={dataForm.values.password}
          onChange={dataForm.handleChange}
        ></input>
        <div className="auth-form__error-container">
          {dataForm.errors.password && (
            <p className="auth-form__input-error-text">
              {dataForm.errors.password}
            </p>
          )}
        </div>
      </div>
      <div className="auth-form__submit-container">
        <button
          disabled={!dataForm.isValid}
          type="submit"
          onClick={handleSubmit}
          className="auth-form__submit-button"
        >
          {
            <Switch>
              <Route path="/signin">Войти</Route>
              <Route path="/signup">Зарегистрироваться</Route>
            </Switch>
          }
        </button>
        <div className="auth-form__submit-footer-text-container">
          <Switch>
            <Route path="/signin">
              <p className="auth-form__submit-footer-text">
                Ещё не зарегистрированы?
              </p>
              <Link className="auth-form__submit-link" to="/signup">
                Регистрация
              </Link>
            </Route>
            <Route path="/signup">
              <p className="auth-form__submit-footer-text">
                Уже зарегистрированы?
              </p>
              <Link className="auth-form__submit-link" to="/signin">
                Войти
              </Link>
            </Route>
          </Switch>
        </div>
      </div>
    </form>
  );
}

export default AuthForm;
