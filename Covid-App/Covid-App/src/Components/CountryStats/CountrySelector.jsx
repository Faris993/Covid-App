import React from "react";
import { Select, Label } from "./CountStat.style";

const CountrySelector = ({
  countries,

  selectedCountry,
  onCountryChange,
}) => (
  <>
    <Label htmlFor="country-select">Select Country:</Label>
    <Select
      id="country-select"
      value={selectedCountry}
      onChange={onCountryChange}
    >
      <option value="">Select a country</option>
      {countries.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </Select>
  </>
);

export default CountrySelector;
