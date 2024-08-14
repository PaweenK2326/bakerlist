import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

export default function AddIconButton() {
  return (
    <IconButton
      sx={{
        padding: "4px",
      }}
    >
      <AddIcon
        sx={{
          color: "#875852",
          fontWeight: "bolder",
          fontSize: "2rem",
        }}
      />
    </IconButton>
  );
}
