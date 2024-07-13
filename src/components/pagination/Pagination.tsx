import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IProp {
  totalPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const PaginationComponent: React.FC<IProp> = ({
  totalPage,
  setCurrentPage,
  currentPage,
}) => {
  const prev = currentPage - 1;
  const next = currentPage + 1;
  const pages: (number | string)[] = [];
  //   if (prev > 2) pages.push("...");
  //   if (prev > 1) pages.push(prev);
  pages.push(currentPage);
  //   if (next < totalPage) pages.push(next);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant={"outline"}
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
            }}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
          </Button>
        </PaginationItem>
        {pages.map((item, index) => {
          if (typeof item === "string") {
            return (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          } else {
            return (
              <PaginationItem key={index}>
                <Button
                  variant={"outline"}
                  disabled={currentPage === item}
                  onClick={() => {
                    setCurrentPage(item);
                  }}
                >
                  {item}
                </Button>
              </PaginationItem>
            );
          }
        })}
        <PaginationItem>
          <Button
            variant={"outline"}
            disabled={currentPage === totalPage}
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
            }}
          >
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
