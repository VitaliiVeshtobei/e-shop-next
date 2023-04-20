import React, { useEffect, useState } from 'react';
import { CartProducts } from './CartProducts/CartProducts';
import { CartTotal } from './CartTotal/CartTotal';
import { Container } from './CartWrapper.styled';
import { CartEmpty } from './CartEmpty/CartEmpty';
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/products/selectors';

const CartWrapper = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const cart = useSelector(selectCart);
  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);
  return (
    <>
      {cartProducts.length ? (
        <Container>
          <CartProducts />
          {/* <CartTotal /> */}
        </Container>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default CartWrapper;
