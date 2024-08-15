import { styled } from "@mui/material";
import { Card, CardMedia, Typography, Grid, Link } from "@mui/material";

const toxicDarkGreen = "#004d00"; // Define toxic dark green color

export const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  boxShadow: theme.shadows[4],
  backgroundColor: "rgba(0, 0, 0, 0.7)",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 250,
  height: 300,
  borderRadius: 10,
  margin: theme.spacing(2),
  position: "relative",
  paddingTop: theme.spacing(8),
  transition: "transform 0.1s ease-in-out",
  overflow: "visible",
  "&:hover": {
    transform: "scale(1.12)",
  },
  boxShadow: theme.shadows[3],
  backgroundColor: "#002200", // Darker shade of toxic dark green for the card background
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: "20%",
  position: "absolute",
  top: -105,
  left: "calc(50% - 75px)",
  border: "none",
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease-in-out",
  backgroundColor: toxicDarkGreen, // Background color for the media
}));

export const StyledTypographyName = styled(Typography)(({ theme }) => ({
  fontSize: "27px",
  fontWeight: 900,
  color: "#00ff00", // Vivid green for text
  textAlign: "center",
  marginBottom: theme.spacing(0),
  marginTop: theme.spacing(4),
}));

export const StyledTypographyCity = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 900,
  color: "#b0b0b0", // Light gray for city text
  textAlign: "center",
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

export const LineDiv = styled("div")(({ theme }) => ({
  borderTop: `2px solid ${toxicDarkGreen}`, // Line color
  margin: `${theme.spacing(2)} 0`,
}));

export const StyledTypographyDescription = styled(Typography)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 100,
  color: "#00ff00", // Vivid green for description text
  marginTop: "12px",
  textAlign: "center",
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(5),
}));

export const StyledGitHubLink = styled(Link)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)",
  color: "#00ff00", // Vivid green for GitHub link
  "&:hover": {
    color: "#004d00", // Toxic dark green on hover
  },
  svg: {
    fontSize: "2rem",
  },
}));

export const StyledFacebookLink = styled(Link)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: "20%",
  transform: "translateX(-50%)",
  color: "#00ff00", // Vivid green for Facebook link
  "&:hover": {
    color: "#004d00", // Toxic dark green on hover
  },
  svg: {
    fontSize: "2rem",
  },
}));

export const StyledInstagramLink = styled(Link)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: "80%",
  transform: "translateX(-50%)",
  color: "#00ff00", // Vivid green for Instagram link
  "&:hover": {
    color: "#004d00", // Toxic dark green on hover
  },
  svg: {
    fontSize: "2rem",
  },
}));
