import React, { useState, useEffect } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CartContainer, LinkStyled, IconContainer, CartCount } from './Cart.styled';
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/products/selectors';

export const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  const cartProducts = useSelector(selectCart);
  useEffect(() => {
    setQuantity(cartProducts.length);
  }, [cartProducts.length]);
  return (
    <CartContainer>
      <LinkStyled href={'/cart'}>
        <IconContainer>
          <IoCartOutline />
          <CartCount quantity={quantity}>{quantity}</CartCount>
        </IconContainer>
        <p>Корзина</p>
      </LinkStyled>
    </CartContainer>
  );
};
