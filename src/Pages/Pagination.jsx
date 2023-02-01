import React from "react";
import "./pages.css";
const Pagination = ({ infosPerPage, totalInfos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalInfos / infosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <button
            type='button'
            key={number}
            onClick={() => paginate(number)}
            className='page-link page px-8 py-3 font-semibold border rounded border-gray-600 lg:w-[8%]'>
            {number}
          </button>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
