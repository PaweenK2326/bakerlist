"use client";

import { NormalInputBaseStyle } from "@/components/style-component/inputbase-style";
import IngredientsInputTable from "./ingredients-input-table/ingredients-input-table";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIconButton from "@/components/buttons/delete-icon-button/delete-icon-button";

export default function IngredientsInputGroup() {
  const [groupCount, setGroupCount] = useState(1);

  function handleClickAdd() {
    setGroupCount(groupCount + 1);
  }
  function handleClickDelete() {
    setGroupCount(groupCount - 1);
  }

  return (
    <>
      {[...Array(groupCount)].map((_, i) => (
        <div key={i}>
          <div className="flex mt-5 gap-x-5">
            <NormalInputBaseStyle
              placeholder={`ส่วนที่ ${i + 1}`}
              className="flex-1"
            />
            <DeleteIconButton onClick={handleClickDelete} />
          </div>
          <div className="mt-3"></div>
          <IngredientsInputTable />
        </div>
      ))}

      <div className="flex justify-center w-full">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className="my-5"
          onClick={handleClickAdd}
        >
          เพิ่มส่วนที่ {groupCount + 1}
        </Button>
      </div>
    </>
  );
}
