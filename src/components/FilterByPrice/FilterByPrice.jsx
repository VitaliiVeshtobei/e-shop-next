import React, { useEffect, useState } from 'react';
import { BtnStyled, Container, ListBtn } from './FilterByPrice.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductsByCategory } from '@/redux/products/selectors';
import { getProductsByCategory } from '@/redux/products/slice';
import { useRouter } from 'next/router';

export const FilterByPrice = ({ children }) => {
  const [activeCheapBtn, setActiveCheapBtn] = useState(false);
  const [activeExpensiveBtn, setActiveExpensiveBtn] = useState(false);
  const [activeNewestBtn, setActiveNewestBtn] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector(selectProductsByCategory);
  const router = useRouter();

  useEffect(() => {
    setActiveNewestBtn(true);
    setActiveCheapBtn(false);
    setActiveExpensiveBtn(false);
  }, [router.asPath]);

  const handleClick = (e) => {
    const buttonName = e.target.name;
    if (buttonName === 'cheap') {
      setActiveCheapBtn(true);
      setActiveNewestBtn(false);
      setActiveExpensiveBtn(false);
      const ascending = [...products].sort((a, b) => +a.price - +b.price);
      dispatch(getProductsByCategory(ascending));
      return;
    }
    if (buttonName === 'expensive') {
      setActiveExpensiveBtn(true);
      setActiveNewestBtn(false);

      setActiveCheapBtn(false);
      const descending = [...products].sort((a, b) => +b.price - +a.price);
      dispatch(getProductsByCategory(descending));
      return;
    }
    setActiveNewestBtn(true);
    setActiveCheapBtn(false);
    setActiveExpensiveBtn(false);

    const newest = [...products].sort(
      (a, b) => new Date(b.date_modified).getTime() - new Date(a.date_modified).getTime()
    );
    dispatch(getProductsByCategory(newest));
  };
  return (
    <Container>
      {children}
      <ListBtn>
        <li>
          <BtnStyled
            onClick={handleClick}
            name="newest"
            activeBtn={activeNewestBtn}
          >
            За новизною
          </BtnStyled>
        </li>
        <li>
          <BtnStyled
            onClick={handleClick}
            name="cheap"
            activeBtn={activeCheapBtn}
          >
            Дешевше
          </BtnStyled>
        </li>
        <li>
          <BtnStyled
            onClick={handleClick}
            name="expensive"
            activeBtn={activeExpensiveBtn}
          >
            Дорожче
          </BtnStyled>
        </li>
      </ListBtn>
    </Container>
  );
};
