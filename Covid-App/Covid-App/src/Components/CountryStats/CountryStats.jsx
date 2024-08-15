import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Heading,
  FormGroup,
  Label,
  Select,
  DateInput,
  ShowStats,
  StatGroup,
  StatLabel,
  StatValue,
} from "./CountStat.style";
import CountrySelector from "./CountrySelector";
import DateSelector from "./DateSelector";
import CovidStats from "./CovidStats";

// Funkcija prosledjuje danasnji dan
const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = (today.getMonth() + 1).toString().padStart(2, "0");
  const dd = today.getDate().toString().padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// Funkcija formatira datum u DD.MM.YYYY
const formatDate = (dateString) => {
  const [yyyy, mm, dd] = dateString.split("-");
  return `${dd}.${mm}.${yyyy}`;
};

const CovidCountries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Serbia");
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [covidData, setCovidData] = useState({
    newCases: "N/A",
    deaths: "N/A",
    recovered: "N/A",
    active: "N/A",
  });

  //request metoda
  useEffect(() => {
    const fetchCountries = async () => {
      const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/countries",
        headers: {
          "x-rapidapi-key":
            "1d7970ad3dmsh618ba1033be6002p1ca22ejsnbbc74117df71",
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setCountries(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  //request metoda: kada biramo drzavu i datum
  useEffect(() => {
    if (selectedCountry && selectedDate) {
      const fetchCovidData = async () => {
        const options = {
          method: "GET",
          url: `https://covid-193.p.rapidapi.com/history?country=${selectedCountry}&day=${selectedDate}`,
          headers: {
            "x-rapidapi-key":
              "1d7970ad3dmsh618ba1033be6002p1ca22ejsnbbc74117df71",
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          const data = response.data.response[0];
          console.log(data);
          setCovidData({
            newCases: data.cases.new || "N/A",
            deaths: data.deaths.total || "N/A",
            recovered: data.cases.recovered || "N/A",
            active: data.cases.active || "N/A",
          });
        } catch (error) {
          console.error(error);
          setCovidData({
            newCases: "No Data",
            deaths: "No Data",
            recovered: "No Data",
            active: "No Data",
          });
        }
      };

      fetchCovidData();
    }
  }, [selectedCountry, selectedDate]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Formatiran datum za prikazivanje
  const formattedDate = formatDate(selectedDate);

  return (
    <Container>
      <Heading>Covid Countries Data</Heading>
      <FormGroup>
        <CountrySelector
          countries={countries}
          selectedCountry={selectedCountry}
          onCountryChange={handleCountryChange}
        />
      </FormGroup>
      <FormGroup>
        <DateSelector
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
      </FormGroup>
      <ShowStats>
        <h2>
          Covid Data on {formattedDate} <br />
          for {selectedCountry}
        </h2>
        <CovidStats covidData={covidData} />
      </ShowStats>
    </Container>
  );
};

export default CovidCountries;
