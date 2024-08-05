import { Box, IconButton, MenuItem, Select, SxProps } from "@mui/material";
import { InputBaseStyle } from "../label-input/label-input-style";
import { GridFooterContainer, GridPagination } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

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
        <InputBaseStyle
          type="text"
          placeholder="ชื่อวัตถุดิบ"
          sx={inputStyleProps}
        />
        <InputBaseStyle type="text" placeholder="แบรนด์" sx={inputStyleProps} />
        <Select
          input={<InputBaseStyle />}
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
        <InputBaseStyle
          type="number"
          placeholder="ปริมาณ"
          sx={inputStyleProps}
        />
        <Select
          input={<InputBaseStyle />}
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
        <InputBaseStyle type="number" placeholder="ราคา" sx={inputStyleProps} />
        <Box
          sx={{
            display: "flex",
            minWidth: 80,
            flex: 0.3,
            justifyContent: "center",
          }}
        >
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
        </Box>
      </Box>

      <GridPagination />
    </GridFooterContainer>
  );
}
