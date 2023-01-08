import React from "react";
import "./Register.css";
import Form from "../Form/Form";

const Register = ({ onRegister, serverResponse, isFormDisabled }) => {
  return (
    <Form
      isLoginForm={false}
      title={"Добро пожаловать!"}
      onRegister={onRegister}
      serverResponse={serverResponse}
      isFormDisabled={isFormDisabled}
    ></Form>
  );
};

export default Register;
