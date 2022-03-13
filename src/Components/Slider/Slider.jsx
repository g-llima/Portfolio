import React, { useState } from "react";
import "./CSS/Slider.css";

function Slider({ sliderList }) {
  const [animate, setAnimate] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 600 && animate === false) {
      setAnimate(true);
    }
  });

  return (
    <div className="slider">
      {sliderList.map((item, index) => (
        <div className="slider__content" key={index}>
          <div className="slider__texts">
            <p className="slider__texts__title">{item.title}</p>
            <p className="slider__texts__value">{item.value}%</p>
          </div>
          <div className="slider__container">
            <div
              className={`slider__container__fill ${
                animate ? `sl__${index}` : null
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
