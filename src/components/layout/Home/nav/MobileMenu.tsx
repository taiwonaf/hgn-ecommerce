"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { HambergerMenu } from "iconsax-react";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navItems = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Search",
      route: "/",
    },
    {
      title: "Wishlists",
      route: "/",
    },
    {
      title: "My Carts",
      route: "/cart",
    },
    {
      title: "Profile",
      route: "/",
    },
  ];

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <SheetTrigger>
        <HambergerMenu size="32" className="text-primary" />
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="bg-white md:hidden h-screen w-full flex flex-col justify-start items-end"
      >
        <div className=" max-w-[126px] w-full flex flex-col">
          {navItems?.map((link, index) => (
            <Link
              key={index}
              href={link?.route}
              className="text-primary font-medium text-lg p-2"
              onClick={() => setMenuOpen(false)}
            >
              {link?.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
