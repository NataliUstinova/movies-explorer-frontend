import React from "react";
import "./Techs.css";
import Separator from "../Separator/Separator";

const Techs = () => {
  return (
    <section className="techs" id="Techs">
      <h2 className="techs__title">Технологии</h2>
      <Separator bold={true} />
      <div className="techs__promo">
        <h2 className="techs__promo-title">7 технологий</h2>
        <p className="techs__promo-subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="techs__container">
          <p className="techs__tech-block">HTML</p>
          <p className="techs__tech-block">CSS</p>
          <p className="techs__tech-block">JS</p>
          <p className="techs__tech-block">React</p>
          <p className="techs__tech-block">Git</p>
          <p className="techs__tech-block">Express.js</p>
          <p className="techs__tech-block">mongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Techs;
