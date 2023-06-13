import { getProducts } from '@/axios/axiosApi';
import React from 'react';

export const getServerSideProps = async () => {
  const products = await getProducts();
  return { props: { products } };
};

const Products = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product._id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default Products;
