import Typography from "@mui/material/Typography";
import AuthDialog from "../../auth-dialog/auth-dialog";
import LabelInput from "@/components/label-input/label-input";
import Button from "@mui/material/Button";
import NavLink from "@/components/nav-link/nav-link";

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginDialog(props: LoginDialogProps) {
  const { onClose, open } = props;

  return (
    <AuthDialog
      title="ยินดีต้อนรับสู่ Bakerlist!"
      onClose={onClose}
      open={open}
    >
      <Typography variant="body1" align="center" gutterBottom>
        กรุณาเข้าสู่ระบบเพื่อใช้งานเมนูนี้
      </Typography>
      <div className="mt-5"></div>
      <LabelInput
        label="ชื่อผู้ใช้/ อีเมล"
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
      <div className="mt-3"></div>
      <Button fullWidth variant="contained" color="secondary">
        เข้าสู่ระบบ
      </Button>
    </AuthDialog>
  );
}
