import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logos/siren-logo.svg";

import { Select } from "antd";
import CategoryMenu from "../category-menu/category-menu.component";

import { selectUserCountry } from "../../redux/user/user.selector";
import CountriesList from "../../localStore/countriesList";

import { setUserCountry } from "../../redux/user/user.action";

import "antd/dist/antd.css";
import "./header.styles.scss";

const { Option } = Select;

const Header = ({ userCountry, history, setCountry }) => {
  const handleChange = event => {
    try {
      const filteredCountry = CountriesList.filter(
        country => country.shortName === event
      );
      const country = filteredCountry[0];
      setCountry(country);
    } catch (error) {
      console.log("Can't set user country or categories");
    }
    return history.push("/news");
  };
  return (
    <header className="header">
      <div className="header__country">
        <Select
          onChange={handleChange}
          defaultValue={`${userCountry.emoji}${userCountry.shortName}`}
          style={{ width: 80 }}
        >
          {CountriesList.map((country, index) => (
            <Option key={index} value={country.shortName}>
              <span role="img" aria-label={country.shortName}>
                {country.emoji}
              </span>
              {country.shortName}
            </Option>
          ))}
        </Select>
      </div>
      <div className="header__logo-box">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <CategoryMenu isHeader />
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  userCountry: selectUserCountry
});
const mapDispatchToProps = dispatch => ({
  setCountry: country => dispatch(setUserCountry(country))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
