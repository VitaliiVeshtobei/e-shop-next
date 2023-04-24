import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Container, LinkStyled } from './Navigation.styled';
import { useRouter } from 'next/router';

import navigation from '../../../public/bd/navigation.json';
import { useSelector } from 'react-redux';
import { selectCategories, selectProductInfo } from '@/redux/products/selectors';

export const Navigation = () => {
  const [names, setNames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cardProduct, setCardProduct] = useState({});

  const dataCategories = useSelector(selectCategories);
  const dataCard = useSelector(selectProductInfo);
  const router = useRouter();

  const categoryName = categories.find((item) => router.asPath.includes(item.id));
  const nav = navigation.find((item) => item.path === router.asPath);

  useEffect(() => {
    setCategories(dataCategories);
    setCardProduct(dataCard);
  }, [dataCard, dataCategories]);

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
    setNames([
      navigation[0],
      {
        id: 3,
        path: `/products?category=${cardProduct.group?.id}`,
        category: cardProduct.group?.name_multilang.uk ?? cardProduct.group?.name_multilang.ru,
      },
    ]);
  }, [
    categoryName,
    cardProduct.group?.id,
    cardProduct.group?.name_multilang.uk,
    nav,
    router.asPath,
    cardProduct.group?.name_multilang.ru,
  ]);

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
