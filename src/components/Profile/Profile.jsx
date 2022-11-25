import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Separator from "../Separator/Separator";

const Profile = ({}) => {
  const currentUser = {
    name: "Ната",
    email: "nata@mail.ru",
  };
  return (
    <div className="profile">
      <Header isMainHeader={false} />
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <div className="profile__info-container">
        <div className="profile__info-row">
          <p className="profile__info-text">Имя</p>
          <p className="profile__info-text">{currentUser.name}</p>
        </div>
        <Separator />
        <div className="profile__info-row">
          <p className="profile__info-text">Email</p>
          <p className="profile__info-text">{currentUser.email}</p>
        </div>
      </div>
      <ul className="profile__links">
        <li className="profile__link">Редактировать</li>
        <li className="profile__link profile__link_exit">Выйти из аккаунта</li>
      </ul>
    </div>
  );
};

export default Profile;
