"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import CompanieButton from "./CompanieButton";
import { usePathname } from "next/navigation";
import { Select } from "./ui/select";
const links = [
  { name: "Jobs", href: "/jobs" },
  { name: "Self-branding", href: "/self-branding-profile" },
];

const ClientNav = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          className={cn(
            buttonVariants({
              size: "sm",
              variant: "nav",
            }),

            { "text-rose-500": pathname === link.href }
          )}
          key={link.name}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
      {/* <CompanieButton /> */}
      {/* Select itemé alakítani */}
      <Select></Select>
    </>
  );
};

export default ClientNav;
