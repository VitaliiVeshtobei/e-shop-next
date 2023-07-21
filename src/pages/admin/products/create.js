import { getCategories } from '@/axios/axiosApi';
import { ButtonBack } from '@/components/ADMIN/common/ButtonBack/ButtonBack';
import { CreateProductAdmin } from '@/components/ADMIN/ProductsAdmin/CreateProductAdmin/CreateProductAdmin';
import { useRouter } from 'next/router';
import React from 'react';

export const getServerSideProps = async () => {
  const categories = await getCategories();
  return { props: { categories } };
};

const Create = ({ categories }) => {
  const router = useRouter();

  return (
    <div>
      <ButtonBack onClick={() => router.back()} />
      <CreateProductAdmin categories={categories} />
    </div>
  );
};

export default Create;
