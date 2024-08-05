"use client";

import { Login } from "@mui/icons-material";
import { AuthButtonStyle } from "../auth-button-style";
import { useState } from "react";
import LoginDialog from "./login-dialog/login-dialog";
import AuthDialog from "../auth-dialog/auth-dialog";
import RegisterDialog from "./register-dialog/register-dialog";

export default function LoginButton() {
  const [openLoginDialog, setOpenLoginDialog] = useState<boolean>(false);
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true);

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

      <AuthDialog
        title={
          isLoginPage ? "ยินดีต้อนรับสู่ Bakerlist!" : "สมัครบัญชี Bakerlist"
        }
        onClose={() => setOpenLoginDialog(false)}
        open={openLoginDialog}
      >
        {isLoginPage ? (
          <LoginDialog onChangePage={() => setIsLoginPage(false)}></LoginDialog>
        ) : (
          <RegisterDialog
            onChangePage={() => setIsLoginPage(true)}
          ></RegisterDialog>
        )}
      </AuthDialog>
    </>
  );
}
