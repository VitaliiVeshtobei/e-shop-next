import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import { selectCart } from '@/redux/products/selectors';

import {
  Container,
  Wrap,
  Title,
  Price,
  Product,
  ProductName,
  ProductPrice,
  ProductQuantity,
} from './OrderDetails.styled';

const OrderDetails = () => {
  const [order, setOrder] = useState([]);
  const items = useSelector(selectCart);
  const sum = order.reduce((acc, obj) => (obj.quantity ? acc + obj.price * obj.quantity : acc + obj.price), 0);

  useEffect(() => {
    setOrder(items);
  }, [items]);

  return (
    <Container>
      <Wrap>
        <Title>Ваше замовлення</Title>
        <Price>{sum}₴</Price>
      </Wrap>
      {order?.map((item, index) => {
        return (
          <Product key={index}>
            <Image
              src={item.image}
              alt={item.name}
              width={90}
              height={90}
            />
            <div>
              <ProductName>{item.name}</ProductName>
              <ProductQuantity>Кількість: {item.quantity ? item.quantity : 1} </ProductQuantity>
              <ProductPrice>{item.quantity ? item.quantity * item.price : item.price}₴</ProductPrice>
            </div>
          </Product>
        );
      })}
    </Container>
  );
};

export default OrderDetails;
