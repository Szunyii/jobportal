import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import MaxWidthWraper from "./MaxWidthWraper";
import ClientNav from "./ClientNav";
import {
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
  currentUser,
} from "@clerk/nextjs";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <nav className="h-16 px-2 py-1 flex items-center mt-2">
      <MaxWidthWraper className="flex items-center justify-between">
        <Link href="/" className="">
          <Image src={"/logo.png"} alt="logo" width={90} height={60} />
        </Link>
        {/* //liks */}
        <div className="flex space-x-1">
          <ClientNav />
        </div>
        {/* Kezeleni a frissítésből adódó próblémát */}
        {!user ? (
          <div className="flex space-x-2">
            <div className={buttonVariants({ variant: "ghost" })}>
              <SignInButton />
            </div>
            <div className={buttonVariants()}>
              <SignUpButton />
            </div>
          </div>
        ) : (
          <UserButton />
        )}
      </MaxWidthWraper>
    </nav>
  );
};

export default Navbar;
