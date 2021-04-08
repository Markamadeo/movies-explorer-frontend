import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__description">Страница не найдена</p>
        <button
          type="button"
          className="page-not-found__link"
          onClick={history.goBack}
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
