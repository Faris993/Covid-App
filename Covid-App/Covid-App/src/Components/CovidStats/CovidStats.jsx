import React, { useContext, useState } from "react";
import { MyDataContext } from "../../Context/Provider";
import {
  DarkContainer,
  StyledCard,
  StyledTypography,
  StyledPagination,
} from "./covidStats.style";
import { Grid, Alert, CardContent, CardMedia } from "@mui/material";

const CovidStats = () => {
  const { data, loading, error } = useContext(MyDataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(9);

  if (loading) return <h1>&#9763;...</h1>;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = Array.isArray(data)
    ? data.slice(indexOfFirstData, indexOfLastData)
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <DarkContainer>
      <StyledTypography variant="h3" component="h1" gutterBottom>
        Covid-19 Statistics
      </StyledTypography>
      <Grid container spacing={4}>
        {currentData.map((country) => (
          <Grid
            item
            key={country.country || country.name}
            xs={12}
            sm={6}
            md={4}
          >
            <StyledCard>
              <CardContent>
                <StyledTypography variant="h5" component="h2">
                  {country.country || "Unknown Country"}
                </StyledTypography>
                <StyledTypography variant="body2" color="textSecondary">
                  Continent: {country.continent || "Unknown"}
                </StyledTypography>
                <StyledTypography variant="body2" color="textSecondary">
                  Population:{" "}
                  {country.population
                    ? country.population.toLocaleString()
                    : "N/A"}
                </StyledTypography>
                <StyledTypography variant="body2" color="textSecondary">
                  New Cases:{" "}
                  {country.cases && country.cases.new
                    ? country.cases.new
                    : "N/A"}
                </StyledTypography>
                <StyledTypography variant="body2" color="textSecondary">
                  Deaths:{" "}
                  {country.deaths && country.deaths.total
                    ? country.deaths.total
                    : "N/A"}
                </StyledTypography>
              </CardContent>
              <CardMedia
                component="img"
                alt={`${country.country || "Unknown Country"} flag`}
                height="140"
                image={`https://countryflagsapi.com/png/${
                  country.country || "Unknown Country"
                }`}
              />
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <StyledPagination
        count={Math.ceil(data.length / dataPerPage)}
        page={currentPage}
        onChange={paginate}
        variant="outlined"
        color="secondary"
      />
    </DarkContainer>
  );
};

export default CovidStats;
