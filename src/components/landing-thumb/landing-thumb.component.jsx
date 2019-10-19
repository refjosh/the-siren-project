import React from "react";

import "./landing-thumb.styles.scss";

const LandingThumb = ({ title, imageUrl, category, date }) => (
  <div className="landing-thumb">
    <img className="landing-thumb__image" src={imageUrl} alt={title} />
    <div className="landing-thumb__detail">
      <h3 className="landing-thumb__detail--title">{title}</h3>
      <p className="landing-thumb__detail--bottom">
        <span className="landing-thumb__detail--category">{category}</span>
        <span className="solidus">&#47;</span>
        <span className="landing-thumb__detail--date">{date}</span>
      </p>
    </div>
  </div>
);

export default LandingThumb;
