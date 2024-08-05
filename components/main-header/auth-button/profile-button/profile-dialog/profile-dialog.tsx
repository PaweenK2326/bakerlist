"use client";

import LabelDatepicker from "@/components/label-datepicker/label-datepicker";
import LabelInput from "@/components/label-input/label-input";
import MenuItem from "@mui/material/MenuItem";
import { alpha, Divider } from "@mui/material";
import { RoundButtonStyle } from "../../auth-button-style";
import { useState } from "react";

export default function ProfileDialog() {
  const [isShowEditPassword, setIsShowEditPassword] = useState<boolean>(false);

  return (
    <>
      <LabelInput
        label="ชื่อผู้ใช้งาน"
        isRequired
        placeholder="YukinaJang"
        type="text"
        value="YukinaJang"
      ></LabelInput>
      <div className="grid grid-cols-2 gap-3">
        <LabelDatepicker label="วัน/เดือน/ปีเกิด" isRequired></LabelDatepicker>
        <LabelInput label="เพศ" isRequired isSelect textAlign="center">
          <MenuItem value={"ชาย"}>ชาย</MenuItem>
          <Divider sx={{ mx: 3, my: 0.5, borderColor: "#875852", border: 1 }} />
          <MenuItem value={"หญิง"}>หญิง</MenuItem>
        </LabelInput>
      </div>
      <LabelInput
        label="อีเมล"
        isRequired
        placeholder="baker@email.com"
        type="email"
      ></LabelInput>

      {isShowEditPassword && (
        <>
          <LabelInput
            label="รหัสผ่านเดิม"
            isRequired
            placeholder="********"
            type="password"
          ></LabelInput>
          <LabelInput
            label="รหัสผ่านใหม่"
            isRequired
            placeholder="********"
            type="password"
          ></LabelInput>
          <LabelInput
            label="ยืนยันรหัสผ่านใหม่"
            isRequired
            placeholder="********"
            type="password"
          ></LabelInput>
        </>
      )}

      <div className="mt-3"></div>

      <RoundButtonStyle
        fullWidth
        variant="contained"
        sx={{
          boxShadow: "none",
          backgroundColor: "#F9F3EE",
          color: "#4A4A4A",
          "&:hover": {
            backgroundColor: "#F9F3EE",
            boxShadow: `${alpha("#875852", 0.25)} 0 0 0 0.2rem`,
            borderColor: "#875852",
          },
        }}
        onClick={() => setIsShowEditPassword(!isShowEditPassword)}
      >
        {isShowEditPassword ? "ยกเลิก" : ""}แก้ไขรหัสผ่าน
      </RoundButtonStyle>

      <div className="mt-3"></div>

      <RoundButtonStyle fullWidth variant="contained" color="secondary">
        บันทึก
      </RoundButtonStyle>
    </>
  );
}
