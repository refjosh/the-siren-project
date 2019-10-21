import React from "react";
import { compose } from "redux";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSingleCategoryHeadlinesStart } from "../../redux/category/category.actions";

import "./category-menu.styles.scss";

const CategoryMenu = ({
  categories,
  isHeader,
  fetchSingleCategoryHeadlines
}) => (
  <div className="category__menu-box ">
    <ul className="category__menu">
      {categories
        ? categories.map(category => (
            <li className="category__menu--list" key={category}>
              <NavLink
                to={`/news/${category}`}
                onClick={() => fetchSingleCategoryHeadlines({ category })}
                className={`category__menu--link ${
                  isHeader ? `isHeader` : `isFooter`
                }`}
              >
                {category}
              </NavLink>
            </li>
          ))
        : null}
    </ul>
  </div>
);

const mapStateToProps = ({ category }) => ({
  categories: category.categories
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCategoryHeadlines: item =>
    dispatch(fetchSingleCategoryHeadlinesStart(item))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(CategoryMenu);
