import React from "react";
import Button from "../Button/Button";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_wrap">
          <a href="" className="header_logo"></a>

          {props.isAuth ? (
            <Button text="Добавить пост" cls="solid" to="/add-post" />
          ) : (
            <div className="header_btns">
              <Button text="Войти" cls="solid" to="/login" />
              <Button text="Регистрация" cls="outline" to="/register" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
