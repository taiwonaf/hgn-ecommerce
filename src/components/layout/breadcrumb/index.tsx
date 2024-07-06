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

const StoreHeader = () => {
  return (
    <div className="py-6 px-4">
      <div className="max-w-[1240px] w-full mx-auto flex justify-between items-center gap-12 ">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-base font-medium text-subText">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="cursor-not-allowed text-base font-medium text-subText">Airpods</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="cursor-pointer flex justify-between items-center gap-3 p-1.5 rounded-[8px] duration-300 transition-all hover:bg-subText/10">
            <span className="text-base text-primary font-medium">Sort by</span>
            <ChevronDown className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
