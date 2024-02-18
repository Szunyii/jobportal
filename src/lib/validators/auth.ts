import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(4, { message: "password is must be at least 4 character" }),
  firstName: z.string().min(2, { message: "name is invalid" }),
  lastName: z.string().min(2, { message: "name is invalid" }),
  userType: z.enum(["PRIVATE", "COMPANIE"]),
});

export type signUpSchemaType = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type signinSchemaType = z.infer<typeof signinSchema>;
