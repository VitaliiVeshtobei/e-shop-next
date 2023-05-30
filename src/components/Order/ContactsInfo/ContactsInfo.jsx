import { useState } from 'react';

import { Container, Step, StepWrapper, Title, Form, Input, Label, Btn } from './ContactsInfo.styled';

const ContactsInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <Container>
      <StepWrapper>
        <Step>1</Step>
        <Title>
          Контактні дані<span>*</span>
        </Title>
      </StepWrapper>

      <Form>
        <Label>
          Прізвище<span>*</span>
          <Input
            type="text"
            value={surname}
            required
            name="surname"
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Введіть ваше прізвище"
          />
        </Label>
        <Label>
          Ім&apos;я<span>*</span>
          <Input
            required
            type="text"
            value={name}
            name="surname"
            onChange={(e) => setName(e.target.value)}
            placeholder="Введіть ваше ім'я"
          />
        </Label>
        <Label>
          Телефон<span>*</span>
          <Input
            required
            type="tel"
            name="phone"
            placeholder="Введіть ваш телефон"
            maxLength={10}
            minLength={10}
            value={phoneNumber}
            pattern="[0-9]*"
            title="Введіть номер телефону у форматі 0631234567"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Label>
        <Btn type="submit">Продовжити</Btn>
      </Form>
    </Container>
  );
};

export default ContactsInfo;
