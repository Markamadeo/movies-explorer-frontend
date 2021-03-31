import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/signin">Страница входа</Route>
        <Route path="/signup">Страница регистрации</Route>
      </Switch>
    </div>
  );
}

export default App;
