import React from 'react';
import Image from 'next/image';
import { Btn, Container, Text, TextContainer } from './CartEmpty.styled';
import { useRouter } from 'next/router';

export const CartEmpty = () => {
  const router = useRouter();
  return (
    <Container>
      <Image
        src="/images/empty-cart.png"
        alt="empty-cart"
        width={600}
        height={300}
      />
      <TextContainer>
        <div>
          <Text>Ваша корзина порожня!</Text>
        </div>
        <div>
          <Btn
            type="Btn"
            onClick={() => router.push('/products?category=all')}
          >
            Перейти до товарів
          </Btn>
        </div>
      </TextContainer>
    </Container>
  );
};
