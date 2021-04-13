import AuthForm from "../AuthForm/AuthForm";
import Greeting from "../Greeting/Greeting";

function Register({ setLoggedIn }) {
  return (
    <section className="login">
      <Greeting greetingText={"Рады видеть!"} />
      <AuthForm setLoggedIn={setLoggedIn} />
    </section>
  );
}

export default Register;
