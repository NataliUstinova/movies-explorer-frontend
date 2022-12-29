import "./App.css";
import Main from "../Main/Main";
import React from "react";
import {
  Switch,
  Route,
  useHistory,
  Redirect,
  useLocation,
} from "react-router-dom";
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
import {
  AUTH_ERROR,
  SHORTS_DURATION,
  UPDATE_SUCCESS,
} from "../../utils/constants";
import Popup from "../Popup/Popup";

function App() {
  const history = useHistory();
  const { setItem, getItem } = useLocalStorage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [serverResponse, setServerResponse] = useState("");

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isShorts, setIsShorts] = useState(false);
  const [searchedShortMovies, setSearchedShortMovies] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);
  const [allSavedMovies, setAllSavedMovies] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
  const [isShortsSaved, setIsShortsSaved] = useState(false);

  const path = window.location.pathname;

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    return () => setServerResponse("");
  }, [setServerResponse]);

  //get user
  useEffect(() => {
    //shorts toggle check
    const toggleShortsState = getItem("isShorts");
    if (toggleShortsState) {
      setIsShorts(toggleShortsState);
    }
    handleUserInfo(path);
  }, []);

  function handleUserInfo(page) {
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        history.push(page);
      })
      .catch((err) => {
        console.log(err);
        setIsPopupOpen(true);
        setServerResponse(err);
        if (err === AUTH_ERROR) {
          handleLogout();
        }
      });
  }

  function handleRegister({ name, email, password }) {
    setIsFormDisabled(true);
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
        setIsPopupOpen(true);
        setServerResponse(err);
      })
      .finally(() => setIsFormDisabled(false));
  }
  function handleLogin({ email, password }) {
    setIsFormDisabled(true);
    mainApi
      .signin({ email, password })
      .then((res) => {
        setServerResponse(res.message);
        setTimeout(() => {
          setIsLoggedIn(true);
          handleUserInfo("/movies");
          setServerResponse("");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setIsPopupOpen(true);
        setServerResponse(err);
        setIsLoggedIn(false);
      })
      .finally(() => setIsFormDisabled(false));
  }

  function handleLogout() {
    mainApi
      .signout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        setMovies([]);
        setAllMovies([]);
        setSearchedMovies([]);
        setSearchedShortMovies([]);
        setIsShorts(false);

        setIsShortsSaved(false);
        setSavedMovies([]);
        setAllSavedMovies([]);
        setSearchedSavedMovies([]);
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setIsPopupOpen(true);
        setServerResponse(err);
      });
  }

  function handleUserUpdate({ name, email }) {
    setIsFormDisabled(true);
    setServerResponse("");
    mainApi
      .editProfile({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setServerResponse(UPDATE_SUCCESS);
      })
      .catch((err) => {
        console.log(err);
        setIsPopupOpen(true);
        setServerResponse(err);
        if (err === AUTH_ERROR) {
          handleLogout();
        }
      })
      .finally(() => setIsFormDisabled(false));
  }

  useEffect(() => {
    if (isShorts) {
      setMovies(searchedShortMovies);
    } else {
      setMovies(searchedMovies);
    }
  }, [isShorts]);

  useEffect(() => {
    let shorts;
    if (searchedSavedMovies?.length > 0) {
      shorts = searchedSavedMovies.filter(
        (movie) => movie.duration <= SHORTS_DURATION
      );
    } else {
      shorts = allSavedMovies.filter(
        (movie) => movie.duration <= SHORTS_DURATION
      );
    }
    if (isShortsSaved) {
      setSavedMovies(shorts);
    } else if (!isShortsSaved) {
      setSavedMovies(allSavedMovies);
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
          setIsPopupOpen(true);
          setServerResponse(err);
          if (err === AUTH_ERROR) {
            handleLogout();
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [currentUser._id, isLoggedIn, useLocation()]);

  //get all movies
  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      const shortMovies = getItem("shorts");
      const searchedFilms = getItem("searchedMovies");
      const isOn = getItem("isShorts");
      const allFilms = getItem("allMovies");

      setMovies(isOn ? shortMovies : searchedFilms);

      if (shortMovies?.length > 0) {
        setSearchedShortMovies(shortMovies);
      }
      if (searchedFilms?.length > 0) {
        setSearchedMovies(searchedFilms);
        setIsLoading(false);
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
            setIsPopupOpen(true);
            setServerResponse(err);
          });
      }
    }
  }, [isLoggedIn]);

  //search movies
  function handleSearch(inputQuery) {
    setIsFormDisabled(true);
    const searched = allMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(inputQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputQuery.toLowerCase())
      );
    });
    const shorts = searched.filter(
      (movie) => movie.duration <= SHORTS_DURATION
    );
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
    setIsFormDisabled(false);
  }

  //saved movies search by saved
  function handleSavedSearch(inputQuery) {
    setIsFormDisabled(true);
    const searched = allSavedMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(inputQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputQuery.toLowerCase())
      );
    });
    const shorts = allSavedMovies.filter(
      (movie) => movie.duration <= SHORTS_DURATION
    );
    if (isShortsSaved) {
      setSavedMovies(shorts);
    } else {
      setSavedMovies(allSavedMovies);
    }
    setAllSavedMovies(searched);
    setSearchedSavedMovies(searched);
    setIsFormDisabled(false);
  }

  //возвращение всех сохраненных
  useEffect(() => {
    setSavedMovies(allSavedMovies);
  }, [useLocation(), allSavedMovies]);

  function handleLike(movie) {
    mainApi
      .saveUserMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
        setIsPopupOpen(true);
        setServerResponse(err);
        if (err === AUTH_ERROR) {
          handleLogout();
        }
      });
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
        setAllSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
        setIsPopupOpen(true);
        setServerResponse(err);
        if (err === AUTH_ERROR) {
          handleLogout();
        }
      });
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
            isFormDisabled={isFormDisabled}
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
            isFormDisabled={isFormDisabled}
          ></ProtectedRoute>
          <Route exact path="/signin">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login
                onLogin={handleLogin}
                serverResponse={serverResponse}
                isFormDisabled={isFormDisabled}
              />
            )}
          </Route>
          <Route exact path="/signup">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register
                onRegister={handleRegister}
                serverResponse={serverResponse}
                isFormDisabled={isFormDisabled}
              />
            )}
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
            setServerResponse={setServerResponse}
            component={Profile}
            isFormDisabled={isFormDisabled}
          ></ProtectedRoute>
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
        <ModalMenu isModalOpen={isModalOpen} closeModal={closeModal} />
        <Popup
          isOpen={isPopupOpen}
          serverResponse={serverResponse}
          onClose={closePopup}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
