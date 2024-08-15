import { Container, Card, Typography, Pagination } from "@mui/material";
import { styled } from "@mui/system";

export const DarkContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "hsla(0, 0%, 20%, 0.9)",
  color: "#e0e0e0",
  minHeight: "100vh",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  marginBottom: "20px",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1f1f1f",
  color: "#e0e0e0",
  border: `1px solid #333`,
  "& .MuiCardContent-root": {
    padding: theme.spacing(2),
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#00ff00",
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "#00ff00",
  },
  marginTop: theme.spacing(2),
}));
