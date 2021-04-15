import Header from "../Header/Header";
import promoLogo from "../../images/promo-logo.svg";

function Promo({ loggedIn }) {
  function promoButtonHandle() {
    window.open("https://praktikum.yandex.ru/", "_blank");
  }

  return (
    <section className="promo">
      <Header loggedIn={loggedIn} />
      <div className="promo__content">
        <div className="promo__text-container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button onClick={promoButtonHandle} className="promo__button">
            Узнать больше
          </button>
        </div>
        <img src={promoLogo} alt="Логотип лендинга" className="promo__logo" />
      </div>
    </section>
  );
}

export default Promo;
