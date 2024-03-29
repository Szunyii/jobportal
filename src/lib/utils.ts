import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./db/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//test section
export async function getSome() {
  console.log("first function");
  await new Promise((res) => setTimeout(res, 2000));
  console.log("getSend end");
  return null;
}

export async function getRandom() {
  console.log("second function");
  await new Promise((res) => setTimeout(res, 3000));
  console.log("getR end");

  return "f";
}

export function toSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
