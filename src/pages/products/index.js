import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { instance } from '@/axios/axiosDefault';
import { getProductsByCategory } from '@/redux/products/slice';
import Image from 'next/image';

export async function getServerSideProps({ query }) {
  const category = query.category;

  const response = await instance(`/products/${category ? `list?limit=500&group_id=${category}` : 'list?limit=500'}`);
  // const response = await instance(`/products/list`);
  const data = response.data.products;

  return {
    props: { data, query },
  };
}

function Products({ data, query }) {
  console.log(query);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(data));
  }, [data, dispatch]);

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'start',
        padding: '20px',
        justifyContent: 'center',
      }}
    >
      {data?.map((item, idx) => (
        <li
          key={item.id}
          style={{
            display: 'flex',
            gap: '10px',
            border: '1px solid grey',
            width: '300px',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <Image
            src={item.main_image}
            alt="fotka"
            width={150}
            height={150}
          />
          <p>{`${idx + 1} :${item.name}`}</p>
        </li>
      ))}
    </ul>
  );
}

export default Products;
