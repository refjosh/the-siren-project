import React, { useState } from "react";

import CountriesList from "../../localStore/countriesList";
import CATEGORIES from "../../localStore/CATEGORIES";
// ACTIONS

// Import components
import { Select } from "antd";

// Styles
import "antd/dist/antd.css";
import "./country-and-categories.styles.scss";
const { Option } = Select;

const CountryAndCategories = ({
  selectCountryLabel,
  selectCategoriesLabel,
  selectedCountry,
  handleCountry,
  selectedCategories,
  handleCategory
}) => {
  const [countries] = useState(CountriesList);
  const [categories] = useState(CATEGORIES);
  return (
    <div>
      <div className="select-country">
        <p>{selectCountryLabel}</p>
        <Select
          value={selectedCountry}
          style={{ width: "100%" }}
          placeholder="Select a Country"
          onChange={handleCountry}
          optionLabelProp="label"
        >
          {countries.map((country, index) => (
            <Option key={index} value={country.name} label={country.name}>
              <span role="img" aria-label={country.name}>
                {country.emoji}
              </span>
              {country.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="select-categories">
        <p>{selectCategoriesLabel}</p>
        <Select
          value={selectedCategories}
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Select Three or More Categories of Interest"
          onChange={handleCategory}
          optionLabelProp="label"
        >
          {categories.map((category, index) => (
            <Option key={index} value={category} label={category.toUpperCase()}>
              {category.toUpperCase()}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CountryAndCategories;
