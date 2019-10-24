import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Row } from "antd";
import WithSpinner from "../witth-spinner/with-spinner.component";
import SingleHeadline from "../single-headline/single-headline.component";

import { fetchSingleCategoryHeadlinesStart } from "../../redux/category/category.actions";

import "./top-headlines.styles.scss";

const TopHeadlines = ({ topHeadlines, fetchSingleCategoryHeadlines }) => (
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
        to={`/news/top-headlines`}
        onClick={() => fetchSingleCategoryHeadlines("top-headlines")}
      >
        view more
      </Link>
      <span className="top-headlines-section__footer--arrow">&rarr;</span>
    </div>
  </section>
);

const mapStateToProps = ({ headline }) => ({
  topHeadlines: headline.topHeadlines,
  isFetching: headline.isFetchingTopHeadlines
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
