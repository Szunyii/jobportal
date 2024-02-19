import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Companiepage = async () => {
  return (
    <main className="h-screen w-full p-8 flex flex-col justify-start">
      <div className="flex space-y-5 flex-col mt-8">
        <h1 className="text-6xl font-semibold">
          Post your job ad on{" "}
          <span className="bg-gradient-to-r from-red-400 to-rose-700 bg-clip-text text-transparent relative">
            JobSpace
            <span className=" -z-10 border-2 border-red-500 absolute w-48 h-48 -top-16 left-[60px] rounded-full blur-[8px]" />
          </span>
        </h1>
        <h2 className="text-4xl font-thin">
          Find your dream employee with our free advertising package
        </h2>
      </div>
      <div className="mt-24">
        <p className="font-medium">Make an account and post job immediately</p>
        <Link
          className={cn(buttonVariants({ size: "lg" }), "mt-5")}
          href="/companies/sign-up"
        >
          Make an account
        </Link>
      </div>
    </main>
  );
};

export default Companiepage;
