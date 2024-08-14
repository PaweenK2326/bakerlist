"use client";

import { myFont } from "@/fonts/font";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";

let theme = createTheme({
  palette: {
    primary: {
      main: "#875852",
      dark: "#724b46",
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
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 15,
          padding: "7px 40px",
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#875852",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#724b46",
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "secondary" && {
              backgroundColor: "#FFCA64",
              color: "#875852",
              "&:hover": {
                backgroundColor: "#efbc5b",
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "info" && {
              backgroundColor: "#FFFFFF",
              color: "#4A4A4A",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }),
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiPaper-root": {
            borderRadius: 15,
            color: "#875852",
            backgroundColor: "#FFFCFA",
            minWidth: 200,
            boxShadow: "#DBBBB7 0 4px 10px",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#D9D9D9",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#875852",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cell": {
            color: "#4A4A4A",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
