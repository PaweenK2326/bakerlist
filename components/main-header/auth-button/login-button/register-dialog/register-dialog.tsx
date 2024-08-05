import Typography from "@mui/material/Typography";
import { RoundButtonStyle } from "../../auth-button-style";
import LabelInput from "@/components/label-input/label-input";
import LabelDatepicker from "@/components/label-datepicker/label-datepicker";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";

interface RegisterDialogProps {
  onChangePage: () => void;
}

export default function RegisterDialog(props: RegisterDialogProps) {
  const { onChangePage } = props;

  return (
    <>
      <LabelInput
        label="ชื่อผู้ใช้งาน"
        isRequired
        placeholder="YukinaJang"
        type="text"
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
      <LabelInput
        label="รหัสผ่าน"
        isRequired
        placeholder="********"
        type="password"
      ></LabelInput>
      <LabelInput
        label="ยืนยันรหัสผ่าน"
        isRequired
        placeholder="********"
        type="password"
      ></LabelInput>

      <div className="mt-3"></div>

      <RoundButtonStyle fullWidth variant="contained" color="secondary">
        ลงทะเบียน
      </RoundButtonStyle>

      <div className="mt-7"></div>

      <Typography align="center" className="text-sm text-gray-400">
        กลับไปยังหน้า
        <span
          className="text-base underline cursor-pointer text-[#875852] hover:text-[#724b46] ml-1"
          onClick={onChangePage}
        >
          เข้าสู่ระบบ
        </span>
      </Typography>
    </>
  );
}
