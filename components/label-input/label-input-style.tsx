"use client";

import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const InputBaseStyle = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 30,
    position: "relative",
    backgroundColor: "#F9F3EE",
    border: 0,
    color: "#4A4A4A",
    width: "100%",
    padding: "5px 15px 5px 20px",
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
