import React from "react";
import {
  FooterContainer,
  SocialLinks,
  NavLinks,
  StyledLink,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "./footer.styled";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <StyledLink href="https://facebook.com" target="_blank">
          <FacebookIcon />
        </StyledLink>
        <StyledLink href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </StyledLink>
        <StyledLink href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </StyledLink>
      </SocialLinks>
      <NavLinks>
        <StyledLink href="/covidstats">Covid Stats</StyledLink>
        <StyledLink href="/countrystats">Country Stats</StyledLink>
        <StyledLink href="/aboutus">About Us</StyledLink>
      </NavLinks>
      <Typography variant="body2">
        © 2023 COVID-APP. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
