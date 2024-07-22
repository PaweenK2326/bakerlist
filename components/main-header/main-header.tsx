import Link from "next/link";
import classes from "./main-header.module.css";
import NavLink from "../nav-link/nav-link";
import ProfileButton from "../profile-button/profile-button";
import Image from "next/image";
import logo from "@/public/bakerlist-logo.png";

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
            <NavLink href="/ingredient">วัตถุดิบ</NavLink>
            <NavLink href="/recipe">สูตรขนม</NavLink>
          </nav>
          <div className="flex items-center">
            <ProfileButton></ProfileButton>
          </div>
        </div>
      </div>
    </header>
  );
}
