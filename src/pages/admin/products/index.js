import { getProducts } from '@/axios/axiosApi';
import { ProductsContainerAdmin } from '@/components/ADMIN/ProductsAdmin/ProductsContainerAdmin';
import React from 'react';

export const getServerSideProps = async () => {
  const products = await getProducts();
  return { props: { products } };
};

const Products = ({ products }) => {
  return <ProductsContainerAdmin products={products} />;
};

export default Products;
