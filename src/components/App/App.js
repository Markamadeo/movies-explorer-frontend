import Preloader from '../Preloader/Preloader';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
