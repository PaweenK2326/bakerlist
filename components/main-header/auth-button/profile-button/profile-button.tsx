"use client";

import { useState } from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import {
  Person,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { AuthButtonStyle } from "../auth-button-style";

const ColorMenu = styled(Menu)<MenuProps>(() => ({
  "& .MuiPaper-root": {
    borderRadius: 15,
    color: "#875852",
    backgroundColor: "#FFFCFA",
    minWidth: 200,
    boxShadow: "#DBBBB7 0 4px 10px",
  },
  "& .MuiMenuItem-root": {
    justifyContent: "center",
  },
}));

export default function ProfileButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      <ColorMenu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "profile-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>ข้อมูลผู้ใช้</MenuItem>
        <Divider sx={{ mx: 3, my: 0.5, borderColor: "#875852", border: 1 }} />
        <MenuItem onClick={handleClose}>ออกจากระบบ</MenuItem>
      </ColorMenu>
    </>
  );
}
