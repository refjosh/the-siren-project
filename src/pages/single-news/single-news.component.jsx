import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/witth-spinner/with-spinner.component";

import { fetchSingleHeadlineStart } from "../../redux/headline/headline.action";
import { selectCategoriesHeadlines } from "../../redux/category/category.selector";
import {
  selectIsFetchingSingle,
  selectSingleHeadline
} from "../../redux/headline/headline.selector";

import "./single-news.styels.scss";

import "antd/dist/antd.css";
import { Row, Col, Icon, Empty, Spin } from "antd";
import { extractDate, extractTime } from "../../redux/until";

const SingleNews = ({ singleHeadline, isFetching }) => (
  <div className="single-news">
    {singleHeadline ? (
      <Row gutter={[8, 16]}>
        <Col
          className="single-news__image-column"
          key={1}
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
        >
          {singleHeadline.urlToImage ? (
            <img
              className="single-news__image-column--image"
              src={singleHeadline.urlToImage}
              alt={singleHeadline.title}
            />
          ) : (
            <Empty description={"No Image"} />
          )}
        </Col>
      </Row>
    ) : (
      <Spin />
    )}
    <Row gutter={[8, 16]}>
      <Col
        className="single-news__body"
        key={1}
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
      >
        {singleHeadline ? (
          <div>
            <h2 className="single-news__body--title">{singleHeadline.title}</h2>
            <div className="publication-details">
              <div className="publication-details__published-box">
                <p>Published</p>
                <span className="publication-details__published-box--published-details">
                  <span>
                    <Icon type="calendar" />
                    {extractDate(singleHeadline.publishedAt)}
                  </span>
                  <span>
                    <Icon type="clock-circle" />
                    {extractTime(singleHeadline.publishedAt)}
                  </span>
                </span>
              </div>
              <div className="publication-details__publisher-box">
                <p>Source</p>
                <span>{singleHeadline.source.name}</span>
              </div>
            </div>
            <div className="single-news__body--content">
              <p>{singleHeadline.description}</p>
            </div>
            <div className="single-news__footer">
              {/* // TODO: Added prev and next button */}
              {/* <span>
                <Icon type="arrow-left" />
                Prev
              </span>
              <span>
                Next
                <Icon type="arrow-right" />
              </span> */}
            </div>
          </div>
        ) : (
          <Spin></Spin>
        )}
      </Col>
    </Row>
  </div>
);

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetchingSingle,
  categoriesHeadlines: selectCategoriesHeadlines,
  singleHeadline: selectSingleHeadline
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
)(SingleNews);
