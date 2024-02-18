"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "./ui/password-input";
import { signUpSchemaType, signupSchema } from "@/lib/validators/auth";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<signUpSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      userType: "PRIVATE",
    },
  });

  const onSubmit = async (data: signUpSchemaType) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "You are sign up",
          description: "Welcome on board",
        });
        setIsLoading(false);
        router.replace("/auth/signin");
      }

      // if (response.ok) {
      //   await signIn("credentials", {
      //     email: data.email,
      //     password: data.password,
      //     redirect: true,
      //     callbackUrl: "/",
      //   });
      // }
      console.log(data);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Try again later",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };
  return (
    <Card className="p-4 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex flex-wrap space-x-2 items-center justify-center w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Do" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="user@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="*******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} className="w-full" type="submit">
            {!isLoading ? (
              "Submit"
            ) : (
              <Loader2 className="h-2 w-2 animate-spin" />
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default SignupForm;
function signIn(
  arg0: string,
  arg1: { email: any; password: any; redirect: boolean; callbackUrl: string }
) {
  throw new Error("Function not implemented.");
}
