"use client";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const AuthDialogStyle = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    width: "700px",
    borderRadius: 15,
    color: "#875852",
    backgroundColor: "#FFFCFA",
  },
  "& .MuiDialogTitle-root": {
    textAlign: "center",
    fontSize: 30,
    padding: "16px 24px 5px 24px",
  },
  "& .MuiDialogContent-root": {
    padding: "0 0 24px 0",
  }
}));
