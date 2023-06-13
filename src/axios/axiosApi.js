import { instanceNew } from './axiosDefault';

export const getCategories = async () => {
  const { data } = await instanceNew('/api/category/get');

  return data.categories;
};
export const getProducts = async () => {
  const { data } = await instanceNew('/api/product/get');

  return data.products;
};

export const createCategorie = async (formData) => {
  await instanceNew.post('/api/category/create', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const deleteCategories = async (idx) => {
  await instanceNew.delete('/api/category/delete', { data: idx });
};
