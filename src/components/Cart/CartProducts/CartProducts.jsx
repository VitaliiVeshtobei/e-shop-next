import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderList } from './HeaderList/HeaderList';
import { selectProductsByCategory } from '@/redux/products/selectors';
import { CartProduct } from './CartProduct/CartProduct';
import { Container, ProductItem } from './CartProducts.styled';

export const CartProducts = () => {
  const products = useSelector(selectProductsByCategory);
  console.log(products);
  return (
    <Container>
      <HeaderList />
      <ul>
        {products.map((product) => {
          return (
            <ProductItem key={product.id}>
              <CartProduct product={product} />
            </ProductItem>
          );
        })}
      </ul>
    </Container>
  );
};
