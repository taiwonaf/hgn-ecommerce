"use client"

import {
  Amazon,
  Bank,
  Card,
  CryptoPay,
  Google,
  Paypal,
} from "@/assets/images/paymentmethods";
import { PaymentOption } from "@/components";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentMethod = () => {
  const router = useRouter();
  const paymentMethods = [
    {
      img: Bank,
      name: "Bank Transfer",
    },
    {
      img: Card,
      name: "Card Payment",
    },
    {
      img: CryptoPay,
      name: "Pay with Crypt",
    },
    {
      img: Amazon,
      name: "Pay with Amazon",
    },
    {
      img: Paypal,
      name: "Pay with Paypal",
    },
    {
      img: Google,
      name: "Pay with Google",
    },
  ];
  return (
    <div className="px-4 pb-12">
      <div className="max-w-[472px] w-full mx-auto bg-white rounded-[16px] pt-11 pb-6 flex flex-col justify-between">
        <div className="grid gap-6 mb-10">
          {paymentMethods.slice(0, 3)?.map((item, index) => (
            <PaymentOption key={index} data={item} />
          ))}
          <div className="bg-mainBg px-4 py-5">
            <h4 className="text-xs text-blackIcon">More payment options</h4>
          </div>
          {paymentMethods.slice(3, -1)?.map((item, index) => (
            <PaymentOption key={index} data={item} />
          ))}
        </div>
        <div className="px-4">
          <Button onClick={() => router.push('/card-payment')} className="bg-primary rounded-[12px] h-12 transition-colors text-base duration-300 hover:bg-primary/80 text-white w-full">
            Make Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
