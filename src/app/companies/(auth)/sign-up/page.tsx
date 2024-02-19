import { SignIn, SignUp } from "@clerk/nextjs";
import React from "react";

const SignupPage = () => {
  return (
    <div className="mx-auto max-w-md mt-6 p-2">
      <SignUp unsafeMetadata={{ type: "companie" }} />
    </div>
  );
};

export default SignupPage;
