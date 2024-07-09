"use client";

import { Cancel, Change } from "@/assets/images/icon";
import { Flutterwave } from "@/assets/images/paymentmethods";
import { PaymentForm, PaymentSuccess } from "@/components";
import { RootState, useAppSelector } from "@/redux/store";
import { Lock } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";

const CardPaymentContainer = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const total = useAppSelector((store: RootState) => store.cartState.total);
  return (
    <div className="px-4 pb-12">
      <div className="max-w-[472px] w-full md:bg-white rounded-[16px] mx-auto  md:pt-[100px] pb-7">
        <div className="md:px-4 mb-6 pb-6 border-b-[1px] border-b-subText/40 md:border-b-mainBg flex justify-between items-center gap-2">
          <Image
            src={Flutterwave}
            alt="Flutter wave logo shop now pay out"
            height={20}
            width={24}
            className="object-contain"
          />
          <div>
            <h4 className="mb-1 text-sm md:text-base text-blackIcon">
              ihamroland@gmail.com
            </h4>
            <h3 className="text-sm md:text-base text-right">
              <span className="text-blackIcon">Pay </span>
              <span className="text-flutterwave font-medium">
                USD {total.toLocaleString()}.00
              </span>
            </h3>
          </div>
        </div>
        <PaymentForm pay={setSuccess} />
        <div className="px-4 mb-20 flex flex-col justify-center items-center gap-3">
          <div className="cursor-pointer border-[1px] border-subText/70 bg-mainBg py-2 px-3 rounded-[8px] flex justify-center items-center gap-1">
            <Image
              alt="Change payment method icon"
              src={Change}
              height={20}
              width={20}
              className="object-contain"
            />
            <span className="text-[10px] md:text-xs font-medium text-blackIcon">
              Change Payment Method
            </span>
          </div>
          <div className="cursor-pointer border-[1px] border-subText/70 bg-mainBg py-2 px-3 rounded-[8px] flex justify-center items-center gap-1">
            <Image
              alt="Change payment method icon"
              src={Cancel}
              height={12}
              width={12}
              className="object-contain"
            />
            <span className="text-[10px] md:text-xs font-medium text-blackIcon">
              Cancel Payment
            </span>
          </div>
        </div>
        <div className="md:px-4">
          <div className="flex justify-center items-center gap-[6px] mb-5">
            <Lock size="14" className="text-blackIcon" variant="Bold" />
            <p className="text-xs text-blackIcon">
              <span className="font-normal">Secured by </span>
              <span className="font-bold">Flutterwave</span>
            </p>
          </div>
          {/* <Button
            onClick={() => setSuccess(true)}
            className="bg-primary rounded-[12px] h-10 md:h-12 transition-colors text-base duration-300 hover:bg-primary/80 text-white w-full"
          >
            Make Payment
          </Button> */}
        </div>
      </div>
      <PaymentSuccess open={success} setOpen={setSuccess} />
    </div>
  );
};

export default CardPaymentContainer;
