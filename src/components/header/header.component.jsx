import React from "react";
import { ReactComponent as Logo } from "../../siren-logo.svg";

const Header = () => (
  <div className="header">
    <div className="header__logo-box">
      <Logo />
    </div>
    <div className="header__menu-box">
      <ul className="menu-box--list">
        <li>
          <a href="/">Fashion</a>
        </li>
        <li>
          <a href="/">Entertainment</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
