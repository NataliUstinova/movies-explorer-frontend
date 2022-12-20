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
import useLocalStorage from "../../hooks/useLocalStorage";

function App() {
  const history = useHistory();
  const { setItem, getItem } = useLocalStorage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [serverResponse, setServerResponse] = useState("");

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isShorts, setIsShorts] = useState(false);
  const [searchedShortMovies, setSearchedShortMovies] = useState([]);

  const path = window.location.pathname;

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  //user
  useEffect(() => {
    // if (!isLoggedIn) return;

    setServerResponse("");
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        history.push(path);
      })
      .catch((err) => {
        setServerResponse(err);
      });
  }, []);

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
          setServerResponse("");
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
        localStorage.clear();
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
      .then((res) => {
        setCurrentUser(res);
        setServerResponse("Данные успешно обновлены");
      })
      .catch((err) => {
        console.log(err);
        setServerResponse(err);
      });
  }

  //get all movies
  useEffect(() => {
    setIsLoading(true);
    if (getItem("searchedMovies")?.length > 0) {
      console.log("searched work");
      setSearchedMovies(getItem("searchedMovies"));
      setIsLoading(false);
      return;
    }
    if (getItem("allMovies") && getItem("allMovies")?.length > 0) {
      console.log("all work");
      setIsLoading(false);
      setAllMovies(getItem("allMovies"));
    } else {
      console.log("api work");
      moviesApi
        .getAllMovies()
        .then((res) => {
          setIsLoading(false);
          setAllMovies(res);
          setItem("allMovies", res);
        })
        .catch((err) => {
          console.log(err);
          setServerResponse(err);
        });
    }
  }, [currentUser.name]);

  //search movies
  function handleSearch(inputQuery) {
    console.log("inputQuery", inputQuery);
    const searched = allMovies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(inputQuery.toLowerCase())
    );
    const shorts = searched.filter((movie) => movie.duration <= 40);
    setSearchedMovies(searched);
    setSearchedShortMovies(shorts);
    setItem("shorts", shorts);
    setItem("inputQuery", inputQuery);
    setItem("searchedMovies", searched);
    console.log("search", searched);
    // setItem("isShorts", isShorts.toString());
  }

  function handleShortsToggle(isOn) {
    if (isOn) {
      // setItem("isShorts", !isShorts);
      // setMovies(movies.filter((movie) => movie.duration <= 40));
    } else {
      setItem("isShorts", !isShorts);
      setMovies(getItem("searchedMovies"));
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
            movies={searchedMovies}
            onSearch={handleSearch}
            onToggle={handleShortsToggle}
            isShorts={isShorts}
            setIsShorts={setIsShorts}
            serverResponse={serverResponse}
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
            serverResponse={serverResponse}
            component={Profile}
          ></ProtectedRoute>
          <ProtectedRoute exact path="*" component={NotFoundPage} />
        </Switch>
        <ModalMenu isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
