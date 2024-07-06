import { JBLVibe } from "@/assets/images/productsImage";
import { Add, Minus, Star1, Trash, Warning2 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const CartProduct = () => {
  return (
    <div className="rounded-[16px] w-full p-5 bg-white flex flex-betwwen items-center gap-4">
      <div className="flex justify-center items-center bg-mainBg rounded-[12px] max-w-[152px] w-full p-3">
        <div className="max-w-[116px] w-full h-[128px]">
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
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[20px] font-medium text-primary">Airpods Max</h2>
          <div>
            <Trash
              size="32"
              className="text-black hover:text-black/80 duration-300 transition-colors"
              variant="Bold"
            />
          </div>
        </div>
        <p className="text-base text-subText line-clamp-1 mb-3 w-full">
          A perfect balance for high-fidelity audio
        </p>
        <div className="flex justify-between items-center mb-3">
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
          <div className="flex justify-end gap-1 items-center">
            <Warning2 size="16" className="text-redText font-medium" />
            <span className="text-redText text-base font-medium">
              6 units left
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[20px] font-medium text-primary">$545.00</span>
          <div className="flex justify-between items-center gap-1 max-w-[80px] w-full">
            <Button className="bg-mainBg rounded-[4px] p-0 h-6 w-6 transition-colors duration-200 hover:bg-mainBg/80">
              <Minus size="16" className="text-primary" />
            </Button>
            <span className="text-base font-semibold  text-primary">1</span>
            <Button className="bg-primary rounded-[4px] p-0 h-6 w-6 transition-colors duration-200 hover:bg-primary/80">
              <Add size="16" variant="Linear" className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
