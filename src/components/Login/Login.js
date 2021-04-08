import AuthForm from '../AuthForm/AuthForm';
import Greeting from '../Greeting/Greeting';

function Register(props) {

  return (
    <section className="login">
      <Greeting greetingText={"Рады видеть!"}/>
      <AuthForm />
    </section>
  );
}

export default Register;
