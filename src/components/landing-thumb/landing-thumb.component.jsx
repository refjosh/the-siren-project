import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectUserCountry } from "../../redux/user/user.selector";
// ACTIONS
import { fetchSingleHeadlineStart } from "../../redux/headline/headline.action";

import "./landing-thumb.styles.scss";

const LandingThumb = ({
  index,
  title,
  imageUrl,
  category,
  source,
  date,
  history,
  fetchSingleHeadline,
  userCountry
}) => (
  <div className="landing-thumb landing-thumb__small">
    <img className="landing-thumb__image" src={imageUrl} alt={title} />
    <div className="landing-thumb__detail">
      <h3
        onClick={() => (
          history.push(
            `/news/${userCountry.shortName.toLowerCase()}/${category}/${index}`
          ),
          fetchSingleHeadline({
            index,
            category
          })
        )}
        className="landing-thumb__detail--title"
      >
        {title}
      </h3>
      <p className="landing-thumb__detail--bottom">
        <span className="landing-thumb__detail--category">{source}</span>
        <span className="solidus">&#47;</span>
        <span className="landing-thumb__detail--date">{date}</span>
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
)(withRouter(LandingThumb));
