import React from "react";
import "./AboutMe.css";
import Separator from "../Separator/Separator";

const AboutMe = () => {
  const age = new Date().getFullYear() - 1993;
  return (
    <section className="about-me" id="AboutMe">
      <h2 className="techs__title">Студент</h2>
      <Separator bold={true} />
      <div className="about-me__container">
        <div className="about-me__info">
          <div>
            <p className="about-me__title">Наталья</p>
            <p className="about-me__subtitle">
              Фронтенд-разработчик, {age} лет
            </p>
            <p className="about-me__text">
              Я хочу получить опыт работы Frontend-разработчиком в продуктовой
              компании. Мне важно, чтобы у меня был наставник, чтобы я могла
              развиваться как специалист и приносить пользу компании. Ранее я
              работала в стартапах: выполняла различные функци от дизайна до
              проектного менеджера. Сейчас специализируюсь на разработке и
              развиваюсь в этой сфере.
            </p>
          </div>
          <a
            className="about-me__link"
            href="https://github.com/NataliUstinova"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="about-me__img" />
      </div>
    </section>
  );
};

export default AboutMe;
