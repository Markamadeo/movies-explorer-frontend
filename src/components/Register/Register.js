import AuthForm from "../AuthForm/AuthForm";
import Greeting from "../Greeting/Greeting";

function Register({ setLoggedIn }) {
  return (
    <section className="register">
      <Greeting greetingText={"Добро пожаловать!"} />
      <AuthForm setLoggedIn={setLoggedIn} />
    </section>
  );
}

export default Register;
