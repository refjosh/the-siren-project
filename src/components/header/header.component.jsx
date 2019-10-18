import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../siren-logo.svg";

import { fetchCategoriesStart } from "../../redux/category/category.actions";

class Header extends React.Component {
  componentDidMount() {
    const { fetchCategoriesStart } = this.props;
    fetchCategoriesStart();
  }
  render() {
    const { categories } = this.props;

    return (
      <div className="header">
        <div className="header__logo-box">
          <Logo />
        </div>
        <div className="header__menu-box">
          <ul className="menu-box--list">
            {categories
              ? categories.map(category => (
                  <li key={category}>
                    <a href={`${category}`}>{category}</a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ category }) => ({
  categories: category.categories
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
