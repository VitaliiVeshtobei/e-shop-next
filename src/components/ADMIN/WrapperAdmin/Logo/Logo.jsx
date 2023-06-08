import React from 'react';
import Image from 'next/image';

import { LogoContainer } from './Logo.styled';
import { useRouter } from 'next/router';
export const Logo = () => {
  const router = useRouter();
  return (
    <LogoContainer onClick={() => router.push('/admin-panal')}>
      <Image
        src="/images/logo/logo-victar.svg"
        width={40}
        height={40}
        alt="logo"
      />
      <p>VicTar</p>
    </LogoContainer>
  );
};
