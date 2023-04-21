import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, LinkStyled } from './Navigation.styled';
import { useRouter } from 'next/router';

import navigation from '../../../public/bd/navigation.json';
import { useSelector } from 'react-redux';
import { selectCategories } from '@/redux/products/selectors';

export const Navigation = () => {
  const [names, setNames] = useState([]);
  const [categories, setCategories] = useState([]);

  const dataCategories = useSelector(selectCategories);

  const router = useRouter();

  const categoryName = categories.find((item) => router.asPath.includes(item.id));
  const nav = navigation.find((item) => item.path === router.asPath);

  useEffect(() => {
    setCategories(dataCategories);
  }, [dataCategories]);

  useEffect(() => {
    if (nav) {
      setNames([navigation[0], nav]);
      return;
    }
    if (categoryName) {
      setNames([navigation[0], { id: categoryName.id, path: router.asPath, category: categoryName.name_multilang.uk }]);
      return;
    }
    if (router.asPath === '/cart') {
      setNames([navigation[0], { id: 2, path: router.asPath, category: 'Корзина' }]);
      return;
    }
  }, [categoryName, nav, router.asPath]);

  return (
    <Container>
      {names.map((item, idx) => {
        return (
          <li key={item.id}>
            <LinkStyled href={item.path}>{item.category}</LinkStyled>
            {!idx && <IoIosArrowForward />}
          </li>
        );
      })}
    </Container>
  );
};
