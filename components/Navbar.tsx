import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownFill } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex px-10 items-center justify-between gap-5">
      {/* Logo */}
      <div className="h-full px-10">
        <h1 className="text-3xl">Artzy</h1>
      </div>

      {/* Search Field */}
      <div className="flex items-center bg-slate-100 px-4 rounded-full py-1 ml-8">
        <Input
          type="text"
          className="focus-visible:ring-0 border-none w-100"
          placeholder="Search"
        />
        <IoSearch className="size-7" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Action Toggles */}
      <div className="flex gap-5 items-center">
        <MdOutlinePeopleAlt className="size-6" />
        <BsChatDots className="size-6" />
        <IoNotificationsSharp className="size-6" />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center bg-slate-100 rounded-full">
              <div className="rounded-full bg-[#FDE3EC] size-10" />
              <RiArrowDropDownFill className="size-6" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center gap-1">
                <CgProfile />
                <p>Profile</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-1">
                <FaRegEdit />
                <p>Edit Profile</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="bg-red-200 hover:scale-105 transition duration-300 hover:border-red-200 hover:border-2">
              <div className="flex items-center gap-1 w-full hover:text-red-400">
                <IoIosLogOut className="hover:text-red-400" />
                <p>Log Out</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
