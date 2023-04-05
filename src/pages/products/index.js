import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { instance } from '@/axios/axiosDefault';
import { getProductsByCategory } from '@/redux/products/slice';

export async function getServerSideProps({ query }) {
  const category = query.category;
  const response = await instance(`/products/list?group_id=${category}`);
  const data = response.data;

  return {
    props: { data },
  };
}

function Products({ data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(data));
  }, [data, dispatch]);

  return <div>Products</div>;
}

export default Products;
