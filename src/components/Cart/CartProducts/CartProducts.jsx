import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderList } from './HeaderList/HeaderList';
import { selectCart } from '@/redux/products/selectors';
import { CartProduct } from './CartProduct/CartProduct';
import { Container, ProductItem } from './CartProducts.styled';
import { CartBtns } from './CartBtns/CartBtns';

export const CartProducts = () => {
  const [products, setProducts] = useState([]);

  const cart = useSelector(selectCart);

  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  return (
    <Container>
      <HeaderList />
      <ul>
        {products
          .map((item) => {
            return (
              <ProductItem key={item.id}>
                <CartProduct product={item} />
              </ProductItem>
            );
          })
          .reverse()}
      </ul>
      <CartBtns />
    </Container>
  );
};
