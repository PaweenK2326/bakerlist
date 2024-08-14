import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

interface DeleteIconButtonProps {
  onClick: () => void;
}

export default function DeleteIconButton(props: DeleteIconButtonProps) {
  const { onClick } = props;

  return (
    <IconButton
      sx={{
        padding: "4px",
      }}
      onClick={onClick}
    >
      <CancelIcon
        sx={{
          color: "red",
          fontWeight: "bolder",
          fontSize: "2rem",
        }}
      />
    </IconButton>
  );
}
