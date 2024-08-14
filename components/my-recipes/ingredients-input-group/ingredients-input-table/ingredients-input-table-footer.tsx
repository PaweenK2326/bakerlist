import AddIconButton from "@/components/buttons/add-icon-button/add-icon-button";
import { LabelInputBaseStyle } from "@/components/label-input/label-input-style";
import { Box, MenuItem, Select, SxProps } from "@mui/material";
import { GridFooterContainer } from "@mui/x-data-grid";

export default function IngredientsInputTableFooter() {
  const inputStyleProps: SxProps = {
    textAlign: "center",
    flex: 1,
    margin: "0 3px",
  };

  return (
    <GridFooterContainer>
      <Box sx={{ py: 1, display: "flex", width: "100%" }}>
        <Select
          input={<LabelInputBaseStyle />}
          sx={{ ...inputStyleProps, flex: 2 }}
          MenuProps={{
            sx: {
              "& .MuiMenuItem-root": {
                justifyContent: "center",
              },
            },
          }}
        >
          <MenuItem value={"ของแห้ง"}>ของแห้ง</MenuItem>
          <MenuItem value={"ของเหลว"}>ของเหลว</MenuItem>
          <MenuItem value={"อื่นๆ"}>อื่นๆ</MenuItem>
        </Select>
        <LabelInputBaseStyle
          type="number"
          placeholder="ปริมาณ"
          sx={inputStyleProps}
        />
        <Select
          input={<LabelInputBaseStyle />}
          sx={inputStyleProps}
          MenuProps={{
            sx: {
              "& .MuiMenuItem-root": {
                justifyContent: "center",
              },
            },
          }}
        >
          <MenuItem value={"กรัม"}>กรัม</MenuItem>
          <MenuItem value={"ลิตร"}>ลิตร</MenuItem>
          <MenuItem value={"ฟอง"}>ฟอง</MenuItem>
        </Select>
        <LabelInputBaseStyle
          type="number"
          placeholder="ราคา"
          sx={inputStyleProps}
          disabled
        />
        <Box
          sx={{
            display: "flex",
            minWidth: 80,
            flex: 0.3,
            justifyContent: "center",
          }}
        >
          <AddIconButton />
        </Box>
      </Box>
    </GridFooterContainer>
  );
}
