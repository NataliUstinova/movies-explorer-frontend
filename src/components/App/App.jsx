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
  const [serverResponse, setServerResponse] = useState("");

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isShorts, setIsShorts] = useState(false);

  //local storage
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(localItems));
  }, [localItems]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  //user
  useEffect(() => {
    setServerResponse("");
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        setServerResponse(err);
      });
  }, [isLoggedIn]);

  function handleRegister({ name, email, password }) {
    setServerResponse("");
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
        setServerResponse(err);
      });
  }
  function handleLogin({ email, password }) {
    setServerResponse("");
    mainApi
      .signin({ email, password })
      .then((res) => {
        setServerResponse(res.message);
        setTimeout(() => {
          setIsLoggedIn(true);
          history.push("/movies");
        }, 1000);
      })
      .catch((err) => {
        setServerResponse(err);
        setIsLoggedIn(false);
      });
  }

  function handleLogout() {
    setServerResponse("");
    mainApi
      .signout()
      .then(() => {
        setIsLoggedIn(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setServerResponse(err);
      });
  }

  function handleUserUpdate({ name, email }) {
    setServerResponse("");
    mainApi
      .editProfile({ name, email })
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        console.log(err);
        setServerResponse(err);
      });
  }

  //movies
  // useEffect(() => {
  //   setIsLoading(true);
  //   moviesApi
  //     .getAllMovies()
  //     .then((res) => {
  //       setIsLoading(false);
  //       setAllMovies(res);
  //       setLocalItems((prev) => [...prev, allMovies]);
  //       console.log("localItems", localItems);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setServerResponse(err);
  //     });
  // }, []);

  //search movies
  function handleSearch(inputQuery) {
    setMovies(
      allMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(inputQuery.toLowerCase())
      )
    );
    setLocalItems([{ inputQuery: inputQuery }, movies, isShorts]);
  }

  function handleShortsToggle(isOn) {
    if (isOn) {
      setMovies(allMovies.filter((movie) => movie.duration <= 40));
    } else {
      setMovies(allMovies);
    }
  }

  function handleLike(movie) {
    mainApi
      .saveUserMovie(movie)
      .then((res) => res.json())
      .catch((err) => console.log(err));
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
            <Login onLogin={handleLogin} serverResponse={serverResponse} />
          </Route>
          <Route exact path="/signup">
            <Register
              onRegister={handleRegister}
              serverResponse={serverResponse}
            />
          </Route>
          <ProtectedRoute
            exact
            path="/profile"
            openModal={openModal}
            closeModal={closeModal}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            onUpdateUser={handleUserUpdate}
            component={Profile}
          ></ProtectedRoute>
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
