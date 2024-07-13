"use client";

import { Product } from "@/components/home";
import PaginationComponent from "@/components/pagination/Pagination";
import { useGetProductsQuery } from "@/redux/services/store";
import React, { useState } from "react";

const HomeContainer = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const size = 8;
  const { data, isLoading } = useGetProductsQuery({
    params: {
      size: size,
      page: currentPage,
      reverse_sort: false,
    },
  });

  const totalPage = Math.ceil((data && data?.total / size) as number);

  return (
    <div className="px-4 md:pt-4 pb-16">
      <div className="max-w-[1240px] w-full gap-x-6 gap-3 md:gap-y-16 justify-items-center mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className="animate-pulse max-w-[292px] w-full h-[350px] rounded-[16px] p-5 bg-white"
            ></div>
          ))}
        {data &&
          data?.items.map((product, index) => (
            <Product data={product} key={index} />
          ))}
      </div>
      <div className="pt-5 md:pt-10">
        {data && (
          <PaginationComponent
            totalPage={totalPage as number}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
