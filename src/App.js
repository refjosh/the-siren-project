import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

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

// LAZY LOAD COMPONENTS CONPONENTS
const WelcomePage = lazy(() =>
  import("./pages/welcomepage/welcomepage.component")
);
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SingleNews = lazy(() =>
  import("./pages/single-news/single-news.component")
);
const CategoryPage = lazy(() =>
  import("./pages/categoryPage/categorypage.component")
);

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
        <Suspense fallback={<div>...loading</div>}>
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
        </Suspense>
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
