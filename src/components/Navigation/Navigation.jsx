import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, LinkStyled } from './Navigation.styled';
import { useRouter } from 'next/router';

import navigation from '../../../public/bd/navigation.json';

export const Navigation = () => {
  const router = useRouter();

  const name = navigation.find((item) => item.path === router.pathname);

  const handleClick = () => {
    if (name.path === '/products') {
      return router.push({
        pathname: '/products',
        query: { category: 'all' },
      });
    }
    router.push({
      pathname: router.pathname,
    });
  };

  return (
    <Container>
      <LinkStyled href={'/'}>Головна</LinkStyled>

      <IoIosArrowForward />
      <LinkStyled onClick={handleClick}>{name ? name.category : 'Корзина'}</LinkStyled>
    </Container>
  );
};
