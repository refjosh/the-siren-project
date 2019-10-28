import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Carousel, Row, Col } from "antd";
import LandingSlider from "../landing-slider/landing-slider.component";
import LandingThumb from "../landing-thumb/landing-thumb.component";

import WithSpinner from "../witth-spinner/with-spinner.component";

import { extractDate } from "../../redux/until";

import "antd/dist/antd.css";
import "./landing-section.styles.scss";

const LandingSection = ({ topHeadlines }) => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  return (
    <div className="landing-section">
      <Row gutter={[8, 16]}>
        <Col xs={24} sm={24} md={24} lg={15} xl={15}>
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
                ? topHeadlines
                    .filter((headline, idx) => idx < 4)
                    .map((headline, index) => {
                      const item = topHeadlines[index * randomNumber];
                      return (
                        <LandingSlider
                          index={index * randomNumber}
                          key={index + 1}
                          slideIndex={index + 1}
                          title={item.title}
                          imageUrl={item.urlToImage}
                          source={item.source.name}
                          date={item.publishedAt}
                          category={"top-headlines"}
                        />
                      );
                    })
                : null}
            </Carousel>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={9} xl={9}>
          <div className="landing-section__seconday-section">
            {topHeadlines
              ? topHeadlines
                  .filter((item, idx) => (idx >= 4) & (idx < 6))
                  .map((headline, index) => (
                    <LandingThumb
                      index={index + 4}
                      key={index}
                      title={headline.title}
                      imageUrl={headline.urlToImage}
                      source={headline.source.name}
                      date={extractDate(headline.publishedAt)}
                      category={"top-headlines"}
                    />
                  ))
              : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ headline }) => ({
  topHeadlines: headline.topHeadlines,
  isFetching: headline.isFetchingTopHeadlines
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(LandingSection);
