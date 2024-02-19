"use server";

import { toSlug } from "@/lib/utils";
import { nanoid } from "nanoid";
// import { put } from "@vercel/blob";
import path from "path";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db/prisma";
import { createJobSchema } from "@/lib/validators/validation";

export async function createJobPosting(formData: FormData) {
  //ezt átnézni itt valamiért form datát kell kapnia akkor működik jól
  const values = Object.fromEntries(formData.entries());

  const {
    companyName,
    locationType,
    minSalary,
    maxSalary,
    title,
    type,
    applicationEmail,
    applicationUrl,
    companyLogo,
    description,
    location,
  } = createJobSchema.parse(values);

  const slug = `${toSlug(title)}-${nanoid(10)}`;

  let companyLogoUrl: string | undefined = undefined;

  if (companyLogo) {
    const blob = await put(
      `company_logos/${slug}${path.extname(companyLogo.name)}`,
      companyLogo,
      {
        access: "public",
        addRandomSuffix: false,
      }
    );

    companyLogoUrl = blob.url;
  }

  await prisma.job.create({
    data: {
      slug,
      title: title.trim(),
      type,
      companyName: companyName.trim(),
      companyLogoUrl,
      locationType,
      location,
      applicationEmail: applicationEmail?.trim(),
      applicationUrl: applicationUrl?.trim(),
      description: description?.trim(),
      minSalary: parseInt(minSalary),
      maxSalary: parseInt(maxSalary),
    },
  });

  redirect("/job-submitted");
}
