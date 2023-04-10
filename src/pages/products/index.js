import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { instance } from '@/axios/axiosDefault';
import { getProductsByCategory } from '@/redux/products/slice';
import { selectProductsByCategory } from '@/redux/products/selectors';

import ProductsList from '@/components/ProductsList/ProductsList';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import { FilterByPrice } from '@/components/FilterByPrice/FilterByPrice';
import Pagination from '@/components/ProductsList/Pagination/Pagination';

export async function getServerSideProps({ query }) {
  const category = query.category;
  const response = await instance(`/products/${category ? `list?limit=500&group_id=${category}` : 'list?limit=500'}`);
  const data = response.data.products;

  return {
    props: { data, query },
  };
}

function Products({ data, query }) {
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(data));
    // setItemOffset(0);
  }, [data, dispatch]);

  const products = useSelector(selectProductsByCategory);
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div style={{ marginBottom: '35px', marginTop: '-30px' }}>
        <FilterByPrice />
      </div>
      <div style={{ gap: ' 16px', display: 'flex' }}>
        <FilterBar />
        <ProductsList currentItems={currentItems} />
      </div>
      <Pagination
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </>
  );
}

export default Products;
