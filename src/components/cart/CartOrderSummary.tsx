"use client";

import { AddCircle } from "iconsax-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { RootState, useAppSelector } from "@/redux/store";

const SummaryName = ({ name }: { name: string }) => (
  <h3 className="font-medium md:font-semibold text-base md:text-[20px] text-subText md:text-primary">
    {name}
  </h3>
);

const SummaryNameValue = ({ value }: { value: string }) => (
  <h4 className="text-primary text-xs md:text-[20px] font-medium md:font-semibold">
    {value}
  </h4>
);

const CartOrderSummary = () => {
  const { total, amount } = useAppSelector(
    (store: RootState) => store.cartState
  );
  const router = useRouter();
  const cartSummaryItems = [
    {
      name: "Subtotal",
      value: `$${total.toLocaleString()}.00`,
    },
    {
      name: "Discount:",
      value: "$00.00",
    },
    {
      name: "Delivery Fee",
      value: "Free",
    },
  ];
  return (
    <div className="rounded-[16px] md:bg-white max-w-[500px] w-full mx-auto md:mx-0 md:px-6 py-6 md:py-8">
      <h2 className="font-bold text-primary md:text-[28px] text-base mb-4 md:mb-6">
        Order summary
      </h2>
      <div className="grid gap-3 md:gap-9 mb-3 md:mb-9">
        {cartSummaryItems?.map((item, index) => (
          <div key={index} className="flex justify-between items-center gap-3">
            <SummaryName name={item?.name} />
            <SummaryNameValue value={item?.value} />
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2 cursor-pointer hover:text-primary/70 duration-300 transition-colors pb-3 md:pb-7 border-b-primary border-b-[1px] border-dashed">
        <SummaryName name="Add Coupon" />
        <AddCircle size="24" className="text-primary font-bold" />
      </div>
      <div className="flex justify-between items-center gap-3 mb-3 md:pt-12 pt-7">
        <SummaryName name={"Total Price:"} />
        <SummaryNameValue value={`$${total.toLocaleString()}.00`} />
      </div>
      <Button
        disabled={amount < 1}
        onClick={() => router.push("/checkout")}
        className="bg-primary rounded-[12px] h-12 transition-colors text-base duration-300 hover:bg-primary/80 text-white w-full"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartOrderSummary;
