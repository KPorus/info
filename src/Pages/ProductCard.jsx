import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [state, setstate] = useState(false);
  let { company, name, username, address, email, phone, website } = product;

  console.log(address.geo.lat);
  return (
    <div>
      <div className=' flex flex-col md:flex-row items-center md:justify-between m-4  p-6 overflow-hidden text-gray-900 shadow-lg'>
        <div className='flex flex-col lg:flex-row lg:space-y-0 space-y-5 md:space-x-16 items-center justify-center text-center w-[90%]'>
          <div>
            <p>{company.name}</p>
          </div>
          <div className='lg:w-[12%]'>
            <p className='font-bold text-zinc-800 uppercase '>ConTact</p>
            <p>{username}</p>
          </div>
          <div className='lg:w-[12%]'>
            <p className='font-bold text-zinc-800 uppercase '>State</p>
            <p>{address.street}</p>
          </div>
          <div className='lg:w-[12%]'>
            <p className='font-bold text-zinc-800 uppercase '>City</p>
            <p>{address.city}</p>
          </div>
        </div>
        <button
          type='button'
          onClick={() => setstate(!state)}
          className='px-8 py-3 font-semibold border rounded border-gray-700 lg:w-[18%]'>
          {state ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {state && (
        <div className='grid text-white container justify-center bg-black p-4 mb-2'>
          <div>
            <div className='flex-grow p-2'>
              <p className='font-bold'>Description</p>
              <p>
                We’re a family business here in{" "}
                <span className='font-bold'>{address.city}</span>, and together
                we offer more than 60 years of experience in the business. We
                know how roofing works, and we can help with all of your roofing
                needs. Have leaks, or missing shingles, call us, and we’ll start
                building!
              </p>
            </div>
            <div className='grid sm:grid-cols-2 sm:justify-between p-2'>
              <div>
                <ul>
                  <li className='font-bold py-2'>Contact Person</li>
                  <li>{name}</li>
                  <li className='font-bold py-2'>Email</li>
                  <li>{email}</li>
                  <li className='font-bold py-2'>Phones</li>
                  <li>{phone}</li>
                  <li className='font-bold py-2'>Web Sites</li>
                  <li>{website}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className='font-bold py-2'>Address</li>
                  <li>
                    {address.street} {address.suite}, {address.city}
                  </li>
                  <li className='font-bold py-2'>City</li>
                  <li>{address.city}</li>
                  <li className='font-bold py-2'>State</li>
                  <li>{address.street}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
