"use client";

import { Heart } from "iconsax-react";
import React, { useState } from "react";

const FovouriteToggle = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      onClick={() => setActive(!active)}
      className="flex justify-center cursor-pointer items-center w-8 h-8 rounded-full bg-white absolute top-[10px] right-[10px]"
    >
      <Heart
        size="18"
        variant={active ? "Bold" : "Outline"}
        className="text-primary"
      />
    </div>
  );
};

export default FovouriteToggle;
