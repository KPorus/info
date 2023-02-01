import React, { useState } from 'react';
import { useinfos } from '../context/ProductProvider/ProductProvider';
import Loading from './Loading';
import ProductCard from './ProductCard';

import Pagination from './Pagination';


const UserProfiles = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [infosPerPage] = useState(3);
    const {
      state: { infos, loading, error },
    } = useinfos();

    let content;

    if (loading) {
      content = <Loading />;
    }

    if (error) {
      content = <p>Something went wrong</p>;
    }

    if (!loading && !error && infos.length === 0) {
      content = <p>Nothing to show, product list is empty</p>;
    }
    
    const indexOfLastInfo = currentPage * infosPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infosPerPage;
  const currentPosts = infos.slice(indexOfFirstInfo, indexOfLastInfo);

    if (!loading && !error && infos.length) {
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
          infosPerPage={infosPerPage}
          totalInfos={infos.length}
          paginate={paginate}
        />
      </div>
    );
};

export default UserProfiles;