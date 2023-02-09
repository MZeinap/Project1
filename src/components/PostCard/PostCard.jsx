import React from "react";
import "./postCard.css";
import Dots from "../../images/Vector.svg";

const PostCard = ({ title, createdAt, content }) => {
  return (
    <div className="container">
      <div className="post-card">
        <>
          <h2>{title}</h2>
          <span>{createdAt}</span>
          <p>{content}</p>
        </>
        <div className="dop-block">
          <img src={Dots} alt="доп меню" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
