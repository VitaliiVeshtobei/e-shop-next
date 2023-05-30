import { IoWalletOutline } from 'react-icons/io5';

import { StepWrapper, Step, Title, Form, Label, Radio, Container } from './PaymentInfo.styled';

const PaymentInfo = () => {
  return (
    <Container>
      <StepWrapper>
        <Step>3</Step>
        <Title>
          Оплата<span>*</span>
        </Title>
      </StepWrapper>
      <Form>
        <Label>
          <Radio
            type="radio"
            value="NP Pay"
            name="payment"
          />
          <IoWalletOutline />
          Післяплата &quot;Нова Пошта&quot;
        </Label>
        <Label>
          <Radio
            type="radio"
            value="Card"
            name="payment"
          />
          <IoWalletOutline />
          Оплата за реквізитами
        </Label>
      </Form>
    </Container>
  );
};

export default PaymentInfo;
