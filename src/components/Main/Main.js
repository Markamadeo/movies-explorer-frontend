import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject ";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main({ loggedIn }) {
  return (
    <div className="main">
      <Promo loggedIn={loggedIn} />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Main;
