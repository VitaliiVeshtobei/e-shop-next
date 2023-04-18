import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

import {
  Container,
  MinusBtn,
  PlusBtn,
  Price,
  ProductContainer,
  Quantity,
  QuantityContainer,
  Sum,
  CloseBtn,
} from './CartProduct.styled';
import { useDispatch } from 'react-redux';
import { addCart, quantityCartMinus, quantityCartPlus } from '@/redux/products/slice';

export const CartProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.quantity) {
      setQuantity(product.quantity);
    }
  }, [product.quantity]);

  const dispatch = useDispatch();

  const handleDelete = (product) => {
    dispatch(addCart(product));
  };

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
    dispatch(quantityCartPlus(product));
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      dispatch(quantityCartMinus(product));
    }
  };
  return (
    <Container>
      <ProductContainer>
        <Image
          src={product.image}
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
      <CloseBtn onClick={() => handleDelete(product)}>
        <AiOutlineDelete />
      </CloseBtn>
    </Container>
  );
};
