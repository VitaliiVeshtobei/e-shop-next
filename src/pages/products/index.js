import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { instance } from '@/axios/axiosDefault';
import { getProductsByCategory } from '@/redux/products/slice';

import ProductsList from '@/components/ProductsList/ProductsList';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import { FilterByPrice } from '@/components/FilterByPrice/FilterByPrice';
import { selectProductsFilter } from '@/redux/products/selectors';

export async function getServerSideProps({ query }) {
  const category = query.category;
  const response = await instance(`/products/${category ? `list?limit=500&group_id=${category}` : 'list?limit=500'}`);
  const data = response.data.products;
  const res = await instance(`/products/list?limit=500`);
  const list = res.data.products;

  return {
    props: { data, query, list },
  };
}

function Products({ data, query, list }) {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAvailable, setSelectedAvailable] = useState('');
  const [listProducts, setListProducts] = useState('');

  useEffect(() => {
    dispatch(getProductsByCategory(data));
  }, [data, dispatch]);

  useEffect(() => {
    if (selectedCategory !== '') {
      const filterProducts = list.filter((item) => item.group.id === selectedCategory);
      return setListProducts(filterProducts);
    }
    setListProducts(list);
  }, [list, selectedCategory]);

  return (
    <>
      <div style={{ marginBottom: '35px', marginTop: '-30px' }}>
        <FilterByPrice />
      </div>
      <div style={{ gap: ' 16px', display: 'flex' }}>
        <FilterBar
          selectedCategory={selectedCategory}
          selectedAvailable={selectedAvailable}
          setSelectedCategory={setSelectedCategory}
          setSelectedAvailable={setSelectedAvailable}
        />
        <ProductsList listProducts={listProducts} />
      </div>
    </>
  );
}

export default Products;
