import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function NotificationPagination({
  totalItems,
  itemPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: number;
  itemPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
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
      <PaginationContent className="flex items-center justify-between w-full p-6">
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevChange}
            className="border border-[#BDBDBD] text-[14px] font-[500] leading-[16.8px] text-[#565656] cursor-pointer"
          />
        </PaginationItem>

        <div className="flex items-center gap-3">
          {pages.map((page, idx) => (
            <PaginationItem
              key={idx}
              className={`cursor-pointer rounded-lg ${
                currentPage === page
                  ? "bg-[#D6EEFF] text-[#0999FE] border-[#0999FE]"
                  : page === "..."
                  ? "text-[#BDBDBD]"
                  : "hover:border border-[#0999FE] text-[#7F7F7F]"
              }`}
            >
              {page === "..." ? (
                <span>{page}</span>
              ) : (
                <PaginationLink onClick={() => setCurrentPage(Number(page))}>
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </div>

        <PaginationItem>
          <PaginationNext
            onClick={handleNextChange}
            className="border border-[#BDBDBD] text-[14px] font-[500] leading-[16.8px] text-[#565656] cursor-pointer"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
