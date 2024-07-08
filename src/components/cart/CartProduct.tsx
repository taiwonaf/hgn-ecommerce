import { JBLVibe } from "@/assets/images/productsImage";
import { Add, Minus, Star1, Trash, Warning2 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const CartProduct = () => {
  return (
    <div className="md:rounded-[16px] w-full px-0 md:px-5 p-5 border-b-subText md:border-none border-b-[1px] md:bg-white flex flex-betwwen items-center gap-4">
      <div className="flex justify-center items-center border-subText border-[1px] md:border-none bg-[#FAFAFA] md:bg-mainBg rounded-[12px] max-w-[85px] md:max-w-[152px] h-[85px] md:h-[154px] w-full p-3">
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
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xs md:text-[20px] font-medium text-primary">
            Airpods Max
          </h2>
          <div>
            <Trash
              size="18"
              className="text-black hover:text-black/80 duration-300 transition-colors"
              variant="Bold"
            />
          </div>
        </div>
        <div className="flex md:block justify-between items-center gap-1">
          <p className="text-[10px] md:text-base max-w-[140px] md:max-w-0 text-subText line-clamp-2 md:line-clamp-1 mb-1 md:mb-3 w-full">
            A perfect balance for high-fidelity audio
          </p>
          <span className="md:hidden text-redText text-[10px] md:text-base font-medium">
            6 units left
          </span>
        </div>
        <div className="md:flex justify-between hidden items-center mb-1 md:mb-3">
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
            <span className="text-redText text-[10px] md:text-base font-medium">
              6 units left
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs md:text-[20px] font-medium text-primary">
            $545.00
          </span>
          <div className="flex justify-between items-center gap-1 max-w-[80px] w-full">
            <Button className="bg-mainBg md:rounded-[4px] p-0 rounded-[8px] h-4 md:h-6 w-4 md:w-6 transition-colors duration-200 hover:bg-mainBg/80">
              <Minus size="16" className="text-primary" />
            </Button>
            <span className="text-xs md:text-base font-semibold  text-primary">
              1
            </span>
            <Button className="bg-primary rounded-[4px] p-0 h-4 w-4 md:h-6 md:w-6 transition-colors duration-200 hover:bg-primary/80">
              <Add size="16" variant="Linear" className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
