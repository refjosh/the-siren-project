import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

// IMPORT CONPONENTS
import WelcomePage from "./pages/welcomepage/welcomepage.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SingleNews from "./pages/single-news/single-news.component";
import CategoryPage from "./pages/categoryPage/categorypage.component";

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
    return (
      <div className="App">
        <Route path="/news" component={Header} />
        <Switch>
          <Row>
            <Col className="responsive-box" span={16} offset={4}>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/news" component={HomePage} />
              <Route exact path="/news/:category" component={CategoryPage} />
              <Route
                exact
                path="/news/:category/:title"
                component={SingleNews}
              />
            </Col>
          </Row>
        </Switch>
        <Route path="/news" component={Footer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategoriesStart()),
  fetchCategoriesHeadlines: () => dispatch(fetchCategoryHeadlinesStart())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
