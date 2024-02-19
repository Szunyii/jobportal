"use client";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";
import { setUserToDb } from "./action";

const AuthcallbackPage = () => {
  const { user } = useClerk();
  const type = user?.unsafeMetadata!.type;
  const userId = user?.id! as string;
  const email = user?.primaryEmailAddress?.emailAddress!;

  // valami nem százak még egyszer ránézni

  useEffect(() => {
    setUserToDb({ userId, email, type });
  }, [userId, email, type]);

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default AuthcallbackPage;
