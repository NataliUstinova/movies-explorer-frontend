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

  const [savedMovies, setSavedMovies] = useState([]);
  const [allSavedMovies, setAllSavedMovies] = useState([]);
  const [savedSearchedMovies, setSavedSearchedMovies] = useState([]);
  const [savedSearchedShortMovies, setSavedSearchedShortMovies] = useState([]);
  const [isShortsSaved, setIsShortsSaved] = useState(false);

  const path = window.location.pathname;

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    return () => setServerResponse("");
  }, []);
  //user
  useEffect(() => {
    //shorts toggle check
    const toggleShortsState = getItem("isShorts");
    if (toggleShortsState) {
      setIsShorts(toggleShortsState);
    }

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

  useEffect(() => {
    if (isShorts) {
      setMovies(searchedShortMovies);
    } else {
      setMovies(searchedMovies);
    }
  }, [isShorts]);

  useEffect(() => {
    if (isShortsSaved) {
      setSavedMovies(savedSearchedShortMovies);
    } else {
      setSavedMovies(savedSearchedMovies);
    }
  }, [isShortsSaved]);

  //get saved movies from server
  useEffect(() => {
    if (isLoggedIn && currentUser) {
      setIsLoading(true);
      mainApi
        .getSavedMovies()
        .then((res) => {
          const UserMovies = res.filter((m) => m.owner === currentUser._id);
          setAllSavedMovies(UserMovies);
          setSavedMovies(UserMovies);
          setItem("allSavedMovies", UserMovies);
        })
        .catch((err) => {
          console.log(err);
          setServerResponse(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [currentUser._id, isLoggedIn]);

  //get all movies
  useEffect(() => {
    setIsLoading(true);
    const shortMovies = getItem("shorts");
    const searchedFilms = getItem("searchedMovies");
    const isOn = getItem("isShorts");
    const allFilms = getItem("allMovies");

    const searchMoviesSaved = getItem("searchedMoviesSaved");
    const isOnSaved = getItem("isShortsSaved");
    const shortsSaved = getItem("shortsSaved");
    const allFilmsSaved = getItem("allMoviesSaved");
    setAllSavedMovies(allFilmsSaved);

    setSavedMovies(isOnSaved ? shortsSaved : searchMoviesSaved);

    if (searchMoviesSaved?.length > 0) {
      setSavedSearchedMovies(searchMoviesSaved);
    }
    if (shortsSaved?.length > 0) {
      setSavedSearchedShortMovies(shortsSaved);
    }
    if (isOnSaved) {
      setIsShortsSaved(isOnSaved);
    }

    setMovies(isOn ? shortMovies : searchedFilms);

    if (shortMovies?.length > 0) {
      setSearchedShortMovies(shortMovies);
    }
    if (searchedFilms?.length > 0) {
      setSearchedMovies(searchedFilms);
      setIsLoading(false);
      return;
    }
    if (allFilms && allFilms?.length > 0) {
      setIsLoading(false);
      setAllMovies(allFilms);
    } else {
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
    //if saved movies search by saved
    const searched = allMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(inputQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputQuery.toLowerCase())
      );
    });
    const shorts = searched.filter((movie) => movie.duration <= 40);
    if (isShorts) {
      setMovies(shorts);
    } else {
      setMovies(searched);
    }
    setSearchedMovies(searched);
    setSearchedShortMovies(shorts);
    setItem("shorts", shorts);
    setItem("inputQuery", inputQuery);
    setItem("searchedMovies", searched);
  }

  function handleSavedSearch(inputQuery) {
    //if saved movies search by saved
    const searched = allSavedMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(inputQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputQuery.toLowerCase())
      );
    });
    const shorts = searched.filter((movie) => movie.duration <= 40);
    if (isShortsSaved) {
      setSavedMovies(shorts);
    } else {
      setSavedMovies(searched);
    }
    console.log(searched, "searched");
    setSavedSearchedMovies(searched);
    setSavedSearchedShortMovies(shorts);
    setItem("shortsSaved", shorts);
    setItem("inputQuerySaved", inputQuery);
    setItem("searchedMoviesSaved", searched);
  }

  function handleLike(movie) {
    mainApi
      .saveUserMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(movie) {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteSavedMovie(savedMovie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter((m) => {
          return !(movie.id === m.movieId || movie.movieId === m.movieId);
        });
        setSavedMovies(newSavedMovies);
      })
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
            onDelete={handleDelete}
            openModal={openModal}
            closeModal={closeModal}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            onLike={handleLike}
            movies={movies}
            onSearch={handleSearch}
            isShorts={isShorts}
            setIsShorts={setIsShorts}
            serverResponse={serverResponse}
            savedMovies={savedMovies}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/saved"
            component={SavedMovies}
            savedMovies={savedMovies}
            onDelete={handleDelete}
            openModal={openModal}
            closeModal={closeModal}
            onSearch={handleSavedSearch}
            isShorts={isShorts}
            setIsShorts={setIsShorts}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            movies={savedMovies}
            isShortsSaved={isShortsSaved}
            setIsShortsSaved={setIsShortsSaved}
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
