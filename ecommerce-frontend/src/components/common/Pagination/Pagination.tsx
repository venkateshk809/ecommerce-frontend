import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PageChangeEvent = {
  selected: number;
};

type PaginationProps = {
  pageCount: number;
  forcePage?: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  previousLabel?: React.ReactNode;
  nextLabel?: React.ReactNode;
  breakLabel?: React.ReactNode;
  onPageChange: (selectedItem: PageChangeEvent) => void;
};

const Pagination = ({
  pageCount,
  forcePage = 0,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 4,
  previousLabel = "<",
  nextLabel = ">",
  breakLabel = "...",
  onPageChange,
}: PaginationProps) => {
  const currentPage = forcePage;
  console.log("pageCount", pageCount);

  const handlePageClick = (page: number) => {
    if (page < 0 || page >= pageCount) return;
    onPageChange({ selected: page });
  };

  const getPages = () => {
    const pages: (number | string)[] = [];

    const leftSide = Math.floor(pageRangeDisplayed / 2);

    let start = Math.max(marginPagesDisplayed, currentPage - leftSide);

    let end = Math.min(
      pageCount - marginPagesDisplayed - 1,
      start + pageRangeDisplayed - 1,
    );

    if (end - start + 1 < pageRangeDisplayed) {
      start = Math.max(marginPagesDisplayed, end - pageRangeDisplayed + 1);
    }

    for (let i = 0; i < marginPagesDisplayed; i++) {
      pages.push(i);
    }

    if (start > marginPagesDisplayed) {
      pages.push("break-start");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < pageCount - marginPagesDisplayed - 1) {
      pages.push("break-end");
    }

    for (
      let i = Math.max(pageCount - marginPagesDisplayed, marginPagesDisplayed);
      i < pageCount;
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <nav className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 0}
        className="h-12 w-12
flex items-center justify-center
rounded-xl
border border-gray-200
bg-white
text-gray-700
hover:bg-gray-50
disabled:opacity-40"
      >
        {<FiChevronLeft size={20} />}
      </button>

      {getPages().map((page, index) => {
        if (typeof page === "string") {
          return (
            <span
              key={index}
              className="h-12 w-12 flex items-center justify-center text-gray-500"
            >
              {breakLabel}
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`
h-12 w-12
flex items-center justify-center
rounded-xl
border
transition-all
${
  page === currentPage
    ? "bg-gradient-to-b from-pink-400 to-pink-600 text-white border-pink-500 shadow-md"
    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
}
`}
          >
            {page + 1}
          </button>
        );
      })}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === pageCount - 1}
        className="h-12 w-12
flex items-center justify-center
rounded-xl
border border-gray-200
bg-white
text-gray-700
hover:bg-gray-50
disabled:opacity-40"
      >
        {<FiChevronRight size={20} />}{" "}
      </button>
    </nav>
  );
};

export default Pagination;
