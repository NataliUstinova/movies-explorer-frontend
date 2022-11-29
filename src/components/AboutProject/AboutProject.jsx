import React from "react";
import "./AboutProject.css";
import Separator from "../Separator/Separator";

const AboutProject = () => {
  return (
    <section className="aboutProject" id="AboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <Separator bold={true} />
      <div className="aboutProject__info-container">
        <div className="aboutProject__info">
          <p className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="aboutProject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__info">
          <p className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="aboutProject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__timeline-container">
        <div className="timeline__first-column">
          <div className="timeline__1week-block">
            <p className="timeline__text">1 неделя</p>
          </div>
          <p className="timeline__text_gray">Back-end</p>
        </div>

        <div className="timeline__second-column">
          <div className="timeline__4week-block">
            <p className="timeline__text">4 недели</p>
          </div>
          <p className="timeline__text_gray">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
