import React from "react";
import { Link } from "react-router-dom";

import CategoryMenu from "../category-menu/category-menu.component";

import { ReactComponent as Logo } from "../../assets/logos/siren-logo-dark.svg";
import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <CategoryMenu />
    <div>
      <p className="footer__credits">
        <span>
          News API data from
          <a
            href="https://newsapi.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            NewsAPI.org
          </a>
        </span>
        <span>
          Design from
          <a
            href="https://freebiesbug.com/sketch-freebies/the-siren/"
            target="_blank"
            rel="noreferrer noopener"
          >
            The Siren by Kulikov Ilya
          </a>
        </span>
      </p>
      <p className="footer__copyright">
        &copy;2019 The Siren Project. Made with time by
        <a
          href="https://github.com/joshtru"
          target="_blank"
          rel="noreferrer noopener"
        >
          Josh
        </a>
      </p>
    </div>
  </footer>
);
export default Footer;
