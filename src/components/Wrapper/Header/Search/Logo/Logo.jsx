import React from 'react';
import Image from 'next/image';

import { LogoContainer } from './Logo.styled';
export const Logo = () => {
  return (
    <LogoContainer>
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
