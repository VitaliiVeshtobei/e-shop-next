import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, LinkStyled } from './Navigation.styled';
import { useRouter } from 'next/router';

import navigation from '../../../public/bd/navigation.json';

export const Navigation = () => {
  const router = useRouter();

  const name = navigation.find((item) => item.path === router.pathname);
  return (
    <Container>
      <LinkStyled href={'/'}>Головна</LinkStyled>

      <IoIosArrowForward />
      <LinkStyled href={router.pathname}>{name ? name.category : 'Корзина'}</LinkStyled>
    </Container>
  );
};
