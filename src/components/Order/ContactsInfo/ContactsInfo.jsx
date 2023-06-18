import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { IoCheckmarkOutline } from 'react-icons/io5';

import { addOrderContacts } from '@/redux/products/slice';

import { Container, Step, StepWrapper, Title, Form, Input, Label, Btn } from './ContactsInfo.styled';

const ContactsInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isSurnameCorrect, setSurnameCorrect] = useState(null);
  const [isNameCorrect, setNameCorrect] = useState(null);
  const [isPhoneCorrect, setPhoneCorrect] = useState(null);

  const [isContactsCorrect, setContactsCorrect] = useState(false);
  const [done, setDone] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSurnameCorrect === true && isNameCorrect === true && isPhoneCorrect === true) {
      setContactsCorrect(true);
    } else if (isSurnameCorrect !== true || isNameCorrect !== true || isPhoneCorrect !== true) {
      setContactsCorrect(false);
    }
  }, [isSurnameCorrect, isNameCorrect, isPhoneCorrect]);

  const onSurnameChange = (evt) => {
    setSurname(evt.target.value);

    if (/^[a-zA-Z]{2,}$/.test(evt.target.value)) {
      setSurnameCorrect(true);
      return;
    }
    setSurnameCorrect(false);
  };
  const onNameChange = (evt) => {
    setName(evt.target.value);

    if (/^[a-zA-Z]{2,}$/.test(evt.target.value)) {
      setNameCorrect(true);
      return;
    }
    setNameCorrect(false);
  };
  const onPhoneChange = (evt) => {
    setPhoneNumber(evt.target.value);

    if (/^\d{10}$/.test(evt.target.value)) {
      setPhoneCorrect(true);
      return;
    }
    setPhoneCorrect(false);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (isSurnameCorrect && isNameCorrect && isPhoneCorrect) {
      setContactsCorrect(true);
      setDone(true);
      dispatch(addOrderContacts({ phone: phoneNumber, name: name, surname: surname }));
      return;
    }
    setContactsCorrect(false);
  };

  return (
    <Container correct={isContactsCorrect}>
      <StepWrapper>
        <Step done={done}>{done ? <IoCheckmarkOutline /> : 1}</Step>
        <Title>
          Контактні дані<span>*</span>
        </Title>
      </StepWrapper>

      <Form>
        <Label>
          Прізвище<span>*</span>
          <Input
            correct={isSurnameCorrect}
            type="text"
            value={surname}
            required
            name="surname"
            onChange={onSurnameChange}
            placeholder="Введіть ваше прізвище"
            pattern="[A-Za-z]{2,}"
          />
        </Label>
        <Label>
          Ім&apos;я<span>*</span>
          <Input
            correct={isNameCorrect}
            required
            type="text"
            value={name}
            name="name"
            onChange={onNameChange}
            placeholder="Введіть ваше ім'я"
            pattern="[A-Za-z]{2,}"
          />
        </Label>
        <Label>
          Телефон<span>*</span>
          <Input
            correct={isPhoneCorrect}
            required
            type="tel"
            name="phone"
            placeholder="Введіть ваш телефон"
            maxLength={10}
            minLength={10}
            value={phoneNumber}
            pattern="[0-9]*"
            title="Введіть номер телефону у форматі 0631234567"
            onChange={onPhoneChange}
          />
        </Label>
        {isContactsCorrect && (
          <Btn
            type="submit"
            onClick={onSubmit}
          >
            Продовжити
          </Btn>
        )}
      </Form>
    </Container>
  );
};

export default ContactsInfo;
