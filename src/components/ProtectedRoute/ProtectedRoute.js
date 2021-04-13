import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {props.loggedIn.status ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
  );
};

export default ProtectedRoute;
