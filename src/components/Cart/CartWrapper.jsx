import React, { useState } from 'react';
import { CartProducts } from './CartProducts/CartProducts';
import { CartTotal } from './CartTotal/CartTotal';
import { Container } from './CartWrapper.styled';

const CartWrapper = () => {
  return (
    <Container>
      <CartProducts />
      <CartTotal />
    </Container>
  );
};

export default CartWrapper;
