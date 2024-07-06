import { ICheckOutInfo } from "@/types/checkout.model";
import { Location } from "iconsax-react";
import React from "react";

interface IProp {
  data: ICheckOutInfo;
}

const CheckoutInfo: React.FC<IProp> = ({ data }) => {
  return (
    <div className="pt-3 pb-4">
      <h2 className="mb-3 text-base font-semibold text-text">{data?.title}</h2>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-3 max-w-[240px] w-full">
          <data.icon size="32" className="text-primary" />
          <div>
            <h3 className="mb-1 text-text font-semibold text-[14px]">
              {data?.subTitle}
            </h3>
            <p className="text-subText font-medium text-xs">
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
