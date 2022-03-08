import React from "react";

import "./CSS/Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__front">
          <img
            className="card__content__front__img"
            src="https://files.tecnoblog.net/meiobit/wp-content/uploads/2021/09/lost-in-random-001.jpg"
            alt="a"
          />
          <h3 className="card__content__front__title">Lorem ipsum dolor</h3>
          <p className="card__content__front__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="card__content__front__topics">
            <ul className="card__content__front__topics__list">
              <li className="card__content__front__topics__list__item html">
                HTML
              </li>
              <li className="card__content__front__topics__list__item css">
                CSS
              </li>
              <li className="card__content__front__topics__list__item react">
                REACT
              </li>
              <li className="card__content__front__topics__list__item js">
                JavaScript
              </li>
            </ul>
          </div>
        </div>
        <div className="card__content__back">back</div>
      </div>
    </div>
  );
}

export default Card;
