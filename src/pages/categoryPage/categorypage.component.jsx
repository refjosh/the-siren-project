import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux'

import { Row, Col } from "antd";
import WithSpinner from "../witth-spinner/with-spinner.component";


import "antd/dist/antd.css";
import './categorypage.styles.scss';

const CategoryPage = () => (
  <div className="category-page">
    <Row gutter={[8, 16]}>
      <Col
        className="single-news__image-column"
        key={1}
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
      >
      </Col>
    </Row>
  </div>
);

export default CategoryPage;