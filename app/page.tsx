"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Feeds");

  const categories = ["Feeds", "All", "Following", "Latest", "Popular"];

  const handleCategoryToggle = (category: string) => {
    setActiveCategory(category);
    console.log("Selected Category: ", category);
  };

  return (
    <div className="h-screen w-screen bg-[#FDE3EC]/20 py-10 px-7 rounded-2xl overflow-x-hidden flex flex-col gap-10">
      <div>
        <h1 className="text-2xl">Stories</h1>

        {/* Stories Component */}
        <div className="flex h-50 w-full gap-10 mt-5">
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
          <div className="bg-red-100 h-full w-40"></div>
        </div>
      </div>

      <div className="h-screen">
        <div className="flex justify-between">
          <h1 className="text-2xl">Recent Posts</h1>

          {/* Toggle Section */}
          <div className="flex gap-10">
            {categories.map((category) => (
              <Button
                key={category}
                className={`bg-white border-2 border-[#FFE2E2] text-slate-1000 text-[15px] font-semibold rounded-full hover:bg-[#FFE2E2] hover:scale-110 duration-300 ${
                  activeCategory === category && "bg-[#FFE2E2] scale-110"
                }`}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
