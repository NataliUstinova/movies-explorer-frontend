import React from "react";
import Form from "../Form/Form";

const Login = ({ onLogin }) => {
  return (
    <Form isLoginForm={true} title={"Рады видеть!"} onLogin={onLogin}></Form>
  );
};

export default Login;
