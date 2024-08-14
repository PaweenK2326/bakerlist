"use client";

import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IngredientsInputTableFooter from "./ingredients-input-table-footer";

export default function IngredientsInputTable() {
  const rows: GridRowsProp = [
    {
      id: 1,
      name: "แป้งอเนกประสงค์ - ตราว่าว",
      quantity: "150",
      unit: "กรัม",
      price: "45",
    },
    {
      id: 2,
      name: "แป้งเค้ก - มงกุฎม่วง",
      quantity: "100",
      unit: "กรัม",
      price: "4",
    },
  ];

  const columns: GridColDef[] = [
    { field: "name", headerName: "ชื่อวัตถุดิบ", flex: 2 },
    { field: "quantity", headerName: "ปริมาณ", flex: 1 },
    { field: "unit", headerName: "หน่วย", flex: 1 },
    { field: "price", headerName: "ราคา(บาท)", flex: 1 },
    {
      field: "actions",
      type: "actions",
      minWidth: 80,
      flex: 0.3,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon sx={{ color: "#875852" }} />}
          label="แก้ไข"
          showInMenu
        />,
        <GridActionsCellItem
          icon={<DeleteIcon sx={{ color: "red" }} />}
          label="ลบ"
          showInMenu
        />,
      ],
    },
  ];

  return (
    <DataGrid
      autoHeight
      rowSelection={false}
      rows={rows}
      columns={columns}
      slots={{
        footer: IngredientsInputTableFooter,
      }}
    />
  );
}
