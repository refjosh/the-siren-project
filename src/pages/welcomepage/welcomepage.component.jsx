import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CountriesList from "../../localStore/countriesList";
import { ReactComponent as Logo } from "../../assets/logos/siren-logo.svg";
// Import components
import CountryAndCategories from "../../components/country-and-categories/country-and-categories.component";
// ACTIONS
import {
  setUserCountry,
  setUserPreferredCategories
} from "../../redux/user/user.action";

import {
  fetchCategoriesStart,
  fetchCategoryHeadlinesStart
} from "../../redux/category/category.actions";

// Styles
import "./welcomepage.styles.scss";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: CountriesList,
      disabledButton: true,
      selectedCountry: [],
      selectedCategories: []
    };
  }

  handleCountry = event => {
    const { selectedCategories } = this.state;
    //     ENABLE CONTINUE BUTTON IS USER HAS SELECTED UP TO 3 OR MORE CATEGORIES
    if (selectedCategories.length >= 3) {
      this.setState({ disabledButton: false });
    }
    this.setState({ selectedCountry: event });
  };

  handleCategory = event => {
    const { selectedCountry } = this.state;
    //     ENABLE CONTINUE BUTTON IS USER HAS SELECTED UP TO 3 OR MORE CATEGORIES AND A COUNTRY
    this.setState({ disabledButton: true });
    if ((event.length >= 3) & (selectedCountry.length !== 0)) {
      this.setState({ disabledButton: false });
    }

    this.setState({ selectedCategories: event });
  };

  resetSelections = () => {
    //   RESETS FORM WHEN RESET BUTTON IS CLICKED
    this.setState({
      selectedCategories: [],
      selectedCountry: [],
      disabledButton: true
    });
  };
  // SUBMIT SELECTIONS
  handleSubmit = event => {
    const {
      setCountry,
      setPreferredCategories,
      fetchCategories,
      fetchCategoriesHeadlines,
      history
    } = this.props;
    const { countries, selectedCountry, selectedCategories } = this.state;
    console.log(selectedCountry, selectedCategories);
    //  GET SHORT NAME FOR COUNTRY AND SET IT
    let country = null;
    try {
      const filteredCountry = countries.filter(
        country => country.name === selectedCountry
      );
      country = filteredCountry[0];
      setCountry(country);
      setPreferredCategories(selectedCategories);
    } catch (error) {
      console.log("Can't set user country or categories");
    }
    fetchCategories();
    fetchCategoriesHeadlines();
    return history.push(`/news/${country.shortName.toLowerCase()}`);
  };

  render() {
    const { disabledButton, selectedCountry, selectedCategories } = this.state;
    return (
      <div className="welcome-page">
        <div className="logo-container">
          <Logo className="logo-container__logo" />
        </div>
        <CountryAndCategories
          selectedCountry={selectedCountry}
          handleCountry={this.handleCountry}
          selectedCategories={selectedCategories}
          handleCategory={this.handleCategory}
        />
        <div className="continue-box">
          <button
            className="reset-button"
            type="reset"
            onClick={() => this.resetSelections()}
          >
            <span>Reset</span>
          </button>
          <button
            className="continue-button"
            disabled={disabledButton}
            type="button"
            onClick={() => this.handleSubmit()}
          >
            <span>Continue</span>
            <span className="button-arrow">&rarr;</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCountry: country => dispatch(setUserCountry(country)),
  setPreferredCategories: categories =>
    dispatch(setUserPreferredCategories(categories)),
  fetchCategories: () => dispatch(fetchCategoriesStart()),
  fetchCategoriesHeadlines: () => dispatch(fetchCategoryHeadlinesStart())
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(WelcomePage));
