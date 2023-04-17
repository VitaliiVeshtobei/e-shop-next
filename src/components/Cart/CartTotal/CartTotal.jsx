import React from 'react';
import { Container, HeadContainer, OrderBtn, TotalSum } from './CartTotal.styled';

export const CartTotal = () => {
  return (
    <Container>
      <HeadContainer>
        <p>Всього в корзині</p>
      </HeadContainer>
      <TotalSum>
        <p>Загальна сума</p>
        <p>100</p>
      </TotalSum>
      <OrderBtn type="button">Оформити замовлення</OrderBtn>
    </Container>
  );
};
