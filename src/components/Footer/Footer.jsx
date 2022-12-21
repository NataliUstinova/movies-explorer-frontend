import React from "react";
import "./Footer.css";
import Separator from "../Separator/Separator";

const Footer = ({ movies }) => {
  const page = window.location.pathname;
  return (
    <footer
      className={`${
        page !== "/" && movies?.length < 2 && "footer_sticky"
      } footer`}
    >
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <Separator />
      <div className="footer__text">
        <p className="footer__year">&#169;&nbsp;{new Date().getFullYear()}</p>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/NataliUstinova"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
