import React from "react";

import countryHandler from "countrycitystatejson";
import CountriesShortName from "../../localStore/countriesShortName";
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
    this.state = { countriesShortName: CountriesShortName, countries: [] };
  }
  componentDidMount() {
    const { countriesShortName, countries } = this.state;
    const countriesList = [];
    countriesShortName.map(short => {
      const result = countryHandler.getCountryByShort(short.toUpperCase());
      countriesList.push({
        name: result.name,
        shortName: short.toUpperCase(),
        emoji: result.emoji
      });
      this.setState({ countries: countriesList });
    });
  }

  handleChange = event => {
    console.log(event);
  };

  render() {
    const { countries } = this.state;
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
              <Option value={country.shortName} label={country.name}>
                <span role="img" aria-label={country.shortName}>
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
            <Option value="technology" label="Technology">
              Technology
            </Option>
            <Option value="business" label="Business">
              Business
            </Option>
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
