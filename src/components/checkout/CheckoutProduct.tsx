import { JBLVibe } from "@/assets/images/productsImage";
import { ICartProduct } from "@/redux/slices/cart/type";
import { Star1 } from "iconsax-react";
import Image from "next/image";
import React from "react";

interface IProp {
  data: ICartProduct;
}

const CheckoutProduct: React.FC<IProp> = ({ data }) => {
  return (
    <div className="md:rounded-[16px] px-4 md:px-0 py-4 md:py-5 w-full bg-white md:border-none border-b border-t border-b-subText/40 border-t-subText/40 flex flex-betwwen items-center gap-3 md:gap-4">
      <div className="flex justify-center items-center border md:border-none border-subText/40 bg-mainBg rounded-[12px] md:max-w-[187px] h-[85px] md:h-[114px] w-full max-w-[85px] p-3">
        <div className="max-w-[80px] w-full h-[88px]">
          <Image
            src={data?.images[0]}
            alt="Product image"
            height={128}
            width={116}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start">
        <div className="mb-1 md:mb-2">
          <h2 className="text-xs md:text-lg font-medium text-primary">
            {data?.name}
          </h2>
        </div>
        <p className="text-[10px] md:text-xs text-subText line-clamp-1 mb-1 md:mb-3 w-full">
          {data?.description}
        </p>
        <div className="mb-1 md:mb-2">
          <div className="flex justify-start items-center gap-1">
            <div className="flex gap-1.5 justify-start items-center mr-1.5">
              <Star1 size="12" className="text-starGreen" variant="Bold" />
              <Star1 size="12" className="text-starGreen" variant="Bold" />
              <Star1 size="12" className="text-starGreen" variant="Bold" />
              <Star1 size="12" className="text-starGreen" variant="Bold" />
            </div>
            <span className="text-subText text-[10px] md:text-base font-medium">
              (123 reviews)
            </span>
          </div>
        </div>
        <span className="text-xs md:text-[20px] font-medium text-primary">
          ${data?.price.toLocaleString()}.00
        </span>
      </div>
    </div>
  );
};

export default CheckoutProduct;
