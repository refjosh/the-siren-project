import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectUserCountry } from "../../redux/user/user.selector";
// ACTIONS
import { fetchSingleHeadlineStart } from "../../redux/headline/headline.action";

import { extractDate } from "../../redux/until";

import "./landing-slider.styles.scss";

const LandingSlider = ({
  index,
  slideIndex,
  title,
  imageUrl,
  source,
  date,
  userCountry,
  fetchSingleHeadline,
  history,
  category
}) => (
  <div className="landing-slider">
    <img className="landing-slider__image" src={imageUrl} alt={title} />
    <div className="landing-slider__detail">
      {slideIndex ? (
        <span className="landing-slider__detail--count">
          <span className="solidus">&#47;</span>
          <span>{slideIndex}</span>
        </span>
      ) : null}

      <h3
        onClick={() => {
          history.push(
            `/news/${userCountry.shortName.toLowerCase()}/${category}/${index}`
          );
          fetchSingleHeadline({
            index,
            category
          });
        }}
        className="landing-slider__detail--title"
      >
        {title}
      </h3>
      <p className="landing-slider__detail--bottom">
        <span className="landing-slider__detail--category">{source}</span>
        <span className="solidus">&#47;</span>
        <span className="landing-slider__detail--date">
          {extractDate(date)}
        </span>
      </p>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  userCountry: selectUserCountry
});

const mapDispatchToProps = dispatch => ({
  fetchSingleHeadline: item => dispatch(fetchSingleHeadlineStart(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LandingSlider));
