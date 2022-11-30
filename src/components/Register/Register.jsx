import React from "react";
import "./Register.css";
import Form from "../Form/Form";

const Register = ({ onRegister }) => {
  return (
    <Form
      isLoginForm={false}
      title={"Добро пожаловать!"}
      onRegister={onRegister}
    ></Form>
  );
};

export default Register;
