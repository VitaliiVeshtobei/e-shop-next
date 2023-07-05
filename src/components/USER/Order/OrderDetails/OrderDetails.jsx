import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { selectCart } from '@/redux/products/selectors';
import { addOrderInfo } from '@/redux/products/slice';

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
  const dispatch = useDispatch();

  useEffect(() => {
    setOrder(items);
  }, [items]);

  useEffect(() => {
    items.forEach((item) => {
      const quantity = item.quantity || 1;
      dispatch(addOrderInfo({ id: item.id, name: item.name, quantity: quantity }));
    });
  }, [items, dispatch]);

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
