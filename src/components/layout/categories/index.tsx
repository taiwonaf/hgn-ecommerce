"use client"

import React, { useState } from "react";

const Categories = () => {
    const [ activeIndex, setActiveIndex ] = useState<number>(0)
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
    <div className="border-t-subText border-t-[1px] border-b-[1px] border-b-subText py-6 px-4">
      <div className="max-w-[1240px] w-full mx-auto flex justify-start items-center gap-12">
        {categories?.map((category, index) => (
          <div key={index} onClick={() => setActiveIndex(index)} className={`cursor-pointer text-lg font-medium ${index === activeIndex ? "text-primary" : "text-subText"}`}>{category?.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
