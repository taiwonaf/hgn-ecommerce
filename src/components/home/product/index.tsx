"use client"

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Star1 } from "iconsax-react";
import { useRouter } from "next/navigation";

interface IProp   {
    images: StaticImageData[];
    name: string;
    price: string;
    description: string;
    id: string;
}


const Product: React.FC<IProp> = ({ images, name, price, description, id}) => {
    const router = useRouter();
  return (
    <div className="max-w-[292px] w-full rounded-[16px] p-5 bg-white">
      <div className="w-full h-[163px] rounded-[12px] mb-3 flex justify-center items-center bg-mainBg">
        <Image
          src={images[0].src}
          alt="product image"
          width={116}
          height={128}
          className="object-contain"
        />
      </div>
      <div>
        <div className="flex justify-between items-center gap-2 mb-1">
          <h2 className="text-primary text-base font-medium">{name}</h2>
          <h3 className="text-primary text-base font-normal">{price}</h3>
        </div>
        <p className="text-xs text-subText font-medium mb-1.5 line-clamp-1">
          {description}
        </p>
        <div className="flex justify-start items-center gap-1 mb-3">
          <div className="flex gap-1.5 justify-start items-center mr-1.5">
            <Star1 size="12" className="text-starGreen" variant="Bold" />
          </div>
          <span className="text-subText text-base font-medium">(123 reviews)</span>
        </div>
      </div>
      <Button onClick={() => router.push(`products/${id}`)} className="rounded-[12px] w-full bg-primary hover:primary/60 text-lg duration-300 transition-all text-white/90">
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
