import React from "react";
import { connect } from "react-redux";

import CountriesList from "../../localStore/countriesList";
import CATEGORIES from "../../localStore/CATEGORIES";
import { ReactComponent as Logo } from "../../assets/logos/siren-logo.svg";
// ACTIONS
import {
  setUserCountry,
  setUserPreferredCategories
} from "../../redux/user/user.action";

// Import components
import { Select } from "antd";

// Styles
import "antd/dist/antd.css";
import "./welcomepage.styles.scss";
const { Option } = Select;

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: CountriesList,
      categories: CATEGORIES,
      disabledCountry: false,
      disabledCategory: false,
      disabledButton: true,
      selectedCountry: [],
      selectedCategories: []
    };
  }

  handleCountry = event => {
    const { disabledCategory, countries } = this.state;
    if (event.length === 1) {
      this.setState({ disabledCountry: true });
      if (disabledCategory) this.setState({ disabledButton: false });
    }
    this.setState({ selectedCountry: event });
  };

  handleCategory = event => {
    const { disabledCountry } = this.state;

    if (event.length === 3) {
      this.setState({ disabledCategory: true });
      if (disabledCountry) this.setState({ disabledButton: false });
    }
    this.setState({ selectedCategories: event });
  };

  resetSelections = () => {
    this.setState({
      selectedCategories: [],
      selectedCountry: [],
      disabledButton: true,
      disabledCategory: false,
      disabledCountry: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { setCountry, setPreferredCategories } = this.props;
    const { countries, selectedCountry, selectedCategories } = this.state;
    //  GET SHORT NAME FOR COUNTRY AND SET IT
    try {
      const filteredCountry = countries.filter(
        country => country.name === selectedCountry[0]
      );
      const shortName = filteredCountry[0].shortName.toLowerCase();
      setCountry(shortName);
      setPreferredCategories(selectedCategories);
    } catch (error) {
      console.log("Can't set user country or categories");
    }
  };

  render() {
    const {
      countries,
      categories,
      disabledCountry,
      disabledCategory,
      disabledButton,
      selectedCountry,
      selectedCategories
    } = this.state;
    return (
      <div className="welcome-page">
        <div className="logo-container">
          <Logo className="logo-container__logo" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="select-country">
            <Select
              value={selectedCountry}
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
              value={selectedCategories}
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
            <button type="reset" onClick={() => this.resetSelections()}>
              <span>Rest</span>
            </button>
            <button disabled={disabledButton} type="submit">
              <span>Continue</span>
              <span className="button-arrow">&rarr;</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCountry: country => dispatch(setUserCountry(country)),
  setPreferredCategories: categories =>
    dispatch(setUserPreferredCategories(categories))
});

export default connect(
  null,
  mapDispatchToProps
)(WelcomePage);
