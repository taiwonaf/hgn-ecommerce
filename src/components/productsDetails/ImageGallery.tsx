"use client";

import { IPhotos } from "@/redux/services/store/types";
import { Heart } from "iconsax-react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface IProp {
  images: IPhotos[];
}

const ImageGallery: React.FC<IProp> = ({ images }) => {
  const [active, setActive] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  console.log(images);
  return (
    <div className="flex justify-start items-center flex-col md:w-1/2 w-full">
      <div className="relative max-w-[632px] w-full md:h-[508px] h-[237px] bg-white rounded-4 flex justify-center items-center rounded-[16px] mb-[18px] md:mb-12">
        <Heart
          onClick={() => setActive(!active)}
          size="32"
          variant={active ? "Bold" : "Outline"}
          className="text-primary absolute md:top-[50px] md:right-[50px] top-[10px] right-[10px]"
        />
        <div className=" max-w-[270px] w-full h-[128px] md:h-[300px] flex justify-center items-center">
          <Image
            className="object-contain w-full h-full"
            height={128}
            width={116}
            src={`https://api.timbu.cloud/images/${images[currentImage].url}`}
            alt="Product main image"
          />
        </div>
      </div>
      <div className="bg-white p-3 rounded-[12px] flex justify-center items-center gap-3">
        {images.map((item, index) => (
          <div
            className={`${
              currentImage === index ? "border-[2px] border-primary" : null
            } cursor-pointer transition-all duration-300 w-full max-w-16 h-16 bg-mainBg py-1 px-2 rounded-[8px] flex justify-center items-center`}
            key={index}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={`https://api.timbu.cloud/images/${item.url}`}
              alt="shop now products images"
              width={48}
              height={54}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
