import React, { useState } from "react";

import "./CSS/About.css";

import Slider from "../Slider/Slider";

const slidersList = [
  {
    title: "HTML/CSS",
    value: 100,
  },
  {
    title: "Javascript",
    value: 85,
  },
  {
    title: "React",
    value: 70,
  },
];

function About() {
  const [animate, setAnimate] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 600 && animate === false) {
      setAnimate(true);
    }
  });

  return (
    <section className="about" id="about">
      <div className="about__big_triangle"></div>
      <div className="about__content">
        <div className="about__content__left">
          <h2
            className={`about__content__left__title ${
              animate ? "about__showTitle" : null
            }`}
          >
            Sobre mim
          </h2>
          <p
            className={`about__content__left__text ${
              animate ? "about__showText" : null
            }`}
          >
            Estudante de Engenharia de Software pela Pontifícia Universidade
            Católica do Rio Grande do Sul (PUCRS), busco sempre me manter em
            constante aprendizado e aberto para novas tecnologias e
            conhecimentos na área da programação.
          </p>
        </div>
        <div className="about__content__right">
          <Slider sliderList={slidersList} />
        </div>
      </div>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="about__blob blob1"
      >
        <path
          fill="#FA4D56"
          d="M53.8,-12C62.7,9.7,57.9,41.4,39.1,55.5C20.2,69.6,-12.7,66.2,-37.3,48.9C-61.8,31.6,-78.1,0.5,-70.5,-19.5C-62.9,-39.5,-31.4,-48.3,-4.5,-46.9C22.5,-45.4,45,-33.7,53.8,-12Z"
          transform="translate(100 100)"
        />
      </svg>
    </section>
  );
}

export default About;
