import BreadcrumbsNav from "@/components/breadcrumbs/breadcrumbs";
import IngredientsTable from "@/components/ingredients-table/ingredients-table";
import { Typography } from "@mui/material";

export default function Ingredients() {
  return (
    <>
      <BreadcrumbsNav />
      <div className="mt-1"></div>
      <Typography variant="body1" gutterBottom>
        *แนะนำให้เพิ่มรายการวัตถุดิบทั้งหมด พร้อมระบุปริมาณและราคาให้ถูกต้อง
        เพื่อความแม่นยำในการคำนวณต้นทุนของขนม
      </Typography>

      <div className="mt-4"></div>
      
      <IngredientsTable></IngredientsTable>
    </>
  );
}
