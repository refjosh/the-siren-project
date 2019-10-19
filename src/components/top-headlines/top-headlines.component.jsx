import React from "react";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import { Row, Col } from "antd";

import "./top-headlines.styles.scss";

const TopHeadlines = () => (
  <section className="top-headlines-section">
    <div className="top-headlines-section__head">
      <h2 className="short--underline">Top Headlines</h2>
    </div>
    <div className="top-headlines-section__body">
      <Row gutter={[8, 16]} className="top-headlines-section__body--row">
        <Col
          className="top-headlines-section__body--column"
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
        >
          <h3 className="body__header">
            After layoffs, GoPro's business appears to be back on track
          </h3>
          <p className="body__content">
            GoPro announced its second quarter earnings today, and while it’s
            still losing money, things are finally trending in a slightly better
            direction for the camera company. GoPro brought in $297 million in
            revenue this past quarter, a 34 percent increase over the second
            quarter of 2016 — which was one of the company’s worst ever.
          </p>
          <div className="body__footer">
            <span>Tech</span>
            <span className="solidus">&#47;</span>
            <span>today at 11:54</span>
          </div>
        </Col>
      </Row>
    </div>
    <div className="top-headlines-section__footer">
      <span className="top-headlines-section__footer--link">view more</span>
      <span className="top-headlines-section__footer--arrow">&rarr;</span>
    </div>
  </section>
);

export default TopHeadlines;
