import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Carousel } from "antd";
import LandingSlider from "../landing-slider/landing-slider.component";
import LandingThumb from "../landing-thumb/landing-thumb.component";

import WithSpinner from "../witth-spinner/with-spinner.component";

import { extractDateandTime } from "../../redux/until";

import "antd/dist/antd.css";
import "./landing-section.styles.scss";

const LandingSection = ({ topHeadlines }) => {
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
          {topHeadlines
            .filter((item, idx) => idx < 4)
            .map((item, index) => (
              <LandingSlider
                key={index + 1}
                index={index + 1}
                title={item.title}
                imageUrl={item.urlToImage}
                category={item.source.name}
                date={item.publishedAt}
              />
            ))}
        </Carousel>
      </div>
      <div className="landing-section__seconday-section">
        {topHeadlines
          .filter((item, idx) => idx >= 4)
          .map((headline, index) => (
            <LandingThumb
              key={index}
              title={headline.title}
              imageUrl={headline.urlToImage}
              category={headline.source.name}
              date={extractDateandTime(headline.publishedAt)}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ headline }) => ({
  topHeadlines: headline.shuffledHeadlines,
  isFetching: headline.isFetchingShuffledHeadlines
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(LandingSection);
