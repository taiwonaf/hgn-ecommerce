"use client";

import { ImageGallery } from "@/components";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/product.model";
import { Add, Minus, Star1, Warning2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Iprop {
  product: IProduct;
}

const colorGradients = [
  {
    top: "#325470",
    bottom: "#D3E3F2",
    name: "Blue",
  },
  {
    top: "#E35049",
    bottom: "#F9E5E4",
    name: "Pink",
  },
  {
    top: "#4B4B49",
    bottom: "#D3CED4",
    name: "Purple",
  },
  {
    top: "#7E8879",
    bottom: "#EBEEE7",
    name: "Green",
  },
  {
    top: "#B6B5BA",
    bottom: "#FAF9F7",
    name: "Grey",
  },
];

const ProductDetailsContainer: React.FC<Iprop> = ({ product }) => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState<number>(0);

  return (
    <div className="px-4 pt-4 pb-16">
      <div className="max-w-[1240px] w-full mx-auto md:gap-[18px] gap-5 flex flex-col md:flex-row justify-between items-start">
        <ImageGallery images={product.images} />
        <div className="md:w-1/2 max-w-[530px] mx-auto md:mx-0">
          <h2 className="text-primary text-lg md:text-4xl font-bold mb-2">
            AirPods Max
          </h2>
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-primary font-medium text-lg md:text-3xl">
              $545.00
            </h3>
            <div className="flex justify-start items-center gap-1">
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
          <p className="md:border-b-subText md:border-b-[1px] font-normal text-xs md:text-base text-subText md:pb-6 mb-6">
            the ultimate in luxury audio. These over-ear headphones boast an
            Apple-designed dynamic driver for high-fidelity sound, Active Noise
            Cancellation, and a comfortable knit mesh canopy with memory foam
            ear cushions. With seamless Apple device integration via the H1
            chip, up to 20 hours of battery life, and features like Transparency
            mode and spatial audio, the AirPods Max delivers an exceptional
            listening experience in style.
          </p>
          <div className="md:border-b-subText md:border-b-[1px] font-normal md:pb-6 mb-6">
            <div className="flex justify-start items-center gap-1 mb-2">
              <h4 className="text-primary text-base font-medium">
                Selected Color :
              </h4>
              <span className="text-subText">
                {colorGradients[selectedColor]?.name}
              </span>
            </div>
            <div className="flex justify-start items-center gap-[12px]">
              <span
                onClick={() => setSelectedColor(0)}
                className={`${
                  selectedColor === 0
                    ? "border border-primary rounded-fu"
                    : null
                } duration-300 transition-all cursor-pointer rounded-full bg-gradient-to-b from-[#325470] from-50% to-50% to-[#D3E3F2] h-[18px] w-[18px] md:h-[28px] md:w-[28px]`}
              ></span>
              <span
                onClick={() => setSelectedColor(1)}
                className={`${
                  selectedColor === 1
                    ? "border border-primary rounded-fu"
                    : null
                } duration-300 transition-all cursor-pointer rounded-full bg-gradient-to-b from-[#E35049] from-50% to-50% to-[#F9E5E4] h-[18px] w-[18px] md:h-[28px] md:w-[28px]`}
              ></span>
              <span
                onClick={() => setSelectedColor(2)}
                className={`${
                  selectedColor === 2
                    ? "border border-primary rounded-fu"
                    : null
                } duration-300 transition-all cursor-pointer rounded-full bg-gradient-to-b from-[#4B4B49] from-50% to-50% to-[#D3CED4] h-[18px] w-[18px] md:h-[28px] md:w-[28px]`}
              ></span>
              <span
                onClick={() => setSelectedColor(3)}
                className={`${
                  selectedColor === 3
                    ? "border border-primary rounded-fu"
                    : null
                } duration-300 transition-all cursor-pointer rounded-full bg-gradient-to-b from-[#7E8879] from-50% to-50% to-[#EBEEE7] h-[18px] w-[18px] md:h-[28px] md:w-[28px]`}
              ></span>
              <span
                onClick={() => setSelectedColor(4)}
                className={`${
                  selectedColor === 4
                    ? "border border-primary rounded-fu"
                    : null
                } duration-300 transition-all cursor-pointer rounded-full bg-gradient-to-b from-[#B6B5BA] from-50% to-50% to-[#FAF9F7] h-[18px] w-[18px] md:h-[28px] md:w-[28px]`}
              ></span>
            </div>
          </div>
          <div className="md:border-b-subText md:border-b-[1px] font-normal text-subText md:pb-6 mb-6 flex justify-between items-center gap-2">
            <div className="flex justify-start items-center gap-6">
              <Button className="bg-subText rounded-[8px] p-0 md:rounded-[12px] h-6 md:h-12 w-6 md:w-12 transition-colors duration-300 hover:bg-subText/80">
                <Minus size="24" className="text-white" />
              </Button>
              <span className="text-lg md:text-3xl font-medium text-primary">
                1
              </span>
              <Button className="bg-primary rounded-[8px] md:rounded-[12px] p-0 h-6 md:h-12 w-6 md:w-12 transition-colors duration-300 hover:bg-primary/80">
                <Add size="24" className="text-white" />
              </Button>
            </div>
            <div className="flex justify-end gap-1 items-center">
              <Warning2 size="18" className="text-redText font-medium" />
              <span className="text-redText text-lg font-medium">
                6 units left
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5 mb-[28px] md:mb-12 flex-col md:flex-row">
            <div className="md:max-w-[235px] w-full">
              <Button
                onClick={() => router.push("/cart")}
                className="bg-primary rounded-[12px] h-10 md:h-12 transition-colors duration-300 hover:bg-primary/80 text-white w-full"
              >
                Buy Now
              </Button>
            </div>
            <div className="md:max-w-[235px] w-full">
              <Button
                onClick={() => router.push("/cart")}
                variant="outline"
                className="border-primary bg-transparent rounded-[12px] h-10 md:h-12 transition-colors duration-300 text-primary w-full"
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-subText text-[10px] md:text-base font-normal">
              Free 3 - 5 shipping
            </span>
            <span className="text-subText  text-[10px] md:text-base font-normal">
              |
            </span>
            <span className="text-subText  text-[10px] md:text-base font-normal">
              3 Months warranty
            </span>
            <span className="text-subText  text-[10px] md:text-base font-normal">
              |
            </span>
            <span className="text-subText  text-[10px] md:text-base font-normal">
              Free Apple Care
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
