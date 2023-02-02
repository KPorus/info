import React from "react";
import "./pages.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className='pagination flex justify-center'>
        {pageNumbers.map((number) => (
          <button
            type='button'
            key={number}
            onClick={() => paginate(number)}
            className='page-link page sm:px-7 sm:py-3 px-6 py-1 font-semibold border rounded border-gray-600 w-[8%]'>
            {number}
          </button>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
