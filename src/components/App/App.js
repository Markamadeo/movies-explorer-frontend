import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path="/">
          <Main/>
        </Route>
        <Route path="/signin">
          Страница входа
        </Route>
        <Route path="/signup">
          Страница регистрации
        </Route>
      </Switch>
    </div>
  );
}

export default App;
