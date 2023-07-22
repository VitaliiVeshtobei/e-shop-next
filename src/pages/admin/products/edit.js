import { getProducts } from '@/axios/axiosApi';
import { ButtonBack } from '@/components/ADMIN/common/ButtonBack/ButtonBack';
import { useRouter } from 'next/router';
import React from 'react';

export async function getServerSideProps(context) {
  const { query } = context;
  const products = await getProducts();
  const product = products.filter((item) => item._id === query.id);
  return {
    props: {
      product,
    },
  };
}

const Edit = ({ product }) => {
  const router = useRouter();
  console.log(product);

  return (
    <div>
      <ButtonBack onClick={() => router.back()} />
      <div>Product</div>
    </div>
  );
};

export default Edit;
