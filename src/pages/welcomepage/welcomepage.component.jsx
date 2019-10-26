import React from "react";

import CountriesList from "../../localStore/countriesList";
import CATEGORIES from "../../localStore/CATEGORIES";
import { ReactComponent as Logo } from "../../assets/logos/siren-logo.svg";

// Import components
import { Select } from "antd";

// Styles
import "antd/dist/antd.css";
import "./welcomepage.styles.scss";

const { Option } = Select;

class WelcomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: CountriesList,
      categories: CATEGORIES,
      disabledCountry: false,
      disabledCategory: false,
      disabledButton: true
    };
  }

  handleCountry = event => {
    const { disabledCategory } = this.state;
    if (event.length === 1) {
      this.setState({ disabledCountry: true });
      if (disabledCategory) this.setState({ disabledButton: false });
      
    }
  };

  handleCategory = event => {
    const { disabledCountry } = this.state;
    if (event.length === 3) {
      this.setState({ disabledCategory: true });
      if (disabledCountry) this.setState({ disabledButton: false });
    }
  };

  resetSelections = () => {};

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const {
      countries,
      categories,
      disabledCountry,
      disabledCategory,
      disabledButton
    } = this.state;
    return (
      <div className="welcome-page">
        <div className="logo-container">
          <Logo className="logo-container__logo" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="select-country">
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Select one country"
              onChange={this.handleCountry}
              optionLabelProp="label"
            >
              {countries.map(country => (
                <Option
                  disabled={disabledCountry}
                  key={country.shortame}
                  value={country.name}
                  label={country.name}
                >
                  <span role="img" aria-label={country.name}>
                    {country.emoji}
                  </span>
                  {country.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="select-categories">
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Select 3 preferred categories"
              onChange={this.handleCategory}
              optionLabelProp="label"
            >
              {categories.map(category => (
                <Option
                  disabled={disabledCategory}
                  key={category}
                  value={category}
                  label={category}
                >
                  {category.toUpperCase()}
                </Option>
              ))}
            </Select>
          </div>
          <div className="continue-box">
            <button type="reset">
              <span>Rest</span>
            </button>
            <button
              disabled={disabledButton}
              type="button"
              onClick={() => console.log("click")}
            >
              <span>Continue</span>
              <span className="button-arrow">&rarr;</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default WelcomePage;
