import React from "react";
import { Carousel } from "antd";
import LandingThumb from "../landing-thumb/landing-thumb.component";

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
          <LandingThumb
            index={"01"}
            title={"Arizona Ultimate Adventure – Grand Canyon & Beyond"}
            imageUrl={
              "https://www.newsbtc.com/wp-content/uploads/2019/10/shutterstock_683030524-1200x780.jpg"
            }
            category={"General"}
            date={"October 18 2019"}
          />
          <LandingThumb
            index={"02"}
            title={"Arizona Ultimate Adventure – Grand Canyon & Beyond"}
            imageUrl={
              "https://www.newsbtc.com/wp-content/uploads/2019/10/shutterstock_683030524-1200x780.jpg"
            }
            category={"General"}
            date={"October 18 2019"}
          />
        </Carousel>
      </div>
      <div className="landing-section__seconday-section"></div>
    </div>
  );
};

export default LandingSection;
