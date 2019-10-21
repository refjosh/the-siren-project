import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logos/siren-logo.svg";

import CategoryMenu from "../category-menu/category-menu.component";

import "./header.styles.scss";

const Header = ({ categories }) => (
  <header className="header">
    <div className="header__logo-box">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <CategoryMenu isHeader />
  </header>
);

export default Header;
