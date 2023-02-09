import React from "react";
import "./input.css";

const Input = ({ placeholder, type = "text" }) => {
  return (
    <div>
      <div className="input">
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;
