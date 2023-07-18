import React, { useState } from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import { ProductComments } from '../ProductComments/ProductComments';
import { Container, TitleButton, Wrapper, ButtonsContainer } from './ProductDescriptionWithComments.styled';
import { useSelector } from 'react-redux';
import { selectProductInfo } from '@/redux/products/selectors';

export const ProductDescriptionWithComments = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [activeBtnDescription, setActiveBtnDescription] = useState(true);
  const [activeBtnComments, setActiveBtnComments] = useState(false);
  const product = useSelector(selectProductInfo);
  const changeActiveBtn = (e) => {
    const id = e.target.id;
    if (id === 'description') {
      setShowDescription(true);
      setActiveBtnDescription(true);
      setActiveBtnComments(false);
      return;
    }
    setShowDescription(false);
    setActiveBtnDescription(false);
    setActiveBtnComments(true);
  };
  return (
    <Container>
      <ButtonsContainer>
        <TitleButton
          type="button"
          id="description"
          onClick={changeActiveBtn}
          activeBtn={activeBtnDescription}
        >
          Опис
        </TitleButton>
        <TitleButton
          type="button"
          id="comments"
          onClick={changeActiveBtn}
          activeBtn={activeBtnComments}
        >
          Відгуки
        </TitleButton>
      </ButtonsContainer>
      <Wrapper>{showDescription ? <ProductDescription /> : <ProductComments product={product} />}</Wrapper>
    </Container>
  );
};
