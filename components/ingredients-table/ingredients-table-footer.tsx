import { Box, MenuItem, Select, SxProps } from "@mui/material";
import { LabelInputBaseStyle } from "../label-input/label-input-style";
import { GridFooterContainer, GridPagination } from "@mui/x-data-grid";
import AddIconButton from "../buttons/add-icon-button/add-icon-button";

export default function IngredientsTableFooter() {
  const inputStyleProps: SxProps = {
    textAlign: "center",
    flex: 1,
    margin: "0 3px",
  };

  return (
    <GridFooterContainer
      sx={{
        flexDirection: "column",
        alignItems: "end",
      }}
    >
      <Box sx={{ py: 1, display: "flex", width: "100%" }}>
        <LabelInputBaseStyle
          type="text"
          placeholder="ชื่อวัตถุดิบ"
          sx={inputStyleProps}
        />
        <LabelInputBaseStyle type="text" placeholder="แบรนด์" sx={inputStyleProps} />
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
        <LabelInputBaseStyle type="number" placeholder="ราคา" sx={inputStyleProps} />
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

      <GridPagination />
    </GridFooterContainer>
  );
}
