import React from "react";

import "./CSS/Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__front">front</div>
        <div className="card__content__back"> back</div>
      </div>
    </div>
  );
}

export default Card;
