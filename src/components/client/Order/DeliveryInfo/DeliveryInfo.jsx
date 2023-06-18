import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrder } from '@/redux/products/selectors';
import { IoCheckmarkOutline } from 'react-icons/io5';

import { addOrderDelivery } from '@/redux/products/slice';

import NP from './NP/NP';
import Ukrposhta from './UkrPoshta/UkrPoshta';
import Meest from './Meest/Meest';

import { Container, Step, StepWrapper, Title, Text, Form, Label, Radio } from './DeliveryInfo.styled';

const DeliveryInfo = () => {
  const [deliveryOption, setDeliveryOption] = useState(null);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);

  useEffect(() => {
    if (order.delivery !== '') {
      setDone(true);
    }
  }, [order]);

  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
    if (event.target.value === 'Samovyviz') {
      return dispatch(addOrderDelivery({ delivery: 'Samovyviz' }));
    }
  };

  return (
    <Container correct={done}>
      <StepWrapper>
        <Step done={done}>{done ? <IoCheckmarkOutline /> : 2}</Step>
        <Title>
          Доставка<span>*</span>
        </Title>
      </StepWrapper>
      <Text>Виберіть спосіб доставки</Text>

      <Form>
        <Label>
          <Radio
            type="radio"
            value="Nova Poshta"
            name="delivery"
            checked={deliveryOption === 'Nova Poshta'}
            onChange={handleDeliveryOptionChange}
          />
          Нова Пошта
        </Label>
        {deliveryOption === 'Nova Poshta' && <NP />}

        <Label>
          <Radio
            type="radio"
            value="Meest Poshta"
            name="delivery"
            checked={deliveryOption === 'Meest Poshta'}
            onChange={handleDeliveryOptionChange}
          />
          Meest Пошта
        </Label>
        {deliveryOption === 'Meest Poshta' && <Meest />}
        <Label>
          <Radio
            type="radio"
            value="Ukrposhta"
            name="delivery"
            checked={deliveryOption === 'Ukrposhta'}
            onChange={handleDeliveryOptionChange}
          />
          Укрпошта
        </Label>
        {deliveryOption === 'Ukrposhta' && <Ukrposhta />}
        <Label>
          <Radio
            type="radio"
            value="Samovyviz"
            name="delivery"
            checked={deliveryOption === 'Samovyviz'}
            onChange={handleDeliveryOptionChange}
          />
          Самовивіз
        </Label>
      </Form>
    </Container>
  );
};

export default DeliveryInfo;
