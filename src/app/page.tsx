"use client";

import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="w-full p-3">
        <div className="mx-auto max-w-fit mt-5">
          <h1 className="text-7xl font-semibold text-center">
            Find your future job <br /> in Space
          </h1>
        </div>
      </div>
      {/* searching  */}
      <div className="w-8/12 mx-auto mt-24">
        <SearchBar />
      </div>
    </main>
  );
}
