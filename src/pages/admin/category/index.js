import { getCategories } from '@/axios/axiosApi';
import { CategoriesAdmin } from '@/components/ADMIN/CategoriesAdmin/CategoriesAdmin';

export const getServerSideProps = async () => {
  const categories = await getCategories();
  return { props: { categories } };
};

const Category = ({ categories }) => {
  return <CategoriesAdmin categories={categories} />;
};

export default Category;
