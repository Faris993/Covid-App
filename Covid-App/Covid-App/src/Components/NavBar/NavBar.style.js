import { styled } from "@mui/system";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

// Dark Navbar with green accents
export const NavbarContainer = styled(AppBar)({
  backgroundColor: "#1e1e1e", // Dark background
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)", // Darker shadow
  height: 70,
});

// Flex container for the toolbar with spacing
export const ToolbarContainer = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
});

// Logo container with vivid green text
export const LogoContainer = styled(Link)({
  textDecoration: "none",
  color: "#00ff00", // Vivid green
  display: "flex",
  alignItems: "center",
});

// Logo image with consistent size
export const LogoImage = styled("img")({
  width: 170,
  height: 80,
  marginLeft: 30,
});

// Container for navigation links with spacing
export const NavLinks = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginLeft: "auto",
});

// Navigation links with vivid green color and red hover effect
export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#00ff00", // Vivid green
  fontSize: "1.5em",
  fontWeight: 600,
  "&:hover": {
    color: "#ff0000", // Red hover effect
  },
});

// Profile icon with vivid green color
export const ProfileIcon = styled(IconButton)({
  color: "#00ff00", // Vivid green
});
