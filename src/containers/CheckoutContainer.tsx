"use client";

import { CheckoutInfo, CheckoutProduct } from "@/components";
import { Button } from "@/components/ui/button";
import { Box, Location } from "iconsax-react";
import { useRouter } from "next/navigation";
import React from "react";

const CheckoutContainer = () => {
  const router = useRouter();
  const info = [
    {
      title: "Shipping address",
      subTitle: "Home",
      description:
        "14, Akindele Close, off Idi-osan Bus-stop, Matogun, Ogun state.",
      icon: Location,
    },
    {
      title: "Choose shipping type",
      subTitle: "Economy",
      description: "Estimated date: 26 June 2024",
      icon: Box,
    },
  ];
  return (
    <div className="pb-12 md:px-4">
      <div className="md:rounded-[16px] md:bg-white py-3 md:py-7 max-w-[472px] w-full mx-auto">
        <div className="md:px-5">
          <h2 className="md:text-[28px] px-4 md:px-0 mb-3 md:mb-0 font-bold text-sm text-primary">
            Order List
          </h2>
          <div>
            <CheckoutProduct />
          </div>
        </div>
        <div className="bg-white md:bg-transparent p-3 flex justify-center items-center border-t-primary/40 border-b-primary/40 border-t-[1px] border-b-[1px] cursor-pointer hover:bg-mainBg/50 transition-colors duration-200">
          <span className="text-base md:text-[18px] hover:text-primary/80 duration-300 transition-colors text-primary">
            See all
          </span>
        </div>
        <div className="md:px-5 pt-3 md:pt-0 gap-3 grid md:gap-0">
          {info?.map((item, index) => (
            <CheckoutInfo data={item} key={index} />
          ))}
        </div>
        <div className="pt-6 px-5">
          <Button
            onClick={() => router.push("/payment-method")}
            className="bg-primary rounded-[12px] h-10 md:h-12 transition-colors text-base duration-300 hover:bg-primary/80 text-white w-full"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;
