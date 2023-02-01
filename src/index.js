import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './context/ProductProvider/ProductProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
        <App />
    </ProductProvider>
  </React.StrictMode>
);

