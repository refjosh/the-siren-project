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
import { Row, Col } from "antd";

class SingleNews extends React.Component {
  componentDidMount() {
    const {
      categoriesHeadlines,
      fetchSingleHeadline,
      match: {
        params: { category, title }
      }
    } = this.props;
    fetchSingleHeadline({ title, category, categoriesHeadlines });
  }
  render() {
    const { singleHeadline } = this.props;
    console.log(singleHeadline);
    return (
      <div className="single-news">
        <div className="single-news__image">
          <img src="" alt="title" />
        </div>
        <div className="single-news__title">
          <h2></h2> <span></span>
        </div>
        <div className="single-news__footer"></div>
      </div>
    );
  }
}

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
