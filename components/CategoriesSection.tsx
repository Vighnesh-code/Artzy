import React from "react";
import { RiGalleryView2 } from "react-icons/ri";
import { MdPeople } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FaLaptopFile } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

const CategoriesSection = () => {
  const categoryData = [
    {
      id: 1,
      name: "Feed",
      icon: RiGalleryView2,
    },
    {
      id: 2,
      name: "Friends",
      icon: MdPeople,
    },
    {
      id: 3,
      name: "Event",
      icon: LuCalendar,
    },
    {
      id: 4,
      name: "Photos",
      icon: MdOutlinePhotoSizeSelectActual,
    },
    {
      id: 5,
      name: "Files",
      icon: FaLaptopFile,
    },
  ];

  return (
    <div className="flex flex-col gap-10 min-w-60 px-7 py-10">
      <div className="flex flex-col gap-3 justify-center">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="flex items-center gap-4 w-full bg-[#FDE3EC] hover:bg-white hover:border-2 hover:border-[#FDE3EC] hover:cursor-pointer hover:scale-110 hover:text-slate-500 duration-300 rounded-full py-2 px-5"
          >
            {/* {category.icon} */}
            <category.icon className="size-5" />
            <h1 className="text-[17px] font-semibold">{category.name}</h1>
          </div>
        ))}
      </div>

      <Separator />
    </div>
  );
};

export default CategoriesSection;
