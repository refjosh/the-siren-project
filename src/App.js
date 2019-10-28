import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

// IMPORT CONPONENTS
import WelcomePage from "./pages/welcomepage/welcomepage.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SingleNews from "./pages/single-news/single-news.component";
import CategoryPage from "./pages/categoryPage/categorypage.component";

import {
  selectUserCountry,
  selectUserPreferredCategories
} from "./redux/user/user.selector";

import { Row, Col } from "antd";
import "antd/dist/antd.css";

import {
  fetchCategoriesStart,
  fetchCategoryHeadlinesStart
} from "./redux/category/category.actions";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const { fetchCategories, fetchCategoriesHeadlines } = this.props;
    fetchCategories();
    fetchCategoriesHeadlines();
  }
  render() {
    const { userCountry, userPreferredCategories } = this.props;
    const country = userCountry.shortName.toLowerCase();
    return (
      <div className="App">
        <Route path="/news" component={Header} />
        <Row>
          <Col className="responsive-box" span={16} offset={4}>
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                  !!userCountry & !!userPreferredCategories ? (
                    <Redirect to={`/news/${country}`} />
                  ) : (
                    <WelcomePage />
                  )
                }
              />
              <Route exact path={`/news/${country}`} component={HomePage} />
              <Route
                exact
                path={`/news/${country}/:category`}
                component={CategoryPage}
              />
              <Route
                exact
                path={`/news/${country}/:category/:index`}
                component={SingleNews}
              />
            </Switch>
          </Col>
        </Row>
        <Route path="/news" component={Footer} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userCountry: selectUserCountry,
  userPreferredCategories: selectUserPreferredCategories
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategoriesStart()),
  fetchCategoriesHeadlines: () => dispatch(fetchCategoryHeadlinesStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
