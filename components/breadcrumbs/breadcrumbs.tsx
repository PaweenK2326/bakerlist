"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavLink from "../nav-link/nav-link";
import { usePathname } from "next/navigation";
import { Typography } from "@mui/material";
import { translate } from "@/utils/utils-function";

export default function BreadcrumbsNav() {
  const path: string = usePathname();
  const pathnames: string[] = path.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      separator={
        <NavigateNextIcon
          sx={{
            marginTop: "24px",
            color: "#875852",
          }}
        />
      }
      aria-label="breadcrumb"
    >
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <NavLink href={to} key={index}>
            <Typography variant="h3" mt={"24px"}>
              {translate(value)}
            </Typography>
          </NavLink>
        );
      })}
    </Breadcrumbs>
  );
}
