import React, { useState } from "react";


const ProductCard = ({ product}) => {
const [state, setstate] = useState(false);
  let { id, company } = product;
  console.log(id);
  return (
    <div>
      <div className=' flex flex-row items-center justify-between m-4  p-6 overflow-hidden text-gray-600'>
        <div className='flex space-x-4'>
          <div className='flex flex-col space-y-1'>
            <span className='text-sm font-semibold'>{id}</span>
          </div>
          <div>
            <p>{company.name}</p>
          </div>
          <div>
            <p>{company.name}</p>
          </div>
          <div>
            <p>{company.name}</p>
          </div>
        </div>
        <button
          type='button'
          onClick={() => setstate(!state)}
          className='px-8 py-3 font-semibold border rounded border-gray-600'>
          {state ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {state && (
        <div className='overflow-hidden text-gray-600 container max-w-lg mx-14'>
          hide details
        </div>
      )}
    </div>
  );
};

export default ProductCard;
