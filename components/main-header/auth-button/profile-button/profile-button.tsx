"use client";

import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import {
  Person,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { AuthButtonStyle } from "../auth-button-style";
import AuthDialog from "../auth-dialog/auth-dialog";
import ProfileDialog from "./profile-dialog/profile-dialog";

export default function ProfileButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openLoginDialog, setOpenLoginDialog] = useState<boolean>(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClick = () => {
    setAnchorEl(null);
    setOpenLoginDialog(true);
  };

  return (
    <>
      <AuthButtonStyle
        id="profile-button"
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        color="inherit"
        disableElevation
        onClick={handleClick}
        startIcon={<Person />}
        endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      >
        Yukina@pigmail.com
      </AuthButtonStyle>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "profile-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          "& .MuiMenuItem-root": {
            justifyContent: "center",
          },
        }}
      >
        <MenuItem onClick={handleProfileClick}>ข้อมูลผู้ใช้</MenuItem>
        <Divider sx={{ mx: 3, my: 0.5, borderColor: "#875852", border: 1 }} />
        <MenuItem onClick={() => setAnchorEl(null)}>ออกจากระบบ</MenuItem>
      </Menu>

      <AuthDialog
        title="ข้อมูลผู้ใช้"
        onClose={() => setOpenLoginDialog(false)}
        open={openLoginDialog}
      >
        <ProfileDialog></ProfileDialog>
      </AuthDialog>
    </>
  );
}
