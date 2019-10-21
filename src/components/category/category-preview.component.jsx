import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "antd/dist/antd.css";
import { Row, Col } from "antd";
import WithSpinner from "../witth-spinner/with-spinner.component";
import SingleHeadline from "../single-headline/single-headline.component";

import { fetchSingleHeadlineStart } from "../../redux/headline/headline.action";

import { extractDate } from "../../redux/until";
import {
  isFetchingHeadlines,
  selectCategoriesHeadlines
} from "../../redux/category/category.selector";

import "../top-headlines/top-headlines.styles.scss";

const CategoryPreview = ({
  match,
  history,
  categoriesHeadlines,
  fetchSingleHeadline
}) => (
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
                <SingleHeadline
                  category={category.category}
                  title={headline.title}
                  description={headline.description}
                  source={headline.source}
                  publishedAt={headline.publishedAt}
                />
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

const mapDispatchToProps = dispatch => ({
  fetchSingleHeadline: item => dispatch(fetchSingleHeadlineStart(item))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithSpinner,
  withRouter
)(CategoryPreview);
