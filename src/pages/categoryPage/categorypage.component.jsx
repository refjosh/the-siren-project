import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Row, Col } from "antd";
import WithSpinner from "../../components/witth-spinner/with-spinner.component";

import SingleHeadline from "../../components/single-headline/single-headline.component";

import "antd/dist/antd.css";
import "../../components/top-headlines/top-headlines.styles.scss";
import "./categorypage.styles.scss";

const CategoryPage = () => (
  <div className="category-page">
    <Row gutter={[8, 16]}>
      <h2 className="short--underline">Technology</h2>
      <div className="top-headlines-section__body">
        <Row gutter={[8, 16]} className="top-headlines-section__body--row">
          {/* {category.headlines
            .filter((item, idx) => idx < 3)
            .map((headline, index) => ( */}
          {/* <SingleHeadline
                category={category.category}
                title={headline.title}
                description={headline.description}
                source={headline.source}
                publishedAt={headline.publishedAt}
              /> */}
          {/* ))} */}
          <h1>Hello World</h1>
        </Row>
      </div>
    </Row>
  </div>
);

export default CategoryPage;
