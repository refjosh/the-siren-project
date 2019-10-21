import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import "antd/dist/antd.css";
import { Row, Col } from "antd";
import WithSpinner from "../witth-spinner/with-spinner.component";

import { extractDate } from "../../redux/until";

import "./top-headlines.styles.scss";

const TopHeadlines = ({ topHeadlines }) => (
  <section className="top-headlines-section">
    <div className="top-headlines-section__head">
      <h2 className="short--underline">Top Headlines</h2>
    </div>
    <div className="top-headlines-section__body">
      <Row gutter={[8, 16]} className="top-headlines-section__body--row">
        {topHeadlines
          .filter((item, idx) => idx < 3)
          .map((headline, index) => (
            <Col
              key={index + 1}
              className="top-headlines-section__body--column"
              xs={24}
              sm={24}
              md={24}
              lg={8}
              xl={8}
            >
              <div className="body">
                <h3 className="body__header">{headline.title}</h3>
                <p className="body__content">{headline.description}</p>
                <div className="body__footer">
                  <span>{headline.source.name}</span>
                  <span className="solidus">&#47;</span>
                  <span>{extractDate(headline.publishedAt)}</span>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
    <div className="top-headlines-section__footer">
      <span className="top-headlines-section__footer--link">view more</span>
      <span className="top-headlines-section__footer--arrow">&rarr;</span>
    </div>
  </section>
);

const mapStateToProps = ({ headline }) => ({
  topHeadlines: headline.topHeadlines,
  isFetching: headline.isFetchingTopHeadlines
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(TopHeadlines);
