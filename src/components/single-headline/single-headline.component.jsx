import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Col } from "antd";

import { extractDate } from "../../redux/until";

import "antd/dist/antd.css";
import "./single-headline.styles.scss";
import "../top-headlines/top-headlines.styles.scss";

import { fetchSingleHeadlineStart } from "../../redux/headline/headline.action";

const SingleHeadline = ({
  category,
  title,
  description,
  source,
  publishedAt,
  fetchSingleHeadline,
  history,
  match
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
        onClick={() => (
          history.push(`/news/${category}/${title}`),
          fetchSingleHeadline({
            title,
            category
          })
        )}
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

const mapDispatchToProps = dispatch => ({
  fetchSingleHeadline: item => dispatch(fetchSingleHeadlineStart(item))
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withRouter
)(SingleHeadline);
