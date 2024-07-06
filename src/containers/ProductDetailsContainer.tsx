import { ImageGallery } from "@/components";
import { IProduct } from "@/types/product.model";
import React from "react";

interface Iprop {
  product: IProduct;
}

const ProductDetailsContainer: React.FC<Iprop> = ({ product }) => {
  return (
    <div className="px-4 pt-4 pb-16">
      <div className="max-w-[1240px] w-full mx-auto">
        <ImageGallery images={product.images} />
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
