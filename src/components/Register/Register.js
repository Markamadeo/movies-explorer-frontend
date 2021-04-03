import AuthForm from '../AuthForm/AuthForm';
import Greeting from '../Greeting/Greeting';

function Register(props) {

  return (
    <section className="register">
      <Greeting greetingText={"Добро пожаловать!"}/>
      <AuthForm />
    </section>
  );
}

export default Register;
