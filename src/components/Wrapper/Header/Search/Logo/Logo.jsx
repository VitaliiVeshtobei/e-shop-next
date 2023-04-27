import React from 'react';
import Image from 'next/image';

import { LogoContainer } from './Logo.styled';
export const Logo = () => {
  return (
    <LogoContainer>
      <Image
        src="/images/logo/logo-victar.svg"
        width={70}
        height={70}
        alt="logo"
      />
      <p>VicTar</p>
    </LogoContainer>
  );
};
