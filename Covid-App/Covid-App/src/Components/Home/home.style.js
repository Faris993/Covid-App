import { styled } from "@mui/system";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

// Container with dark background and green border
export const Container = styled(Box)({
  textAlign: "center",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "72vh",
});

// StatsContainer with dark background and green border
export const StatsContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
});

// StatCard with dark background, green border on hover
export const StatCard = styled(Card)({
  width: "250px",
  textAlign: "center",
  backgroundColor: "hsla(0, 0%, 20%, 0.7)", // Dark background
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // Darker shadow
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)", // Darker shadow on hover
    border: "1px solid #00ff00", // Vivid green border on hover
    backgroundColor: "#333",
  },
});

// StatNumber with vivid green color
export const StatNumber = styled(Typography)({
  fontSize: "1.5em",
  fontWeight: "bold",
  color: "#00ff00", // Vivid green text
});

// LinkContainer with no underline
export const LinkContainer = styled(Link)({
  textDecoration: "none",
  color: "#00ff00", // Vivid green text
});

// CountryStatsCard with vivid green color change on hover
export const CountryStatsCard = styled(StatCard)({
  "&:hover": {
    "& $StatNumber": {
      color: "#ff0000", // Change color to red on hover
    },
  },
});
