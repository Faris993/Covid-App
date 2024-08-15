import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  NavbarContainer,
  ToolbarContainer,
  LogoContainer,
  LogoImage,
  NavLinks,
  StyledLink,
  ProfileIcon,
} from "./NavBar.style";

const Navbar = () => {
  return (
    <NavbarContainer position="static">
      <ToolbarContainer>
        <LogoContainer to="/">
          <LogoImage
            src="/src/Components/NavBar/Images/green_logo.png"
            alt="Logo"
          />
          <Typography variant="h6" ml={1}></Typography>
        </LogoContainer>
        <NavLinks>
          <StyledLink to="/countrystats">Country Stats</StyledLink>
          <StyledLink to="/covidstats">Covid Stats</StyledLink>
          <StyledLink to="/aboutus">About Us</StyledLink>
        </NavLinks>
      </ToolbarContainer>
    </NavbarContainer>
  );
};

export default Navbar;
