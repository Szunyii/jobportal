"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { NavigationMenu } from "./ui/navigation-menu";
import CompanieButton from "./CompanieButton";
import MaxWidthWraper from "./MaxWidthWraper";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  { name: "Jobs", href: "/jobs" },
  { name: "Self-branding", href: "/self-branding-profile" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="h-16 px-2 py-1 flex items-center ">
      <MaxWidthWraper className="flex items-center justify-between">
        <Link href="/" className="">
          <Image src={"/logo.png"} alt="logo" width={90} height={60} />
        </Link>
        {/* //liks */}
        <div className="flex space-x-1">
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
          <CompanieButton />
        </div>
        {/* companies */}
        {/* user buttons */}
        <div className="flex space-x-2">
          <Link
            className={buttonVariants({ size: "sm", variant: "ghost" })}
            href="/login"
          >
            Login
          </Link>
          <Link className={buttonVariants({ size: "sm" })} href="/register">
            Get started
          </Link>
        </div>
      </MaxWidthWraper>
    </nav>
  );
};

export default Navbar;
