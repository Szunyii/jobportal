"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import CompanieButton from "./CompanieButton";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
const links = [
  { name: "Jobs", href: "/jobs" },
  // { name: "Self-branding", href: "/self-branding-profile" },
];

const ClientNav = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-row items-center gap-1">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "nav",
                }),
                "bg-transparent text-secondary-foreground"
              )}
            >
              For companies <ChevronDown size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ClientNav;
