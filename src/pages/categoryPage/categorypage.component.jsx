import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { Row, Spin, Icon } from "antd";
import WithSpinner from "../../components/witth-spinner/with-spinner.component";

import SingleHeadline from "../../components/single-headline/single-headline.component";

import {
  selectSingleCategoryHeadlines,
  selectIsFetchingSingleCategoryHeadlines
} from "../../redux/category/category.selector";

import "antd/dist/antd.css";
import "../../components/top-headlines/top-headlines.styles.scss";
import "./categorypage.styles.scss";

const CategoryPage = ({ match, categoryHeadlines }) => {
  const headlinesCount =
    categoryHeadlines.length !== undefined ? categoryHeadlines.length : 0;
  const [loadNumber, setLoadNumber] = useState(6);
  const [loadLimit] = useState(headlinesCount);

  return (
    <div className="category-page">
      <Row gutter={[8, 16]}>
        <h2 className="short--underline">{match.params.category}</h2>
        <div className="top-headlines-section__body">
          <Row gutter={[8, 16]} className="top-headlines-section__body--row">
            {categoryHeadlines ? (
              categoryHeadlines
                .filter((item, idx) => idx < loadNumber)
                .map((headline, index) => (
                  <SingleHeadline
                    key={index + 1}
                    category={categoryHeadlines}
                    title={headline.title}
                    description={headline.description}
                    source={headline.source}
                    publishedAt={headline.publishedAt}
                  />
                ))
            ) : (
              <Spin />
            )}
          </Row>
        </div>
        {loadNumber >= loadLimit ? null : (
          <div className="category-page__footer">
            <button
              className="load-more"
              onClick={() => setLoadNumber(loadNumber + 6)}
            >
              <p className="load-more__text">load more</p>
              <Icon type="down" className="down-arrow" />
            </button>
          </div>
        )}
      </Row>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetchingSingleCategoryHeadlines,
  categoryHeadlines: selectSingleCategoryHeadlines
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  WithSpinner
)(CategoryPage);
