import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProp {
  images: StaticImageData[];
}

const ImageGallery: React.FC<IProp> = ({ images }) => {
  return (
    <div className="flex justify-start items-center flex-col">
      <div className="max-w-[632px] w-full h-[508px] bg-white rounded-4 flex justify-center items-center rounded-[16px] mb-12">
        <div className="max-w-[270px] w-full h-[300px] flex justify-center items-center">
          <Image
            className="object-contain w-full h-full"
            height={128}
            width={116}
            src={images[0].src}
            alt="Product main image"
          />
        </div>
      </div>
        <div className="bg-white p-3 rounded-[12px] gap-6">
          {images.slice(1, -1).map((item, index) => (
            <div
              className="w-full max-w-16 h-16 bg-mainBg py-1 px-2 rounded-[8px] flex justify-center items-center"
              key={index}
            >
              <Image
                src={item?.src}
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
