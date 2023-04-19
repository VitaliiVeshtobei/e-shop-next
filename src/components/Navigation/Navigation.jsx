import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, LinkStyled } from './Navigation.styled';
import { useRouter } from 'next/router';

import navigation from '../../../public/bd/navigation.json';
import { useSelector } from 'react-redux';
import { selectCategories } from '@/redux/products/selectors';

export const Navigation = () => {
  const [name, setName] = useState('');
  const categories = useSelector(selectCategories);
  const router = useRouter();

  useEffect(() => {
    const categoryName = categories.find((item) => router.asPath.includes(item.id));

    if (categoryName) {
      setName(categoryName.name_multilang.uk);
      return;
    }
    const nav = navigation.find((item) => item.path === router.asPath);
    if (nav) {
      setName(nav.category);
      return;
    }
    setName('Корзина');
  }, [categories, router.asPath]);

  return (
    <Container>
      <LinkStyled href={'/'}>Головна</LinkStyled>

      <IoIosArrowForward />
      <LinkStyled href={router.asPath}>{name}</LinkStyled>
    </Container>
  );
};
