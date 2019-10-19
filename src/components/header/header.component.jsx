import React from "react";
import { ReactComponent as Logo } from "../../assets/logos/siren-logo.svg";

import CategoryMenu from "../category-menu/category-menu.component";

import "./header.styles.scss";

const Header = ({ categories }) => (
  <header className="header">
    <div className="header__logo-box">
      <Logo />
    </div>
    <CategoryMenu />
  </header>
);

export default Header;
