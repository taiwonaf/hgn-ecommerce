"use client";

import { CartOrderSummary, CartProduct } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState, useAppSelector } from "@/redux/store";
import React from "react";

const CartContainer = () => {
  const cartItems = useAppSelector(
    (store: RootState) => store.cartState.cartItems
  );
  return (
    <div className="pb-[140px] px-4">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col md:flex-row justify-between items-start md:gap-5">
        <ScrollArea className="h-[500px] w-full">
          <div className="max-w-[715px] w-full grid gap-0 md:gap-9">
            {cartItems.length > 0 ? (
              cartItems?.map((item, index) => (
                <CartProduct key={index} data={item} />
              ))
            ) : (
              <div className="h-[100px] flex justify-center items-center">
                <h4 className="text-lg font-semibold text-primary text-center">
                  No Items in the cart
                </h4>
              </div>
            )}
          </div>
        </ScrollArea>
        <CartOrderSummary />
      </div>
    </div>
  );
};

export default CartContainer;
