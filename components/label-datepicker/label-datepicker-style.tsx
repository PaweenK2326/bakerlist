"use client";

import { alpha, styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

export const DatePickerStyle = styled(DatePicker)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-root": {
    paddingRight: 15,
  },
  "& .MuiInputBase-input": {
    borderRadius: 30,
    color: "#4A4A4A",
    padding: "5px 3px 5px 20px",
    zIndex: 2,
  },
  "& .MuiInputAdornment-root": {
    marginLeft: 0,
    zIndex: 2,
  },
  "& .MuiButtonBase-root": {
    padding: 5,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
  },
  "& fieldset": {
    borderRadius: 30,
    backgroundColor: "#F9F3EE",
    border: 0,
    zIndex: 1,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
