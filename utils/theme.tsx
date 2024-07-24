"use client";

import { myFont } from "@/fonts/font";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#875852",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: myFont.style.fontFamily,
    button: {
      textTransform: "none",
    },
    allVariants: {
      color: "#875852",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 15,
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

theme = responsiveFontSizes(theme);

export default theme;
