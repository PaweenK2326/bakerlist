import { Divider, Typography } from "@mui/material";

interface HeaderLineProps {
  text: string;
}

export default function HeaderLine(props: HeaderLineProps) {
  const { text } = props;

  return (
    <div className="flex w-full items-center">
      <Typography variant="h4">{text}</Typography>
      <Divider sx={{ mx: 2, borderColor: "#875852", border: 1, flex: 1 }} />
    </div>
  );
}
