"use client";

import { CheckoutInfo, CheckoutProduct } from "@/components";
import { Button } from "@/components/ui/button";
import { RootState, useAppSelector } from "@/redux/store";
import { Box, Location } from "iconsax-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CheckoutContainer = () => {
  const cartItems = useAppSelector(
    (store: RootState) => store.cartState.cartItems
  );
  const [count, setCount] = useState<number>(3);
  const [more, setMore] = useState<boolean>(false);
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
            {cartItems.length > 0 ? (
              cartItems
                .slice(0, count)
                ?.map((item, index) => (
                  <CheckoutProduct key={index} data={item} />
                ))
            ) : (
              <div className="h-[100px] flex justify-center items-center">
                <h4 className="text-lg font-semibold text-primary text-center">
                  No Items in the cart
                </h4>
              </div>
            )}
          </div>
        </div>
        {cartItems.length > 3 ? (
          <div
            onClick={() => {
              setMore(!more);
              if (!more) {
                setCount(-1);
              } else {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                setCount(3);
              }
            }}
            className="bg-white md:bg-transparent p-3 flex justify-center items-center border-t-primary/40 border-b-primary/40 border-t-[1px] border-b-[1px] cursor-pointer hover:bg-mainBg/50 transition-colors duration-200"
          >
            <span className="text-base md:text-[18px] hover:text-primary/80 duration-300 transition-colors text-primary">
              {!more ? " See all" : "Show less"}
            </span>
          </div>
        ) : null}
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
