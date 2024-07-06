import { AddCircle } from "iconsax-react";
import React from "react";
import { Button } from "../ui/button";

const SummaryName = ({ name }: { name: string }) => (
  <h3 className="font-semibold text-[20px] text-primary">{name}</h3>
);

const SummaryNameValue = ({ value }: { value: string }) => (
  <h4 className="text-primary text-[20px] font-semibold">{value}</h4>
);

const CartOrderSummary = () => {
  const cartSummaryItems = [
    {
      name: "Subtotal",
      value: "$1095.00",
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
    <div className="rounded-[16px] bg-white max-w-[500px] w-full mx-auto md:mx-0 px-6 py-8">
      <h2 className="font-bold text-primary text-[28px] mb-6">Order summary</h2>
      <div className="grid gap-9 mb-9">
        {cartSummaryItems?.map((item, index) => (
          <div key={index} className="flex justify-between items-center gap-3">
            <SummaryName name={item?.name} />
            <SummaryNameValue value={item?.value} />
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2 cursor-pointer hover:text-primary/70 duration-300 transition-colors pb-7 border-b-primary border-b-[1px] border-dashed">
        <SummaryName name="Add Coupon" />
        <AddCircle size="24" className="text-primary font-bold" />
      </div>
      <div className="flex justify-between items-center gap-3 mb-12 pt-7">
        <SummaryName name={"Total Price:"} />
        <SummaryNameValue value={"$1095.00"} />
      </div>
      <Button className="bg-primary rounded-[12px] h-12 transition-colors text-base duration-300 hover:bg-primary/80 text-white w-full">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartOrderSummary;
