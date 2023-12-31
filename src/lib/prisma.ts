// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };
// //estension miatt nem export
// const prismaBase = globalForPrisma.prisma ?? new PrismaClient();

// export const prisma = prismaBase.$extends({});
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaBase;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
