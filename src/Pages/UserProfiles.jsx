import React from 'react';
import { useProducts } from '../context/ProductProvider/ProductProvider';
import Loading from './Loading';
import ProductCard from './ProductCard';

const UserProfiles = () => {
    const {
      state: { products, loading, error },
    } = useProducts();

    let content;

    if (loading) {
      content = <Loading />;
    }

    if (error) {
      content = <p>Something went wrong</p>;
    }

    if (!loading && !error && products.length === 0) {
      content = <p>Nothing to show, product list is empty</p>;
    }

    if (!loading && !error && products.length) {
      content = products
        .map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ));
    }
 
    return (
      <div>
        user profile
        <div className='container mx-auto'>
          {content}
        </div>
      </div>
    );
};

export default UserProfiles;