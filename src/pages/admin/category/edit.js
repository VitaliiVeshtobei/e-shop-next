import { getCategoryById } from '@/axios/axiosApi';
import { EditCategoryAdmin } from '@/components/ADMIN/CategoriesAdmin/EditCategoryAdmin/EditCategoryAdmin';
import React from 'react';

export async function getServerSideProps(context) {
  const { query } = context;
  const category = await getCategoryById(query.id);

  return {
    props: {
      category,
    },
  };
}

const edit = ({ category }) => {
  return <EditCategoryAdmin category={category} />;
};

export default edit;
