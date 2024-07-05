import {
  ChevronDown,
  HeartIcon,
  SearchIcon,
  ShoppingBag,
  ShoppingBasket,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-[1240px] w-full mx-auto flex justify-between items-center py-6 px-4">
        <div></div>
        <div className="max-w-[414px] w-full bg-white rounded-[12px] h-12 flex gap-2 justify-start items-center p-3">
          <SearchIcon className="w-6 h-6" />
          <input className="w-full border-none outline-none hover:outline-none" placeholder="Search" />
        </div>
        <div className="flex justify-between items-center max-w-[230px] w-full">
          <div className="flex justify-between gap-3 items-center w-auto">
            <span className="text-lg font-medium">EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="max-w-[130px] w-full flex justify-between items-center gap-3">
            <ShoppingBag className="h-6 w-6" />
            <HeartIcon className="h-6 w-6" />
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
