import { styled } from "@mui/system";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// FooterContainer with dark background and green accents
export const FooterContainer = styled("footer")({
  backgroundColor: "#1e1e1e", // Dark background
  color: "#ffffff", // Light text color for contrast
  textAlign: "center",
  padding: "20px 0",
});

// SocialLinks with spacing and alignment
export const SocialLinks = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

// NavLinks with spacing and alignment
export const NavLinks = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  marginBottom: "10px",
});

// StyledLink with vivid green color and red hover effect
export const StyledLink = styled(MuiLink)({
  textDecoration: "none",
  color: "#00ff00", // Vivid green text
  fontSize: "1em",
  fontWeight: 600,
  "&:hover": {
    color: "#ff0000", // Red hover effect
  },
});

// Export icons for use in the Footer
export { FacebookIcon, InstagramIcon, TwitterIcon };
