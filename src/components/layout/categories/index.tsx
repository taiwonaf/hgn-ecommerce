"use client";

import React, { useState } from "react";
import { ArrowDown2 } from "iconsax-react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const categories = [
    {
      title: "Airpods",
    },
    {
      title: "Powerbanks",
    },
    {
      title: "Phone case",
    },
    {
      title: "Chargers",
    },
    {
      title: "Protective screens",
    },
  ];
  return (
    <>
      <div className="border-t-subText hidden md:block overflow-hidden border-t-[1px] border-b-[1px] border-b-subText py-6 px-4">
        <div className="max-w-[1240px] w-full mx-auto flex justify-start items-center gap-12">
          {categories?.map((category, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer text-lg font-medium ${
                index === activeIndex ? "text-primary" : "text-subText"
              }`}
            >
              {category?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden gap-1 px-4 flex justify-start items-center cursor-pointer">
        <span className="text-primary font-medium text-lg  duration-300 transition-all hover:text-primary/80">
          {categories[activeIndex]?.title}
        </span>
        <ArrowDown2
          className="font-bold text-primary duration-300 transition-all hover:text-primary/80"
          stroke="20px"
          size="18"
        />
      </div>
    </>
  );
};

export default Categories;
