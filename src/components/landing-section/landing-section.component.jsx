import React from "react";
import { connect } from "react-redux";

import { Carousel } from "antd";
import LandingSlider from "../landing-slider/landing-slider.component";
import LandingThumb from "../landing-thumb/landing-thumb.component";

import { fetchTopHeadlinesStart } from "../../redux/headline/headline.action";

import "antd/dist/antd.css";
import "./landing-section.styles.scss";

class LandingSection extends React.Component {
  componentDidMount() {
    const { fetchTopHeadlinesStart } = this.props;
    fetchTopHeadlinesStart();
  }

  render() {
    const { topHeadlines } = this.props;
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
              ? topHeadlines
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
                  ))
              : null}
          </Carousel>
        </div>
        <div className="landing-section__seconday-section">
          {topHeadlines
            ? topHeadlines
                .filter((item, idx) => idx >= 4)
                .map((headline, index) => (
                  <LandingThumb
                    key={index}
                    title={headline.title}
                    imageUrl={headline.urlToImage}
                    category={headline.source.name}
                    date={headline.publishedAt}
                  />
                ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ headline }) => ({
  topHeadlines: headline.topHeadlines
});

const maptDispatchToProps = dispatch => ({
  fetchTopHeadlinesStart: () => dispatch(fetchTopHeadlinesStart())
});

export default connect(
  mapStateToProps,
  maptDispatchToProps
)(LandingSection);
