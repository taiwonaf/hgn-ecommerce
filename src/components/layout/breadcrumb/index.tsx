import { ChevronDown, Slash } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const StoreHeader = () => {
  return (
    <div className="py-[18px] md:py-6 px-4">
      <div className="max-w-[1240px] w-full mx-auto flex justify-between items-center gap-12 ">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link className="text-base font-medium text-subText" href={"/"}>
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
        <div className="hidden cursor-pointer md:flex justify-between items-center gap-3 p-1.5 rounded-[8px] duration-300 transition-all hover:bg-subText/10">
          <span className="text-base text-primary font-medium">Sort by</span>
          <ChevronDown className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
