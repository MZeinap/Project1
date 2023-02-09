import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="block-register">
        <h1>Регистрация</h1>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm password" type="password" />
        <Button cls="solid" text="Регистрация" />
        <p>
          Есть аккаунт?
          <a href="#">Войти?</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
