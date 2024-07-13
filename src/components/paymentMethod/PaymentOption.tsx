import { IPaymentMethod } from "@/types/payment.model";
import Image from "next/image";
import React from "react";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface IProp {
  data: IPaymentMethod;
}

const PaymentOption: React.FC<IProp> = ({ data }) => {
  return (
    <div className="flex justify-between items-center gap-2 px-5 py-2 md:py-3 hover:bg-mainBg/50 duration-300 transition-colors">
      <Label
        htmlFor={data?.name}
        className="flex justify-start gap-2 cursor-pointer items-center max-w-[200px] w-full"
      >
        <div className="w-[15px] md:w-9 h-[15px] md:h-9 rounded-full flex justify-center items-center bg-greyBg">
          <Image
            alt={data?.name}
            src={data.img.src}
            height={18}
            width={18}
            className="object-contain"
          />
        </div>
        <span className="text-blackIcon font-normal text-sm md:text-base">
          {data?.name}
        </span>
      </Label>
      <RadioGroupItem value={data?.name} id={data?.name} />
    </div>
  );
};

export default PaymentOption;
