import "./App.css";
import Main from "../Main/Main";
import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ModalMenu from "../ModalMenu/ModalMenu";
import { useState, useEffect } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isShorts, setIsShorts] = useState(false);

  //local storage
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  //user
  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, [isLoggedIn]);

  function handleRegister({ name, email, password }) {
    mainApi
      .signup({ name, email, password })
      .then((res) => {
        if (res.email) {
          setTimeout(() => {
            handleLogin({ email, password });
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleLogin({ email, password }) {
    mainApi
      .signin({ email, password })
      .then(() => {
        setIsLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  }

  function handleLogout() {
    mainApi
      .signout()
      .then(() => {
        setIsLoggedIn(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUserUpdate({ name, email }) {
    mainApi
      .editProfile({ name, email })
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        console.log(err);
      });
  }

  //movies
  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((res) => {
        setIsLoading(false);
        setAllMovies(res);
        console.log("allMovies", allMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  //search movies
  function handleSearch(inputQuery) {
    setMovies(
      allMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(inputQuery.toLowerCase())
      )
    );
    setItems([{ inputQuery: inputQuery }, movies, isShorts]);
  }

  function handleShortsToggle(isOn) {
    if (isOn) {
      setMovies(allMovies.filter((movie) => movie.duration <= 40));
    } else {
      setMovies(allMovies);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main
              openModal={openModal}
              closeModal={closeModal}
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            openModal={openModal}
            closeModal={closeModal}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            movies={movies}
            onSearch={handleSearch}
            onToggle={handleShortsToggle}
            isShorts={isShorts}
            setIsShorts={setIsShorts}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/saved"
            component={SavedMovies}
            openModal={openModal}
            closeModal={closeModal}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
          ></ProtectedRoute>
          <Route exact path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route exact path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route exact path="/profile">
            <Profile
              openModal={openModal}
              closeModal={closeModal}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              onUpdateUser={handleUserUpdate}
            />
          </Route>
          <Route exact path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <ModalMenu isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
