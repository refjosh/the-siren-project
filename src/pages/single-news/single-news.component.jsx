import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import WithSpinner from "../../components/witth-spinner/with-spinner.component";

import { fetchSingleHeadlineStart } from "../../redux/headline/headline.action";

import "./single-news.styels.scss";

class SingleNews extends React.Component {
  componentDidMount() {
    const {
      fetchSingleHeadline,
      match: {
        params: { title }
      }
    } = this.props;
    fetchSingleHeadline(title);
  }
  render() {
    const { match, history, categoriesHeadlines } = this.props;
    return (
      <div className="single-news">
        {/* <div className="single-news__image">
      <img src="" alt="title" />
    </div>
    <div className="single-news__title">
      <h2></h2> <span></span>
    </div>
    <div className="single-news__footer"></div> */}
        <h1>Hello News</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ headline }) => ({
  singleHeadline: headline.singleHeadline,
  isFetching: headline.isFetchingSingle
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
