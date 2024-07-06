"use client";

import { Check } from "@/assets/images/icon";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaymentSuccess: React.FC<IProp> = ({ open, setOpen }) => {
  const router = useRouter();
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-transparent border-none flex justify-center items-center px-3">
        <div className="flex bg-white justify-center max-w-[404px] w-full !rounded-[12px] items-center py-10">
          <div className="max-w-[260px] w-full mx-auto">
            <div className="flex justify-center items-center">
              <div className="max-w-h-[100px] w-[100px] mb-8">
                <Image
                  className="object-contain h-full w-full"
                  height={100}
                  width={100}
                  src={Check}
                  alt="check icon"
                />
              </div>
            </div>
            <h3 className="mb-2 text-primary text-center font-bold text-[20px]">
              Payment Successful
            </h3>
            <p className="mb-[10px] text-center text-subText text-sm">
              Thank you for shopping. Your order has been successfully placed
              and has been processed for delivery
            </p>
            <Button
              onClick={() => router.push("/")}
              className="bg-primary rounded-[12px] h-12 transition-colors text-base duration-300 hover:bg-primary/80 text-white w-full"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentSuccess;
