import BreadcrumbsNav from "@/components/breadcrumbs/breadcrumbs";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Recipes() {
  return (
    <>
      <BreadcrumbsNav />

      <div className="mt-4"></div>

      <div className="flex justify-end">
        <Link href="/my-recipes/new-recipes">
          <Button variant="contained" color="secondary">
            เพิ่มสูตรใหม่
          </Button>
        </Link>
      </div>
    </>
  );
}
