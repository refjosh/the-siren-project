import React from "react";
import { compose } from "redux";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategoriesList } from "../../redux/category/category.selector";
import { selectUserCountry } from "../../redux/user/user.selector";

import { fetchSingleCategoryHeadlinesStart } from "../../redux/category/category.actions";

import "./category-menu.styles.scss";

const CategoryMenu = ({
  categories,
  userCountry,
  isHeader,
  fetchSingleCategoryHeadlines
}) => (
  <div className="category__menu-box ">
    <ul className="category__menu">
      {categories
        ? categories.map(category => (
            <li className="category__menu--list" key={category}>
              <NavLink
                to={`/news/${userCountry.shortName.toLowerCase()}/${category}`}
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

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesList,
  userCountry: selectUserCountry
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
