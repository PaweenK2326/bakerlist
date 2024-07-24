"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

interface NavProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export default function NavLink(props: NavProps) {
  const { href, children, isActive } = props;

  const path: string = usePathname();

  let linkClass: string = classes.link;
  if (isActive || path === href) {
    linkClass += ` ${classes.active}`;
  }

  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}
