import { useRouter } from 'next/router';
import React from 'react';

const Create = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <button
        type="button"
        onClick={() => router.back()}
      >
        Назад
      </button>
      Create product
    </div>
  );
};

export default Create;
