import Typography from "@mui/material/Typography";
import LabelInput from "@/components/label-input/label-input";
import { RoundButtonStyle } from "../../auth-button-style";
import Icon from "@mui/material/Icon";
import Image from "next/image";
import facebookIconImage from "@/public/icons/ic_outline-facebook.png";
import googleIconImage from "@/public/icons/ic_google.png";

interface LoginDialogProps {
  onChangePage: () => void;
}

export default function LoginDialog(props: LoginDialogProps) {
  const { onChangePage } = props;

  const facebookIcon = (
    <Icon>
      <Image src={facebookIconImage} alt="facebook-icon" />
    </Icon>
  );
  const googleIcon = (
    <Icon>
      <Image src={googleIconImage} alt="google-icon" />
    </Icon>
  );

  return (
    <>
      <Typography variant="body1" align="center" gutterBottom>
        กรุณาเข้าสู่ระบบเพื่อใช้งานเมนูนี้
      </Typography>
      <div className="mt-5"></div>
      <LabelInput
        label="ชื่อผู้ใช้/ อีเมล"
        isRequired
        placeholder="baker@email.com"
        type="text"
      ></LabelInput>
      <LabelInput
        label="รหัสผ่าน"
        isRequired
        placeholder="********"
        type="password"
      ></LabelInput>

      <div className="mt-3"></div>

      <RoundButtonStyle fullWidth variant="contained" color="secondary">
        เข้าสู่ระบบ
      </RoundButtonStyle>
      <div className="flex justify-center mt-2">
        <Typography
          align="center"
          className="text-sm text-gray-400 hover:text-gray-500 underline cursor-pointer"
        >
          ลืมรหัสผ่าน?
        </Typography>
      </div>

      <div className="mt-4"></div>

      <RoundButtonStyle
        fullWidth
        variant="contained"
        color="info"
        startIcon={facebookIcon}
      >
        เข้าสู่ระบบผ่านบัญชี Facebook
      </RoundButtonStyle>
      <div className="mt-3"></div>
      <RoundButtonStyle
        fullWidth
        variant="contained"
        color="info"
        startIcon={googleIcon}
      >
        เข้าสู่ระบบผ่านบัญชี Google
      </RoundButtonStyle>

      <div className="mt-7"></div>

      <Typography align="center" className="text-sm text-gray-400">
        ยังไม่มีบัญชีผู้ใช้ใช่หรือไม่?
        <span
          className="text-base underline cursor-pointer text-[#875852] hover:text-[#724b46] ml-1"
          onClick={onChangePage}
        >
          สมัครใหม่
        </span>
      </Typography>
    </>
  );
}
