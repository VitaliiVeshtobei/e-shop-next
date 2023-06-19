import React, { useEffect, useState } from 'react';
import { Container, HeadContainer, OrderBtn, TotalSum } from './CartTotal.styled';
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/products/selectors';
import { useRouter } from 'next/router';

export const CartTotal = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const cart = useSelector(selectCart);

  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  const sum = products.reduce((acc, item) => {
    acc += item.quantity ? item.price * item.quantity : item.price;
    return acc;
  }, 0);
  return (
    <Container>
      <HeadContainer>
        <p>Всього в корзині</p>
      </HeadContainer>
      <TotalSum>
        <p>Загальна сума</p>
        <p>{`${sum} ₴`}</p>
      </TotalSum>
      <OrderBtn
        type="button"
        onClick={() => router.push('/order')}
      >
        Оформити замовлення
      </OrderBtn>
    </Container>
  );
};
