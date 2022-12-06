import React from "react";
import Form from "../Form/Form";

const Login = ({ onLogin, serverResponse }) => {
  return (
    <Form
      isLoginForm={true}
      title={"Рады видеть!"}
      onLogin={onLogin}
      serverResponse={serverResponse}
    ></Form>
  );
};

export default Login;
