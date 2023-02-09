import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="block-login">
        <h1>Войти</h1>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <p>Забыли пароль?</p>
        <Button cls="solid" text="Войти" />
      </div>
    </div>
  );
};

export default Login;
