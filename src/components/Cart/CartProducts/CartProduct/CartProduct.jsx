import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {
  Container,
  MinusBtn,
  PlusBtn,
  Price,
  ProductContainer,
  Quantity,
  QuantityContainer,
  Sum,
} from './CartProduct.styled';

export const CartProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
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
        <MinusBtn
          type="button"
          onClick={handleMinus}
          quantity={quantity}
        >
          <AiOutlineMinus />
        </MinusBtn>

        <Quantity>{quantity}</Quantity>

        <PlusBtn
          type="button"
          onClick={handlePlus}
        >
          <AiOutlinePlus />
        </PlusBtn>
      </QuantityContainer>
      <Sum>{`${quantity * product.price} ₴`}</Sum>
    </Container>
  );
};
