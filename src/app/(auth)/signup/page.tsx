import MaxWidthWraper from "@/components/MaxWidthWraper";
import SignupForm from "@/components/SignupForm";
import React from "react";

const SignupPage = () => {
  return (
    <MaxWidthWraper className="mt-10 mx-auto max-w-xl">
      <SignupForm />
    </MaxWidthWraper>
  );
};

export default SignupPage;
