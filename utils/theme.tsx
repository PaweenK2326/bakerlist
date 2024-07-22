"use client";

import { myFont } from "@/fonts/font";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: myFont.style.fontFamily,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#875852",
              color: "#FFFFFF",
              fontSize: 20,
              padding: "7px 40px",
              "&:hover": {
                backgroundColor: "#724b46",
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "secondary" && {
              backgroundColor: "#FFCA64",
              color: "#875852",
              fontSize: 20,
              padding: "7px 40px",
              "&:hover": {
                backgroundColor: "#efbc5b",
              },
            }),
        }),
      },
    },
  },
});
