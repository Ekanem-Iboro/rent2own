import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationCar({
  totalItems,
  itemPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: number;
  itemPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void; // Correct type for setCurrentPage
}) {
  // const pages = [];
  // for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
  //   pages.push(i);
  // }

  // const handlePrevChange = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };
  // const handleNextChange = () => {
  //   if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  // };
  const totalPages = Math.ceil(totalItems / itemPerPage);

  // Determine the pagination structure based on current page
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 6) {
      // Show all pages if there are 6 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // When there are more than 6 pages
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= 4 && currentPage < totalPages - 2) {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      }
    }

    return pageNumbers;
  };

  const pages = getPageNumbers();

  const handlePrevChange = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextChange = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="text-[14px] font-[500] leading-[16.8px] mr-5">
          {totalItems} of {pages}
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePrevChange()}
            className="hover:border border-[#6FC200] cursor-pointer "
          />
        </PaginationItem>
        {pages.map((page, idx) => (
          <PaginationItem
            key={idx}
            className={`  ${
              currentPage === page ? "border border-[#6FC200] rounded-lg" : ""
            } cursor-pointer rounded-lg hover:border border-[#6FC200] " `}
          >
            <PaginationLink onClick={() => setCurrentPage(Number(page))}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => handleNextChange()}
            className="hover:border border-[#6FC200] cursor-pointer "
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
