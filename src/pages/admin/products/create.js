import { ButtonBack } from '@/components/ADMIN/ButtonBack/ButtonBack';
import { useRouter } from 'next/router';
import React from 'react';

const Create = () => {
  const router = useRouter();

  return (
    <div>
      <ButtonBack onClick={() => router.back()} />
      <div>Create product</div>
    </div>
  );
};

export default Create;
