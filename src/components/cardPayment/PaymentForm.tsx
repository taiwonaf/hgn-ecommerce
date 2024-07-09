"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "iconsax-react";
import React from "react";
import { Button } from "../ui/button";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { clearCart } from "@/redux/slices/cart";

interface IProp {
  pay: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaymentForm: React.FC<IProp> = ({ pay }) => {
  const dispatch = useAppDispatch();
  const total = useAppSelector((store: RootState) => store.cartState.total);
  return (
    <div className="md:px-4 pb-9">
      <h2 className="text-base md:text-lg font-medium text-blackIcon text-center mb-[22px]">
        Enter your Card Details
      </h2>
      <div className="mb-3">
        <div className="border mb-4 border-subText p-2 flex justify-between gap-2 rounded-[8px]">
          <div className="w-[90%] flex flex-col">
            <label
              htmlFor="cardnumber"
              className="text-[10px] md:text-[12px] text-blackIcon font-medium"
            >
              Card Number
            </label>
            <input
              type="number"
              placeholder="0000 0000 0000 0000"
              className="outline-none bg-transparent placeholder:text-subText placeholder:text-[12px] text-blackIcon text-base font-semibold "
            />
          </div>
          <div className="flex justify-center items-center">
            <Card
              size={24}
              className="text-subText text-lg md:text-2xl"
              variant="Bold"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="border border-subText p-2 flex justify-between rounded-[8px]">
            <div className="w-full flex flex-col">
              <label
                htmlFor="cardExpiry"
                className="text-[10px] md:text-[12px] text-blackIcon font-medium"
              >
                Card Expriry
              </label>
              <input
                type="number"
                placeholder="MM/YY"
                className="outline-none bg-transparent w-full placeholder:text-subText placeholder:text-[12px] text-blackIcon text-base font-semibold "
              />
            </div>
          </div>
          <div className="border border-subText p-2 flex flex-col rounded-[8px]">
            <div className="flex justify-between items-center gap-2">
              <label
                htmlFor="cardnumber"
                className="text-[10px] md:text-[12px] text-blackIcon font-medium"
              >
                CCV
              </label>
              <span className="text-[10px] md:text-[12px] text-subText font-normal">
                Whst is this ?
              </span>
            </div>
            <input
              type="password"
              placeholder="***"
              className="outline-none bg-transparent w-full placeholder:text-subText placeholder:text-[12px] text-blackIcon text-base font-semibold "
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" className="" />
        <label
          htmlFor="terms"
          className="text-xs font-normal text-blackIcon leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember this card next time
        </label>
      </div>
      <div className="pt-6">
        <Button
          onClick={() => {
            pay(true);
            dispatch(clearCart());
          }}
          className="bg-flutterwave rounded-[12px] h-10 md:h-12 transition-colors text-base duration-300 hover:bg-flutterwave/80 text-white w-full"
        >
          Pay USD {total.toLocaleString()}.00
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
