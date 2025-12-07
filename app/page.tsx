"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);

  const handleCategoryToggle = (prevState: Boolean) => {
    console.log("Active State: ", active);
    setActive(!prevState);
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
            <Button
              className={`${
                active
                  ? "bg-[#FFE2E2]"
                  : "bg-[#FFF9FB] text-slate-500 text-[17px] rounded-full hover:bg-[#FFE2E2] hover:scale-110 duration-300"
              }`}
              onClick={() => handleCategoryToggle(prevState)}
            >
              Feeds
            </Button>
            <Button
              className={`bg-[#FFF9FB] text-slate-500 text-[17px] rounded-full hover:bg-[#FFE2E2] hover:scale-110 duration-300`}
            >
              All
            </Button>
            <Button
              className={`bg-[#FFF9FB] text-slate-500 text-[17px] rounded-full hover:bg-[#FFE2E2] hover:scale-110 duration-300`}
            >
              Following
            </Button>
            <Button
              className={`bg-[#FFF9FB] text-slate-500 text-[17px] rounded-full hover:bg-[#FFE2E2] hover:scale-110 duration-300`}
            >
              Latest
            </Button>
            <Button
              className={`bg-[#FFF9FB] text-slate-500 text-[17px] rounded-full hover:bg-[#FFE2E2] hover:scale-110 duration-300`}
            >
              Popular
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
