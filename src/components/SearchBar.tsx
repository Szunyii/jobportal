"use client";
import React from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobsCatergory } from "@/lib/baseData";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const submitHandler = () => {};

  return (
    <Card className="px-4 py-2 flex flex-col md:flex-row space-x-2 items-center ">
      <div className="border-r p-2">
        <Label htmlFor="query">Search</Label>
        <Input
          className="mt-2"
          id="query"
          type="text"
          placeholder="Post, Keyword"
        />
      </div>

      <div className="border-r p-2">
        <Label>Category</Label>
        <Select>
          <SelectTrigger className="w-[180px] mt-2">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="max-h-52 w-[200px]">
            {jobsCatergory.map((item) => (
              <SelectItem key={item.category} value={item.category.toString()}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};

export default SearchBar;

// IT BIG DATA
// Pénzügy, Gazdaság
// IT üzemeltetés
// Jog/Compliance
// Management
// Marketing, PR
// Irodai munka
// Mérnök
// Sales
// IT Development
// IT Project Management
// Egyéb
// HR
// Logisztika, Beszerzés
// Oktatás
// Design

/////--------
// Részmunkaidős

// Megbízási szerződés

// Teljes munkaidős

// Projekt
