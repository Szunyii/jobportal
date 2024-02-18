"use client";
import { User2Icon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const UserButton = () => {
  // (
  //   <div className="flex space-x-2">
  //     <Link
  //       className={buttonVariants({ size: "sm", variant: "ghost" })}
  //       href="/auth/signin"
  //     >
  //       Login
  //     </Link>
  //     <Link className={buttonVariants({ size: "sm" })} href="/auth/signup">
  //       Get started
  //     </Link>
  //   </div>
  // ) : (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <User2Icon />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem onClick={() => {}}>Sign out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>;
};

export default UserButton;
