import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoWalletOutline } from 'react-icons/io5';

import { addOrderPayment } from '@/redux/products/slice';

import { StepWrapper, Step, Title, Form, Label, Radio, Container } from './PaymentInfo.styled';

const PaymentInfo = () => {
  const [payment, setPayment] = useState('');
  const [done, setDone] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addOrderPayment({ payment: payment }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payment]);

  const onPaymentChange = (evt) => {
    setPayment(evt.target.value);
    setDone(true);
  };

  return (
    <Container done={done}>
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
            value="Post payment"
            name="payment"
            onChange={onPaymentChange}
          />
          <IoWalletOutline />
          Оплата при отриманні
        </Label>
        <Label>
          <Radio
            type="radio"
            value="Card"
            onChange={onPaymentChange}
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
