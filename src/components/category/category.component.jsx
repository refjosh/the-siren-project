import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "antd/dist/antd.css";
import { Row, Col } from "antd";
import WithSpinner from "../witth-spinner/with-spinner.component";

import { extractDateandTime } from "../../redux/until";
import {
  isFetchingHeadlines,
  selectCategoriesHeadlines
} from "../../redux/category/category.selector";

import "../top-headlines/top-headlines.styles.scss";

const Category = ({ match, history, categoriesHeadlines }) => (
  <div>
    {categoriesHeadlines.map(category => (
      <section className="top-headlines-section" key={category.id}>
        <div className="top-headlines-section__head">
          <h2 className="short--underline">{category.category}</h2>
        </div>
        <div className="top-headlines-section__body">
          <Row gutter={[8, 16]} className="top-headlines-section__body--row">
            {category.headlines
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
                    <h3
                      className="body__header"
                      onClick={() =>
                        history.push(
                          `${
                            match.url
                          }/${category.category.toLowerCase()}/${headline.title.toLowerCase()}`
                        )
                      }
                    >
                      {headline.title}
                    </h3>
                    <p className="body__content">{headline.description}</p>
                    <div className="body__footer">
                      <span>{headline.source.name}</span>
                      <span className="solidus">&#47;</span>
                      <span>{extractDateandTime(headline.publishedAt)}</span>
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
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  categoriesHeadlines: selectCategoriesHeadlines,
  isFetching: isFetchingHeadlines
});

export default compose(
  connect(mapStateToProps),
  WithSpinner,
  withRouter
)(Category);
