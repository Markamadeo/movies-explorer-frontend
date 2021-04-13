import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { savedCardList } from "../../utils/tamplateCardsList";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useEffect, useState } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import authApi from "../../utils/authApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState({ status: false });
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    authApi
      .validateToken()
      .then((data) => {
        const userData = data;
        if (userData) {
          setLoggedIn({
            status: true,
          });
          setCurrentUser({
            _id: userData.data._id,
            name: userData.data.name,
            email: userData.data.email,
          });
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loggedIn.status) {
      authApi
        .validateToken()
        .then((data) => {
          const userData = data;
          if (userData) {
            setCurrentUser({
              _id: userData.data._id,
              name: userData.data.name,
              email: userData.data.email,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn.status]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            setLoggedIn={setLoggedIn}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            cards={savedCardList}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
            component={Profile}
          />
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          {!loggedIn.status && (
            <Route path="/signup">
              <Register setLoggedIn={setLoggedIn} />
            </Route>
          )}
          {!loggedIn.status && (
            <Route path="/signin">
              <Login setLoggedIn={setLoggedIn} />
            </Route>
          )}
          <Route path="/">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
