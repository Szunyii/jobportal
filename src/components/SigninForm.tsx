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
import { signinSchema, signinSchemaType } from "@/lib/validators/auth";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<signinSchemaType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: signinSchemaType) => {
    try {
      setIsLoading(true);

      console.log(data);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card className="p-4 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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

export default SigninForm;

// function signIn(
//   arg0: string,
//   arg1: { email: any; password: any; redirect: boolean; callbackUrl: string }
// ) {
//   throw new Error("Function not implemented.");
// }
