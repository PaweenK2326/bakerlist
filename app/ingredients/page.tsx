import IngredientsTable from "@/components/ingredients-table/ingredients-table";
import { Typography } from "@mui/material";

export default function Ingredients() {
  return (
    <>
      <Typography variant="h1" mt={3} gutterBottom>
        รายการวัตถุดิบ
      </Typography>
      <Typography variant="body1" gutterBottom>
        *แนะนำให้เพิ่มรายการวัตถุดิบทั้งหมด พร้อมระบุปริมาณและราคาให้ถูกต้อง
        เพื่อความแม่นยำในการคำนวณต้นทุนของขนม
      </Typography>

      <div className="mt-3"></div>
      
      <IngredientsTable></IngredientsTable>
    </>
  );
}
