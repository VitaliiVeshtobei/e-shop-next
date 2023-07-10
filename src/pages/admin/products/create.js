import { ButtonBack } from '@/components/ADMIN/ButtonBack/ButtonBack';
import { CreateProductAdmin } from '@/components/ADMIN/ProductsAdmin/CreateProductAdmin/CreateProductAdmin';
import { useRouter } from 'next/router';
import React from 'react';

const Create = () => {
  const router = useRouter();

  return (
    <div>
      <ButtonBack onClick={() => router.back()} />
      <CreateProductAdmin />
    </div>
  );
};

export default Create;
