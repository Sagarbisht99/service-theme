"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-[#0a1f44] hover:text-[#0a1f44] disabled:pointer-events-none disabled:opacity-40"
        aria-label="Previous page"
      >
        <FaChevronLeft className="text-xs" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm transition-all shadow-sm ${
            currentPage === page
              ? "bg-[#0a1f44] text-[#0a1f44]"
              : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-[#0a1f44] hover:text-[#0a1f44] disabled:pointer-events-none disabled:opacity-40"
        aria-label="Next page"
      >
        <FaChevronRight className="text-xs" />
      </button>
    </div>
  );
}
