import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { Directions } from "@mui/icons-material";
import {
  Container,
  StatsContainer,
  StatCard,
  StatNumber,
  LinkContainer,
  CountryStatsCard,
} from "./home.style";

const Home = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          color: "#00ff00",
          fontWeight: "bold",
          fontSize: "5.5rem",
          marginTop: "100px",
          textShadow: "-5px 5px 2px rgba(0, 0, 0, 0.9)",
        }}
      >
        World Stats
      </Typography>
      <StatsContainer>
        <StatCard>
          <CardContent>
            <Typography variant="h6" component="h3" style={{ color: "yellow" }}>
              Recovered:
            </Typography>
            <StatNumber style={{ color: "green" }}>1,911,806,582</StatNumber>
          </CardContent>
        </StatCard>
        <StatCard>
          <CardContent>
            <Typography variant="h6" component="h3" style={{ color: "yellow" }}>
              Deaths:
            </Typography>
            <StatNumber style={{ color: "red" }}>21,032,028</StatNumber>
          </CardContent>
        </StatCard>
        <StatCard>
          <CardContent>
            <Typography variant="h6" component="h3" style={{ color: "yellow" }}>
              Active Cases:
            </Typography>
            <StatNumber style={{ color: "#00a2ff" }}>50,362,509</StatNumber>
          </CardContent>
        </StatCard>
        <LinkContainer to="/countrystats">
          <CountryStatsCard>
            <CardContent>
              <Typography
                variant="h6"
                component="h3"
                style={{ color: "yellow" }}
              >
                Country Stats
              </Typography>
              <StatNumber>Link</StatNumber>
            </CardContent>
          </CountryStatsCard>
        </LinkContainer>
      </StatsContainer>
    </Container>
  );
};

export default Home;
