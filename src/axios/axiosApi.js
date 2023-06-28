import { instanceNew } from './axiosDefault';

export const getCategories = async () => {
  const { data } = await instanceNew('/api/category/get');

  return data.categories;
};

export const getCategoryById = async (id) => {
  const { data } = await instanceNew(`/api/category/get/${id}`);
  console.log(id);
  return data.category;
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
export const updateCategory = async (id, formData) => {
  await instanceNew.patch(`/api/category/update/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
