import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, LinkStyled } from './Navigation.styled';
import { useRouter } from 'next/router';

import navigation from '../../../public/bd/navigation.json';

export const Navigation = () => {
  const router = useRouter();

  const name = navigation.find((item) => item.path === router.pathname);
  const query = name.path === '/products' ? 'category=all' : '';
  return (
    <Container>
      <LinkStyled href={'/'}>Головна</LinkStyled>

      <IoIosArrowForward />
      <LinkStyled href={{ pathname: router.pathname, query }}>{name ? name.category : 'Корзина'}</LinkStyled>
    </Container>
  );
};
