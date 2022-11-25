import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link className="logo" to="/" />
    </>
  );
};

export default Logo;
