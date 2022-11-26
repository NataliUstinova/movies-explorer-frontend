import "./App.css";
import Main from "../Main/Main";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ModalMenu from "../ModalMenu/ModalMenu";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main openModal={openModal} closeModal={closeModal} />
        </Route>
        <Route exact path="/movies">
          <Movies openModal={openModal} closeModal={closeModal} />
        </Route>
        <Route exact path="/saved">
          <SavedMovies openModal={openModal} closeModal={closeModal} />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile openModal={openModal} closeModal={closeModal} />
        </Route>
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <ModalMenu isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
