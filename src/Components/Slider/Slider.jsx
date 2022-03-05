import React from "react";
import "./CSS/Slider.css";

function Slider({ sliderList }) {
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
              className="slider__container__fill"
              style={{ width: item.value + "%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
