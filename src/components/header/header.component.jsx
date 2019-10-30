import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logos/siren-logo.svg";

import { Icon, Dropdown, Button, Menu, Modal } from "antd";
import CategoryMenu from "../category-menu/category-menu.component";
import CountryAndCategories from "../country-and-categories/country-and-categories.component";
import CountriesList from "../../localStore/countriesList";
import {
  selectUserCountry,
  selectUserPreferredCategories
} from "../../redux/user/user.selector";

import {
  setUserCountry,
  setUserPreferredCategories
} from "../../redux/user/user.action";

import {
  fetchCategoriesStart,
  fetchCategoryHeadlinesStart
} from "../../redux/category/category.actions";

import "antd/dist/antd.css";
import "./header.styles.scss";

const Header = ({
  userCountry,
  setUserCountry,
  userPreferredCategories,
  setPreferredCategories,
  history
}) => {
  const [visible, setVisible] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(userCountry.name);
  const [selectedCategories, setSelectedCategories] = useState(
    userPreferredCategories
  );
  // HANDLE OKAY BUTTON IS PRESSED
  const menu = (
    <Menu onClick={() => setVisible(true)}>
      <Menu.Item key="1">
        <Icon type="setting" />
        Settings
      </Menu.Item>
    </Menu>
  );

  const handleCountry = event => {
    setSelectedCountry(event);
  };

  const handleCategory = event => {
    setSelectedCategories(event);
  };
  const handleSave = () => {
    let country = null;
    try {
      const filteredCountry = CountriesList.filter(
        country => country.name === selectedCountry
      );
      country = filteredCountry[0];
      setUserCountry(country);
      setPreferredCategories(selectedCategories);
    } catch (error) {
      console.log("Can't set user country or categories");
    }
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setVisible(false);
    }, 500);
    return history.push(`/news/${country.shortName.toLowerCase()}`);
  };
  return (
    <header className="header">
      <div className="header__country">
        <Dropdown.Button overlay={menu}>
          <span role="img" aria-label={userCountry.shortName}>
            {userCountry.emoji}
          </span>
          {userCountry.shortName}
        </Dropdown.Button>
      </div>
      <div className="header__logo-box">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <CategoryMenu isHeader />
      <Modal
        title="Settings"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" type="danger" onClick={() => setVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" loading={confirmLoading} onClick={handleSave}>
            Save
          </Button>
        ]}
      >
        <CountryAndCategories
          selectCountryLabel="Change Country"
          selectCategoriesLabel="Make Changes to Categories of Interest"
          selectedCountry={selectedCountry}
          handleCountry={handleCountry}
          selectedCategories={selectedCategories}
          handleCategory={handleCategory}
        />
      </Modal>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  userCountry: selectUserCountry,
  userPreferredCategories: selectUserPreferredCategories
});

const mapDispatchToProps = dispatch => ({
  setUserCountry: country => dispatch(setUserCountry(country)),
  setPreferredCategories: categories =>
    dispatch(setUserPreferredCategories(categories)),
  fetchCategories: () => dispatch(fetchCategoriesStart()),
  fetchCategoriesHeadlines: () => dispatch(fetchCategoryHeadlinesStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
