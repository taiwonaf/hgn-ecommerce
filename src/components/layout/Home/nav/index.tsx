import { ChevronDown, HeartIcon, SearchIcon, ShoppingBag } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import LogoDark from "@/assets/images/shopnow-logo-dark.png";
import Link from "next/link";
import { HambergerMenu } from "iconsax-react";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-[1240px] w-full mx-auto flex justify-between items-center py-6 px-4">
        <Link href="/" className="h-[33px] w-[157px]">
          <Image
            src={LogoDark}
            alt="Shop now logo"
            height={157}
            width={33}
            className="w-full h-full object-contain"
          />
        </Link>
        <div className="hidden max-w-[414px] w-full bg-white rounded-[12px] h-12 md:flex gap-2 justify-start items-center p-3">
          <SearchIcon className="w-6 h-6 text-subText" />
          <input
            className="w-full text-primary placeholder:text-subText border-none outline-none hover:outline-none"
            placeholder="Search"
          />
        </div>
        <div className="hidden md:flex justify-between items-center max-w-[230px] w-full">
          <div className="flex justify-between gap-3 items-center w-auto cursor-pointer p-1.5 rounded-[8px] duration-300 transition-all hover:bg-subText/10">
            <span className="text-lg font-medium text-primary">EN</span>
            <ChevronDown className="w-4 h-4 text-primary" />
          </div>
          <div className="max-w-[130px] w-full flex justify-between items-center gap-3">
            <div className="p-1.5 rounded-[8px] duration-300 transition-all hover:bg-subText/10">
              <ShoppingBag className="h-6 w-6 text-primary font-light cursor-pointer" />
            </div>
            <div className="p-1.5 rounded-[8px] duration-300 transition-all hover:bg-subText/10">
              <HeartIcon className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer" />
            </div>
            <Avatar className="w-6 h-6 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex justify-center items-center md:hidden cursor-pointer p-1 rounded-[2px] duration-300 transition-all hover:bg-mainBg">
          <HambergerMenu size="32" className="text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
