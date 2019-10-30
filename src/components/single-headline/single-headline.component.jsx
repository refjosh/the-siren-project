import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { Col } from "antd";

import { extractDate } from "../../redux/until";
// SELECTORS
import { selectUserCountry } from "../../redux/user/user.selector";
// STYLES
import "antd/dist/antd.css";
import "./single-headline.styles.scss";
import "../top-headlines/top-headlines.styles.scss";
// ACTIONS
import { fetchSingleHeadlineStart } from "../../redux/headline/headline.action";

const SingleHeadline = ({
  category,
  title,
  index,
  description,
  source,
  publishedAt,
  fetchSingleHeadline,
  history,
  userCountry
}) => (
  <Col
    className="top-headlines-section__body--column"
    xs={24}
    sm={24}
    md={24}
    lg={8}
    xl={8}
  >
    <div className="body">
      <h3
        className="body__header"
        onClick={() => {
          history.push(
            `/news/${userCountry.shortName.toLowerCase()}/${category}/${index}`
          );
          fetchSingleHeadline({
            index,
            category
          });
        }}
      >
        {title}
      </h3>
      <p className="body__content">{description}</p>
      <div className="body__footer">
        <span>{source.name}</span>
        <span className="solidus">&#47;</span>
        <span>{extractDate(publishedAt)}</span>
      </div>
    </div>
  </Col>
);

const mapStateToProps = createStructuredSelector({
  userCountry: selectUserCountry
});

const mapDispatchToProps = dispatch => ({
  fetchSingleHeadline: item => dispatch(fetchSingleHeadlineStart(item))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(SingleHeadline);
