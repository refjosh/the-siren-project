import React from "react";
import { compose } from "redux";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./category-menu.styles.scss";

const CategoryMenu = ({ categories, isHeader, history, match }) => (
  <div className="category__menu-box ">
    <ul className="category__menu">
      {categories
        ? categories.map(category => (
            <li className="category__menu--list" key={category}>
              <NavLink
                to={`/news/${category}`}
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

export default compose(
  connect(mapStateToProps),
  withRouter
)(CategoryMenu);
