import React from "react";
import Form from "../Form/Form";

const Login = ({ onLogin, serverResponse, isFormDisabled }) => {
  return (
    <Form
      isLoginForm={true}
      title={"Рады видеть!"}
      onLogin={onLogin}
      serverResponse={serverResponse}
      isFormDisabled={isFormDisabled}
    ></Form>
  );
};

export default Login;
