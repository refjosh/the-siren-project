import React from "react";
import { Carousel } from "antd";

import "antd/dist/antd.css";
import "./landing-section.styles.scss";

const LandingSection = () => {
  return (
    <div className="landing-section">
      <div className="landing-section__main-slider">
        <Carousel
          speed={2500}
          autoplay
          autoplaySpeed={5000}
          dotPosition={"right"}
          dots={true}
          pauseOnFocus
          draggable={true}
        >
          <div className="slider">
            <img
              className="slider__image"
              src="https://www.newsbtc.com/wp-content/uploads/2019/10/shutterstock_683030524-1200x780.jpg"
              alt="display"
            />
            <div className="slider__detail">
              <span>/ 01</span>
              <h3 className="slider__detail--title">
                Arizona Ultimate Adventure – Grand Canyon & Beyond
              </h3>
              <p>
                <span className="slider__detail--category">TRAVEL</span>/
                <span className="slider__detail--date">OCTOBER 18 2019 </span>
              </p>
            </div>
          </div>
          <div className="slider">
            <img
              className="slider__image"
              src="https://cdn.arstechnica.net/wp-content/uploads/2019/10/connected-car-wifi-button-760x380.jpg"
              alt="display"
            />
            <div className="slider__detail">
              <span>/ 01</span>
              <h3 className="slider__detail--title">
                Arizona Ultimate Adventure – Grand Canyon & Beyond
              </h3>
              <p>
                <span className="slider__detail--category">TRAVEL</span>/
                <span className="slider__detail--date">OCTOBER 18 2019 </span>
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="landing-section__seconday-section"></div>
    </div>
  );
};

export default LandingSection;
