"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Star1 } from "iconsax-react";
import { useRouter } from "next/navigation";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { addToCart } from "@/redux/slices/cart";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FovouriteToggle from "@/components/favourite/FovouriteToggle";

interface IProp {
  images: StaticImageData[];
  name: string;
  price: number;
  description: string;
  id: string;
}

const Product: React.FC<IProp> = ({ images, name, price, description, id }) => {
  const cartItems = useAppSelector(
    (store: RootState) => store.cartState.cartItems
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className=" max-w-[292px] w-full rounded-[16px] p-5 bg-white">
      <div
        onClick={() => router.push(`products/${id}`)}
        className="relative cursor-pointer w-full h-[163px] rounded-[12px] mb-3 flex justify-center items-center bg-mainBg"
      >
        <FovouriteToggle />
        <Image
          src={images[0].src}
          alt="product image"
          width={116}
          height={128}
          className="object-contain"
        />
      </div>
      <Tooltip>
        <TooltipTrigger>
          <div
            onClick={() => router.push(`products/${id}`)}
            className="cursor-pointer"
          >
            <div className="flex justify-between items-center gap-2 mb-1">
              <h2 className="text-primary text-base font-medium">{name}</h2>
              <h3 className="text-primary text-base font-normal">{`$${price}.00`}</h3>
            </div>
            <p className="text-xs text-subText font-medium mb-1.5 line-clamp-1">
              {description}
            </p>
            <div className="flex justify-start items-center gap-1 mb-3">
              <div className="flex gap-1.5 justify-start items-center mr-1.5">
                <Star1 size="12" className="text-starGreen" variant="Bold" />
                <Star1 size="12" className="text-starGreen" variant="Bold" />
                <Star1 size="12" className="text-starGreen" variant="Bold" />
                <Star1 size="12" className="text-starGreen" variant="Bold" />
              </div>
              <span className="text-subText text-base font-medium">
                (123 reviews)
              </span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to view details</p>
        </TooltipContent>
      </Tooltip>

      {!cartItems.some((item) => item.id === id) ? (
        <Button
          onClick={() => {
            dispatch(
              addToCart({
                images,
                name,
                price,
                description,
                id,
                quantity: 1,
              })
            );
          }}
          className="rounded-[12px] h-10 md:h-12 w-full bg-primary hover:primary/60 text-lg duration-300 transition-all text-white/90"
        >
          Add to cart
        </Button>
      ) : (
        <Button
          disabled
          className="rounded-[12px] disabled:bg-subText h-10 md:h-12 w-full  text-lg duration-300 transition-all text-white/90"
        >
          In cart
        </Button>
      )}
    </div>
  );
};

export default Product;
