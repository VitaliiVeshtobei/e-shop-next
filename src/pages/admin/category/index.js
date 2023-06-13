import { getCategories } from '@/axios/axiosApi';

import { MainContent } from '@/components/ADMIN/MainContent/MainContent';

export const getServerSideProps = async () => {
  const categories = await getCategories();
  return { props: { categories } };
};

const Category = ({ categories }) => {
  return <MainContent data={categories} />;
};

export default Category;
