import { instanceNew } from './axiosDefault';

export const getCategories = async () => {
  const { data } = await instanceNew('/api/category/get');

  return data.categories;
};

export const getCategoryById = async (id) => {
  const { data } = await instanceNew(`/api/category/get/${id}`);
  return data.category;
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

export const createOrder = async (data) => {
  await instanceNew.post('/api/orders/create', data);
};

export const getOrders = async () => {
  const { data } = await instanceNew.get('/api/orders/get');
  return data.orders;
};

export const getCommentsByProductId = async (id) => {
  const { data } = await instanceNew.get(`/api/comments/getByProductId/${id}`);
  return data.comments;
};

export const getProducts = async () => {
  const { data } = await instanceNew('/api/product/get');
  return data.products;
};

export const createProduct = async (formData) => {
  await instanceNew.post('/api/product/create', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const deleteProducts = async (idx) => {
  await instanceNew.delete('/api/product/delete', { data: idx });
};

export const updateProduct = async (id, formData) => {
  await instanceNew.patch(`/api/product/update/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
