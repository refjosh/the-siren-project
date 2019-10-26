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
    this.state = { countries: CountriesList, categories: CATEGORIES };
  }

  handleChange = event => {
    console.log(event);
  };

  render() {
    const { countries, categories } = this.state;
    console.log(countries);
    return (
      <div className="welcome-page">
        <div className="logo-container">
          <Logo className="logo-container__logo" />
        </div>
        <div className="select-country">
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select one country"
            onChange={this.handleChange}
            optionLabelProp="label"
          >
            {countries.map(country => (
              <Option value={country.name} label={country.name}>
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
            placeholder="Select preferred categories"
            onChange={this.handleChange}
            optionLabelProp="label"
          >
            {categories.map(category => (
              <Option value={category} label={category}>
                {category.toUpperCase()}
              </Option>
            ))}
          </Select>
        </div>
        <div className="continue-box">
          <button>
            Continue
            <span className="button-arrow">&rarr;</span>
          </button>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
