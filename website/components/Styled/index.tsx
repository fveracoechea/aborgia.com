import { styled, Typography } from "@mui/material";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: "center",
}));

SectionTitle.defaultProps = {
  variant: "h4"
};
