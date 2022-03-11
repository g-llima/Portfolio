import React from "react";

import "./CSS/Card.css";

function Card({
  title,
  description,
  topics,
  img,
  github,
  website,
  isDev = false,
}) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__front">
          <img className="card__content__front__img" src={img} alt={title} />
          <h3 className="card__content__front__title">{title}</h3>
          <p className="card__content__front__desc">{description}</p>
          <div className="card__content__front__topics">
            <ul className="card__content__front__topics__list">
              {topics.map((item, index) => (
                <li
                  key={index}
                  className={`card__content__front__topics__list__item ${item}__CARD`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card__content__back">
          {!isDev ? (
            <div className="card__content__back__icons">
              <a href={website} target="__blank">
                <i className="fas fa-external-link"></i>
              </a>
              <a href={github} target="__blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          ) : (
            <div className="card__content__back__dev">
              <h2>Desenvolvendo</h2>
              <i className="fal fa-cog"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
