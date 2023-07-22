import { deleteProduct, getProducts } from '@/axios/axiosApi';
import { useState } from 'react';

export const useProductStore = (initialProducts) => {
  const [products, setProducts] = useState(initialProducts);

  const refetchProducts = async () => {
    const newProducts = await getProducts();
    setProducts(newProducts);
  };

  const deleteProductById = async (id) => {
    await deleteProduct(id);
  };

  return { products, deleteProductById, refetchProducts };
};
