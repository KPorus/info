import React, { useState } from 'react';
import { useProducts } from '../context/ProductProvider/ProductProvider';
import Loading from './Loading';
import ProductCard from './ProductCard';

import Pagination from './Pagination';


const UserProfiles = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(3);
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
    
    const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    if (!loading && !error && products.length) {
      content = currentPosts
        .map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ));
    }

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
 
    return (
      <div className='container mx-auto'>
        <div className='container mx-auto'>{content}</div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      </div>
    );
};

export default UserProfiles;