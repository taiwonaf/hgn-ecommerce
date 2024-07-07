"use client"

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
    <div className="pb-12 px-4">
      <div className="rounded-[16px] bg-white py-7 max-w-[472px] w-full mx-auto">
        <div className="px-5">
          <h2 className="text-[28px] font-bold text-primary">Order List</h2>
          <div>
            <CheckoutProduct />
          </div>
        </div>
        <div className="p-3 flex justify-center items-center border-t-primary border-b-primary border-t-[1px] border-b-[1px] cursor-pointer hover:bg-mainBg/50 transition-colors duration-200">
          <span className="text-[18px] text-primary">See all</span>
        </div>
        <div className="px-5">
          {info?.map((item, index) => (
            <CheckoutInfo data={item} key={index} />
          ))}
        </div>
        <div className="pt-6 px-5">
          <Button onClick={() => router.push('/payment-method')} className="bg-primary rounded-[12px] h-12 transition-colors text-base duration-300 hover:bg-primary/80 text-white w-full">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;
