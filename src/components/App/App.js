import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import { cardsListMovies, savedCardList } from "../../utils/tamplateCardsList";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/movies">
          <Movies cards={cardsListMovies}/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies cards={savedCardList}/>
        </Route>
        <Route path="/signin">Страница входа</Route>
        <Route path="/signup">Страница регистрации</Route>
      </Switch>
    </div>
  );
}

export default App;
