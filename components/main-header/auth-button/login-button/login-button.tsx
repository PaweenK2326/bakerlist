"use client";

import { Login } from "@mui/icons-material";
import { AuthButtonStyle } from "../auth-button-style";
import { useState } from "react";
import LoginDialog from "./login-dialog/login-dialog";

export default function LoginButton() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  return (
    <>
      <AuthButtonStyle
        variant="contained"
        color="inherit"
        onClick={() => setOpenLoginDialog(true)}
        startIcon={<Login />}
      >
        Login / Register
      </AuthButtonStyle>
      <LoginDialog
        open={openLoginDialog}
        onClose={() => setOpenLoginDialog(false)}
      ></LoginDialog>
    </>
  );
}
