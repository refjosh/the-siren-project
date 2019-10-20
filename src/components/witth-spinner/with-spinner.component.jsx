import React from "react";
import "antd/dist/antd.css";
import { Spin } from "antd";

const WithSpinner = WrappedComponent => ({ isFetching, ...otherProps }) => {
  return isFetching ? (
    <Spin size="large" spinning={isFetching} tip="is loading..." />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
