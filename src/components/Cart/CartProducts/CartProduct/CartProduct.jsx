import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Container, Price, ProductContainer, Quantity, QuantityContainer, Sum } from './CartProduct.styled';

export const CartProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Container>
      <ProductContainer>
        <Image
          src={product.main_image}
          alt={product.name}
          width={140}
          height={120}
        />
        <p>{product.name}</p>
      </ProductContainer>
      <Price>{`${product.price} ₴`}</Price>
      <QuantityContainer>
        <AiOutlineMinus />

        <Quantity>{quantity}</Quantity>

        <AiOutlinePlus />
      </QuantityContainer>
      <Sum>{`${quantity * product.price} ₴`}</Sum>
    </Container>
  );
};
