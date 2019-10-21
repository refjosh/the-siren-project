import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import LandingSection from "../../components/landing-section/landing-section.component";
import TopHeadlines from "../../components/top-headlines/top-headlines.component";
import CategoryPreview from "../../components/category/category-preview.component";

import { fetchTopHeadlinesStart } from "../../redux/headline/headline.action";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchTopHeadlinesStart } = this.props;
    fetchTopHeadlinesStart();
  }
  render() {
    return (
      <div className="homePage">
        <LandingSection />
        <TopHeadlines />
        <CategoryPreview />
      </div>
    );
  }
}

const maptDispatchToProps = dispatch => ({
  fetchTopHeadlinesStart: () => dispatch(fetchTopHeadlinesStart())
});

export default compose(
  connect(
    null,
    maptDispatchToProps
  ),
  withRouter
)(HomePage);
