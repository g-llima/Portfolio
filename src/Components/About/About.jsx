import React from "react";

import "./CSS/About.css";

import Slider from "../Slider/Slider";

const slidersList = [
  {
    title: "HTML/CSS",
    value: 99,
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
  return (
    <section className="about">
      <div className="about__big_triangle"></div>
      <div className="about__content">
        <div className="about__content__left">
          <h2>Sobre mim</h2>
          <p>
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
    </section>
  );
}

export default About;
