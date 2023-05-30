import { useState } from 'react';

import { Container, Step, StepWrapper, Title, Text, Form, Label, Radio } from './DeliveryInfo.styled';
import NP from './NP/NP';
import Ukrposhta from './UkrPoshta/UkrPoshta';
import Meest from './Meest/Meest';

const DeliveryInfo = () => {
  const [deliveryOption, setDeliveryOption] = useState(null);

  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
  };

  return (
    <Container>
      <StepWrapper>
        <Step>2</Step>
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
