import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "antd/dist/antd.css";
import { Row } from "antd";
import WithSpinner from "../witth-spinner/with-spinner.component";
import SingleHeadline from "../single-headline/single-headline.component";

import {
  isFetchingHeadlines,
  selectCategoriesHeadlines
} from "../../redux/category/category.selector";
import { selectUserCountry } from "../../redux/user/user.selector";

import "../top-headlines/top-headlines.styles.scss";

const CategoryPreview = ({ categoriesHeadlines, userCountry }) => (
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
                  index={index}
                  key={index + 1}
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
          <Link
            className="top-headlines-section__footer--link"
            to={`/news/${userCountry.shortName.toLowerCase()}/${
              category.category
            }`}
          >
            view more
          </Link>
          <span className="top-headlines-section__footer--arrow">&rarr;</span>
        </div>
      </section>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  categoriesHeadlines: selectCategoriesHeadlines,
  isFetching: isFetchingHeadlines,
  userCountry: selectUserCountry
});

export default compose(
  connect(mapStateToProps),
  WithSpinner,
  withRouter
)(CategoryPreview);
