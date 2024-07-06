import { ImageGallery } from "@/components";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/product.model";
import { Add, Minus, Star1, Warning2 } from "iconsax-react";
import React from "react";

interface Iprop {
  product: IProduct;
}

const ProductDetailsContainer: React.FC<Iprop> = ({ product }) => {
  return (
    <div className="px-4 pt-4 pb-16">
      <div className="max-w-[1240px] w-full mx-auto gap-5 flex flex-col md:flex-row justify-between items-start">
        <ImageGallery images={product.images} />
        <div className="md:w-1/2 max-w-[530px] mx-auto md:mx-0">
          <h2 className="text-primary text-4xl font-bold mb-2">AirPods Max</h2>
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-primary font-medium text-3xl">$545.00</h3>
            <div className="flex justify-start items-center gap-1 mb-7">
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
          <p className="border-b-subText border-b-[1px] font-normal text-subText pb-6 mb-6">
            the ultimate in luxury audio. These over-ear headphones boast an
            Apple-designed dynamic driver for high-fidelity sound, Active Noise
            Cancellation, and a comfortable knit mesh canopy with memory foam
            ear cushions. With seamless Apple device integration via the H1
            chip, up to 20 hours of battery life, and features like Transparency
            mode and spatial audio, the AirPods Max delivers an exceptional
            listening experience in style.
          </p>
          <div className="border-b-subText border-b-[1px] font-normal pb-6 mb-6">
            <div className="flex justify-start items-center gap-1">
              <h4 className="text-primary text-base font-medium">
                Selected Color :
              </h4>
              <span className="text-subText">Black</span>
            </div>
            <div></div>
          </div>
          <div className="border-b-subText border-b-[1px] font-normal text-subText pb-6 mb-6 flex justify-between items-center gap-2">
            <div className="flex justify-start items-center gap-6">
              <Button className="bg-subText rounded-[12px] h-12 w-12 transition-colors duration-300 hover:bg-subText/80">
                <Minus size="32" className="text-white" />
              </Button>
              <span className="text-3xl font-medium text-primary">1</span>
              <Button className="bg-primary rounded-[12px] h-12 w-12 transition-colors duration-300 hover:bg-primary/80">
                <Add size="32" className="text-white" />
              </Button>
            </div>
            <div className="flex justify-end gap-1 items-center">
              <Warning2 size="18" className="text-redText font-medium" />
              <span className="text-redText text-lg font-medium">
                6 units left
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5 mb-12">
            <div className="max-w-[235px] w-full">
              <Button className="bg-primary rounded-[12px] h-12 transition-colors duration-300 hover:bg-primary/80 text-white w-full">
                Buy Now
              </Button>
            </div>
            <div className="max-w-[235px] w-full">
              <Button className="bg-subText rounded-[12px] h-12 transition-colors duration-300 hover:bg-subText/80 text-white w-full">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-subText text-base font-normal">
              Free 3 - 5 shipping
            </span>
            <span className="text-subText text-base font-normal">|</span>
            <span className="text-subText text-base font-normal">
              3 Months warranty
            </span>
            <span className="text-subText text-base font-normal">|</span>
            <span className="text-subText text-base font-normal">
              Free Apple Care
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
