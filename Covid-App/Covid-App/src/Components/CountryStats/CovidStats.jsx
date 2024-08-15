import React from "react";
import { StatGroup, StatLabel, StatValue } from "./CountStat.style";

const CovidStats = ({ covidData }) => (
  <>
    <StatGroup>
      <StatLabel>New Cases:</StatLabel>
      <StatValue color="purple">{covidData.newCases}</StatValue>
    </StatGroup>
    <StatGroup>
      <StatLabel>Deaths:</StatLabel>
      <StatValue color="red">{covidData.deaths}</StatValue>
    </StatGroup>
    <StatGroup>
      <StatLabel>Recovered:</StatLabel>
      <StatValue color="green">{covidData.recovered}</StatValue>
    </StatGroup>
    <StatGroup>
      <StatLabel>Active:</StatLabel>
      <StatValue>{covidData.active}</StatValue>
    </StatGroup>
  </>
);

export default CovidStats;
