import React from "react";
import "./Separator.css";

const Separator = ({ bold }) => {
  return <div className={`separator ${bold && "separator_bold"}`}></div>;
};

export default Separator;
