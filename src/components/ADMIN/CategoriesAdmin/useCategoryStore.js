import { deleteCategories, getCategories } from '@/axios/axiosApi';
import { useState } from 'react';

export const useCategoryStore = (initialCategories) => {
  const [categories, setCategories] = useState(initialCategories);
  const deleteCategoriesById = async (ids) => {
    await deleteCategories(ids);
  };

  const refetchCategories = async () => {
    const newCategories = await getCategories();
    setCategories(newCategories);
  };
  return { categories, deleteCategoriesById, refetchCategories };
};
