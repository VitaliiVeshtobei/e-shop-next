const { instanceNew } = require('./axiosDefault');

export const getCategories = async () => {
  const { data } = await instanceNew('/api/category/get');
  return data.categories;
};
