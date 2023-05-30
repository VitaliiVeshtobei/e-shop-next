import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/products/selectors';

import { Wrap, Text, Title, List, Item, Details, Btn } from './Summary.styled';

const Summary = () => {
  const order = useSelector(selectCart);
  const sum = order.reduce((acc, obj) => (obj.quantity ? acc + obj.price * obj.quantity : acc + obj.price), 0);
  let quantity = order.reduce((acc, obj) => (obj.quantity ? acc + obj.quantity : acc + 1), 0);
  console.log(quantity);
  return (
    <Wrap>
      <Title>Разом</Title>
      <List>
        <Item>
          <Text>
            {quantity} {quantity === 1 ? 'товар' : quantity > 1 && quantity < 5 ? 'товари' : 'товарів'} на суму
          </Text>
          <Details>
            {sum}
            <span>₴</span>
          </Details>
        </Item>
      </List>
      <List>
        <Item>
          <Text>Доставка</Text>
          <Details>за тарифами перевізника</Details>
        </Item>
      </List>
      <List>
        <Item>
          <Text>До сплати</Text>
          <Details>
            {sum}
            <span>₴</span>
          </Details>
        </Item>
      </List>

      <Btn>Оформити замовлення</Btn>
    </Wrap>
  );
};

export default Summary;
