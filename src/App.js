import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SingleNews from "./pages/single-news/single-news.component";

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
        <Header />
        <Row>
          <Col span={16} offset={4}>
            <Switch>
              <Route exact path="/news" component={HomePage} />
              <Route path="/news/:title" component={SingleNews} />
            </Switch>
          </Col>
        </Row>
        <Footer />
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
