import { ICheckOutInfo } from "@/types/checkout.model";
import { Location } from "iconsax-react";
import React from "react";

interface IProp {
  data: ICheckOutInfo;
}

const CheckoutInfo: React.FC<IProp> = ({ data }) => {
  return (
    <div className="md:pt-3 md:pb-4">
      <h2 className="mb-3 text-sm px-4 md:px-0 md:text-base font-semibold text-text">
        {data?.title}
      </h2>
      <div className="bg-white px-4 py-4 md:py-0 nd:px-0 md:bg-transparent flex justify-between items-center">
        <div className="flex justify-start items-center gap-3 max-w-[240px] w-full">
          <data.icon size="22" className="text-primary" />
          <div>
            <h3 className="mb-1 text-text font-semibold text-[14px]">
              {data?.subTitle}
            </h3>
            <p className="text-subText font-medium text-[10px] md:text-xs">
              {data?.description}
            </p>
          </div>
        </div>
        <span className="text-text text-xs font-semibold underline p-2 rounded-[4px] cursor-pointer hover:bg-mainBg/60 duration-200 transition-colors">
          Edit
        </span>
      </div>
    </div>
  );
};

export default CheckoutInfo;
