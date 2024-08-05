import { AuthDialogStyle } from "./auth-dialog-style";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

interface DialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function AuthDialog(props: DialogProps) {
  const { title, onClose, open, children } = props;

  return (
    <AuthDialogStyle onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "#875852",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <div className="grid grid-cols-5">
          <div className="col-start-2 col-span-3">
            <LocalizationProvider dateAdapter={AdapterMoment}>
              {children}
            </LocalizationProvider>
          </div>
        </div>
      </DialogContent>
    </AuthDialogStyle>
  );
}
