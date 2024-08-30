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
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pages.push(i);
  }

  const handlePrevChange = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextChange = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePrevChange()}
            className="hover:bg-neutral-200 cursor-pointer "
          />
        </PaginationItem>
        {pages.map((page, idx) => (
          <PaginationItem
            key={idx}
            className={`  ${
              currentPage === page ? "bg-neutral-200 rounded-lg" : ""
            } cursor-pointer rounded-lg hover:bg-neutral-200 " `}
          >
            <PaginationLink onClick={() => setCurrentPage(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => handleNextChange()}
            className="hover:bg-neutral-200 cursor-pointer "
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
