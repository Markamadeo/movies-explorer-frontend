import headerLogo from "../../images/header-logo.svg";
import { Link } from "react-router-dom";

function Greeting({ greetingText }) {
  return (
    <div className="greeting">
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип"></img>
      </Link>
      <p className="greeting__text">{greetingText}</p>
    </div>
  );
}

export default Greeting;
