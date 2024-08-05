"use client";

import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import IngredientsTableFooter from "./ingredients-table-footer";

export default function IngredientsTable() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const rows: GridRowsProp = [
    {
      id: 1,
      name: "แป้งอเนกประสงค์",
      brand: "ตราว่าว",
      type: "ของแห้ง",
      quantity: "1,000",
      unit: "กรัม",
      price: "34",
    },
    {
      id: 2,
      name: "แป้งเค้ก",
      brand: "มงกุฎม่วง",
      type: "ของแห้ง",
      quantity: "1,000",
      unit: "กรัม",
      price: "41",
    },
  ];

  const columns: GridColDef[] = [
    { field: "name", headerName: "ชื่อวัตถุดิบ", flex: 1 },
    { field: "brand", headerName: "แบรนด์", flex: 1 },
    { field: "type", headerName: "ชนิด", flex: 1 },
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
          icon={<FileCopyIcon sx={{ color: "#875852" }} />}
          label="คัดลอก"
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
      pageSizeOptions={[10, 25, 50]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      slots={{
        footer: IngredientsTableFooter,
      }}
    />
  );
}
