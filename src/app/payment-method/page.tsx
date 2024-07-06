import { HomeLayout, Categories } from "@/components";
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
import PaymentMethod from "@/containers/PaymentMethod";

const page = () => {
  return (
    <HomeLayout>
      <Categories />
      <div className="py-6 px-4">
        <div className="max-w-[1240px] w-full mx-auto flex justify-start items-center gap-12 ">
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
                  <Link
                    className="text-base font-medium text-subText"
                    href={"/cart"}
                  >
                    Cart
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="cursor-not-allowed text-base font-medium text-primary">
                    Check Out
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <PaymentMethod />
    </HomeLayout>
  );
};

export default page;
