import React from "react";
import "./Register.css";
import Form from "../Form/Form";

const Register = ({ onRegister, serverResponse }) => {
  return (
    <Form
      isLoginForm={false}
      title={"Добро пожаловать!"}
      onRegister={onRegister}
      serverResponse={serverResponse}
    ></Form>
  );
};

export default Register;
