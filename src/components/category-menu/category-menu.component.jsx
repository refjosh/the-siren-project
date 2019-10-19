import React from "react";
import { connect } from "react-redux";

import "./category-menu.styles.scss";

const CategoryMenu = ({ categories }) => (
  <div className="category__menu-box">
    <ul className="category__menu">
      {categories
        ? categories.map(category => (
            <li className="category__menu--list" key={category}>
              <a className="category__menu--link" href={`${category}`}>
                {category}
              </a>
            </li>
          ))
        : null}
    </ul>
  </div>
);

const mapStateToProps = ({ category }) => ({
  categories: category.categories
});

export default connect(mapStateToProps)(CategoryMenu);
