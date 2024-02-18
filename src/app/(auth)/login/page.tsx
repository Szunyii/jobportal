"use client";
import MaxWidthWraper from "@/components/MaxWidthWraper";
import SigninForm from "@/components/SigninForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

const SigninPage = () => {
  return (
    <MaxWidthWraper className="mt-32 mx-auto max-w-xl">
      <Card className="w-full flex items-center p-6">
        <Button onClick={() => {}} className="mx-auto">
          Login with google
        </Button>
      </Card>
    </MaxWidthWraper>
  );
};

export default SigninPage;
