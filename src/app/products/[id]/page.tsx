import { HomeLayout, Categories } from "@/components";
import ProductDetailsContainer from "@/containers/ProductDetailsContainer";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Slash } from "lucide-react";

const page = ({ params }: { params: { id: string } }) => {
  const product = productsData.find((item) => item.id === params?.id);
  return (
    <HomeLayout>
      <Categories />
      <div className="px-4">
        <div className="max-w-[1240px] w-full mx-auto py-[18px] md:py-6 ">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link
                    className="text-base font-medium text-subText"
                    href={"/"}
                  >
                    Home
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary cursor-not-allowed text-base font-medium">
                    Airpods
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <ProductDetailsContainer product={product as IProduct} />
    </HomeLayout>
  );
};

export default page;
