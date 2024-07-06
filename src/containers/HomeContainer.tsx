import { Product } from "@/components/home";
import { productsData } from "@/data/products";
import React from "react";

const HomeContainer = () => {
  return (
    <div className="px-4 pt-4 pb-16">
      <div className="max-w-[1240px] w-full gap-x-6 gap-y-16 justify-items-center mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {productsData?.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
