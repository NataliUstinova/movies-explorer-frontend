import React from "react";
import "./Portfolio.css";
import PortfolioLink from "../PortfolioLink/PortfolioLink";
import Separator from "../Separator/Separator";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <PortfolioLink
          text={"Статичный сайт"}
          link={"https://github.com/NataliUstinova/first-project"}
        />
        <Separator />
        <PortfolioLink
          text={"Адаптивный сайт"}
          link={"https://nataliustinova.github.io/russian-travel/"}
        />
        <Separator />
        <PortfolioLink
          text={"Одностраничное приложение"}
          link={"https://mesto.nata.u.nomoredomains.icu/"}
        />
      </ul>
    </section>
  );
};

export default Portfolio;
