"use server";

import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const setUserToDb = async ({ userId, email, type }: any) => {
  const dbUser = await prisma.user.findFirst({ where: { id: userId } });

  if (!dbUser) {
    await prisma.user.create({
      data: {
        id: userId!,
        email,
        type,
      },
    });

    redirect("/");
  }
};
