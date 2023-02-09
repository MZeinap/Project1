import React from "react";
import "./button.css";

const Button = ({ to, cls, text }) => {
  return (
    <>
      {to ? (
        <a href={to} className={`btn btn-${cls}`}>
          {text}
        </a>
      ) : (
        <button className={`btn btn-${cls}`}>{text}</button>
      )}
    </>
  );
};

export default Button;
