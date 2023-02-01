import React, { useContext, useEffect, useState } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import actionTypes from '../../State/actionTypes';
import { initialState, infosReducer } from '../../State/State';


let infos = createContext();
const ProductProvider = ({ children }) => {
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
    const [state, dispatch] = useReducer(infosReducer, initialState);
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
  return <infos.Provider value={value}>{children}</infos.Provider>;
};

export const useinfos = () => {
  const context = useContext(infos);
  return context;
};


export default ProductProvider;
