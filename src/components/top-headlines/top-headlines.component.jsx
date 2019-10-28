import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Row } from "antd";
import WithSpinner from "../witth-spinner/with-spinner.component";
import SingleHeadline from "../single-headline/single-headline.component";

import { fetchSingleCategoryHeadlinesStart } from "../../redux/category/category.actions";

import {
  selectTopHeadlines,
  selectisFetchingTopHeadlines
} from "../../redux/headline/headline.selector";
import { selectUserCountry } from "../../redux/user/user.selector";

import "./top-headlines.styles.scss";

const TopHeadlines = ({ topHeadlines, userCountry }) => (
  <section className="top-headlines-section">
    <div className="top-headlines-section__head">
      <h2 className="short--underline">Top Headlines</h2>
    </div>
    <div className="top-headlines-section__body">
      <Row gutter={[8, 16]} className="top-headlines-section__body--row">
        {topHeadlines
          ? topHeadlines
              .filter((item, idx) => idx < 3)
              .map((headline, index) => (
                <SingleHeadline
                  key={index + 1}
                  category={"top-headlines"}
                  title={headline.title}
                  description={headline.description}
                  source={headline.source}
                  publishedAt={headline.publishedAt}
                />
              ))
          : null}
      </Row>
    </div>
    <div className="top-headlines-section__footer">
      <Link
        className="top-headlines-section__footer--link"
        to={`/news/${userCountry.shortName.toLowerCase()}/top-headlines`}
      >
        view more
      </Link>
      <span className="top-headlines-section__footer--arrow">&rarr;</span>
    </div>
  </section>
);

const mapStateToProps = createStructuredSelector({
  topHeadlines: selectTopHeadlines,
  isFetching: selectisFetchingTopHeadlines,
  userCountry: selectUserCountry
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCategoryHeadlines: category =>
    dispatch(fetchSingleCategoryHeadlinesStart({ category }))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithSpinner
)(TopHeadlines);
