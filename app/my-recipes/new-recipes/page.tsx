import BreadcrumbsNav from "@/components/breadcrumbs/breadcrumbs";
import { Button, InputLabel, Typography } from "@mui/material";
import { Save } from "@mui/icons-material";
import HeaderLine from "@/components/header-line/header-line";
import { NormalInputBaseStyle } from "@/components/style-component/inputbase-style";
import IngredientsInputGroup from "@/components/my-recipes/ingredients-input-group/ingredients-input-group";
import InstructionsInputGroup from "@/components/my-recipes/instruction-input-group/instruction-input-group";

export default function NewRecipes() {
  return (
    <>
      <BreadcrumbsNav />

      <div className="mt-4"></div>

      <div className="grid grid-cols-4">
        <div className="col-start-2 col-span-2 flex items-center">
          <div className="flex items-center w-full px-10">
            <InputLabel>
              <Typography variant="h4">ชื่อขนม</Typography>
            </InputLabel>
            <NormalInputBaseStyle
              className="flex-1 mx-5"
              placeholder="ชื่อขนม"
            />
          </div>
        </div>
        <div>
          <Button variant="contained" color="secondary" startIcon={<Save />}>
            บันทึก
          </Button>
        </div>
      </div>

      <div className="mt-4"></div>

      <HeaderLine text="ส่วนผสม" />
      <IngredientsInputGroup />

      <HeaderLine text="วิธีทำ" />
      <InstructionsInputGroup />

      <HeaderLine text="#โน๊ต" />
      <NormalInputBaseStyle
        fullWidth
        multiline
        minRows={3}
        maxRows={10}
        className="mt-5"
        placeholder="จดโน๊ต..."
      />
    </>
  );
}
