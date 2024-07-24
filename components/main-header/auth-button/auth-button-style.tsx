"use client";

import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

export const AuthButtonStyle = styled(Button)<ButtonProps>(() => ({
  color: "#875852",
  backgroundColor: "#EDDCD2",
  "&:hover": {
    color: "#EDDCD2",
    backgroundColor: "#875852",
  },
}));
