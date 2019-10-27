import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
// COMPONENTS
import { Row, Spin, Icon } from "antd";
import SingleHeadline from "../../components/single-headline/single-headline.component";
// STATES FROM SELECTOR
import {
  selectSingleCategoryHeadlines,
  selectIsFetchingSingleCategoryHeadlines
} from "../../redux/category/category.selector";
// ACTIONS
import { fetchSingleCategoryHeadlinesStart } from "../../redux/category/category.actions";
// STYLES
import "antd/dist/antd.css";
import "../../components/top-headlines/top-headlines.styles.scss";
import "./categorypage.styles.scss";

const CategoryPage = ({
  match,
  categoryHeadlines,
  fetchSingleCategoryHeadlines
}) => {
  const checkCategory = match.params.category;
  const [loadNumber, setLoadNumber] = useState(6);

  useEffect(() => {
    fetchSingleCategoryHeadlines(checkCategory);
  }, [fetchSingleCategoryHeadlines, checkCategory]);

  let headlinesCount = 0;

  if ((categoryHeadlines !== null) & (categoryHeadlines !== undefined)) {
    headlinesCount = categoryHeadlines.length;
  }

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
                    category={match.params.category}
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
        {loadNumber >= headlinesCount ? null : (
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

const mapDispatchToProps = dispatch => ({
  fetchSingleCategoryHeadlines: item =>
    dispatch(fetchSingleCategoryHeadlinesStart(item))
});
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(CategoryPage);
