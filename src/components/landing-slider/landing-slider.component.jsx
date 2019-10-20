import React from "react";

import { extractDateandTime } from "../../redux/until";

import "./landing-slider.styles.scss";

const LandingSlider = ({ index, title, imageUrl, category, date }) => (
  <div className="landing-slider">
    <img className="landing-slider__image" src={imageUrl} alt={title} />
    <div className="landing-slider__detail">
      {index ? (
        <span className="landing-slider__detail--count">
          <span className="solidus">&#47;</span>
          <span>{index}</span>
        </span>
      ) : null}

      <h3 className="landing-slider__detail--title">{title}</h3>
      <p className="landing-slider__detail--bottom">
        <span className="landing-slider__detail--category">{category}</span>
        <span className="solidus">&#47;</span>
        <span className="landing-slider__detail--date">
          {extractDateandTime(date)}
        </span>
      </p>
    </div>
  </div>
);

export default LandingSlider;
