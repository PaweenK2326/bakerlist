import Link from "next/link";
import classes from "./main-header.module.css";
import NavLink from "../nav-link/nav-link";
import Image from "next/image";
import logo from "@/public/bakerlist-logo.png";
import AuthButton from "./auth-button/auth-button";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className="w-full grid grid-cols-6">
        <div className="col-start-2 col-span-4 flex justify-between">
          <Link href="/">
            <Image src={logo} alt="bakerlist-logo" height={50} priority />
          </Link>
          <nav className="flex items-center gap-20">
            <NavLink href="/">หน้าแรก</NavLink>
            <NavLink href="/ingredients">วัตถุดิบ</NavLink>
            <NavLink href="/my-recipes">สูตรขนม</NavLink>
          </nav>
          <div className="flex items-center">
            <AuthButton></AuthButton>
          </div>
        </div>
      </div>
    </header>
  );
}
