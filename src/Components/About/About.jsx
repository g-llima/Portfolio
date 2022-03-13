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
  {
    title: "PHP",
    value: 50,
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
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

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="about__blob blob2"
      >
        <path
          fill="#FA4D56"
          d="M50.4,-64.2C64.9,-58.8,76.2,-43.6,72.9,-29.4C69.6,-15.2,51.9,-2.1,41.7,8.7C31.5,19.5,28.9,27.8,23.2,38.7C17.5,49.6,8.8,62.9,-2.9,67C-14.6,71,-29.2,65.7,-35,54.8C-40.9,44,-37.9,27.7,-39.5,14.7C-41.1,1.7,-47.4,-7.8,-50.1,-21.5C-52.9,-35.2,-52.1,-53,-43.2,-60.2C-34.3,-67.5,-17.1,-64.2,0.4,-64.7C17.9,-65.3,35.8,-69.6,50.4,-64.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </section>
  );
}

export default About;
