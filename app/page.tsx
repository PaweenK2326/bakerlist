import Image from "next/image";
import headerImg from "@/public/top-view-hands-holding-bowl-with-flour 1.png";
import ingredientsImg from "@/public/arrangement-different-ingredients-delicious-recipe 1.png";
import cakeImg from "@/public/delicious-sweet-cake-with-strawberries-baiser-plate 2.png";
import preparingImg from "@/public/close-up-cook-preparing-dessert 1.png";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Image
        src={headerImg}
        alt="top-view-hands-holding-bowl-with-flour"
        className="shadow-md shadow-[#DBBBB7] w-full"
      />

      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Button variant="contained" color="secondary" size="large">
            วัตถุดิบ
          </Button>
          <p>เพิ่มรายการวัตถุดิบและราคาเพื่อคำนวณต้นทุนของขนม</p>
        </div>
        <Image
          src={ingredientsImg}
          alt="arrangement-different-ingredients-delicious-recipe"
          className="shadow-md shadow-[#DBBBB7] w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image
            src={cakeImg}
            alt="delicious-sweet-cake-with-strawberries-baiser-plate"
            className="shadow-md shadow-[#DBBBB7] w-full mb-3"
          />
          <Button variant="contained" color="primary" size="large">
            ค้นหาสูตรขนม
          </Button>
          <p>ค้นหาสูตรใหม่ๆ จากชาว Baker</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image
            src={preparingImg}
            alt="delicious-sweet-cake-with-strawberries-baiser-plate"
            className="shadow-md shadow-[#DBBBB7] w-full mb-3"
          />
          <Button variant="contained" color="primary" size="large">
            สูตรของฉัน
          </Button>
          <p>เพิ่มสูตรขนมของคุณ</p>
        </div>
      </div>
    </div>
  );
}
