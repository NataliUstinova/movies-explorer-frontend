import { useState } from "react";
import "./PortfolioLink.css";

import React from "react";

const PortfolioLink = ({ text, link }) => {
  const [hover, setIsHover] = useState(false);
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="portfolio-link"
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <p className="portfolio-link__text">{text}</p>
        <div
          className={`portfolio-link__arrow ${
            hover && "portfolio-link__arrow-animation"
          }`}
        />
      </a>
    </>
  );
};

export default PortfolioLink;
