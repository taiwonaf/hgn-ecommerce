import { JBLVibe } from "@/assets/images/productsImage";
import {  Star1 } from "iconsax-react";
import Image from "next/image";
import React from "react";

const CheckoutProduct = () => {
  return (
    <div className="rounded-[16px] py-5 w-full bg-white flex flex-betwwen items-center gap-4">
      <div className="flex justify-center items-center bg-mainBg rounded-[12px] max-w-[187px] w-full h-full p-3">
        <div className="max-w-[80px] w-full h-[88px]">
          <Image
            src={JBLVibe}
            alt="Product image"
            height={128}
            width={116}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2">
          <h2 className="text-lg font-medium text-primary">Airpods Max</h2>
        </div>
        <p className="text-xs text-subText line-clamp-1 mb-3 w-full">
          A perfect balance for high-fidelity audio
        </p>
        <div className="mb-2">
          <div className="flex justify-start items-center gap-1">
            <div className="flex gap-1.5 justify-start items-center mr-1.5">
              <Star1 size="12" className="text-starGreen" variant="Bold" />
              <Star1 size="12" className="text-starGreen" variant="Bold" />
              <Star1 size="12" className="text-starGreen" variant="Bold" />
              <Star1 size="12" className="text-starGreen" variant="Bold" />
            </div>
            <span className="text-subText text-base font-medium">
              (123 reviews)
            </span>
          </div>
        </div>
        <span className="text-[20px] font-medium text-primary">$545.00</span>
      </div>
    </div>
  );
};

export default CheckoutProduct;
