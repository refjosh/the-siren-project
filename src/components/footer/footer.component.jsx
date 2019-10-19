import React from "react";

import CategoryMenu from "../category-menu/category-menu.component";

import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo"></div>
    <CategoryMenu />
    <div className="footer__credits"></div>
  </footer>
);
export default Footer;
