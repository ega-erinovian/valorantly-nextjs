"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`py-2 px-4 ${
        pathName === link.url &&
        "bg-color-primary text-color-white hover:text-color-white ring-2 ring-color-white"
      } hover:ring-2 hover:ring-color-white`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
