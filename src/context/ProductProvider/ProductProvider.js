import React, { useContext, useEffect, useState } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import actionTypes from '../../State/actionTypes';
import { initialState, productsReducer } from '../../State/State';


let Products = createContext();
const ProductProvider = ({ children }) => {
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
    const [state, dispatch] = useReducer(productsReducer, initialState);
    useEffect(() => {
      dispatch({ type: actionTypes.FETCHING_START });
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
        )
        .catch(() => {
          dispatch({ type: actionTypes.FETCHING_ERROR });
        });
    }, []);
    console.log(state)
    let value = 
    {
        state,
        dispatch,
        count,setCount,setPage,setSize,size,page
    }
  return <Products.Provider value={value}>{children}</Products.Provider>;
};

export const useProducts = () => {
  const context = useContext(Products);
  return context;
};


export default ProductProvider;
