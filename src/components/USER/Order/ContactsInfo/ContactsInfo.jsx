import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { IoCheckmarkOutline, IoWarningOutline } from 'react-icons/io5';

import { addOrderContacts } from '@/redux/products/slice';

import { Container, Step, StepWrapper, Title, Form, Input, Label, Btn, Error } from './ContactsInfo.styled';

const ContactsInfo = () => {
  const [done, setDone] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    setDone(true);
    dispatch(addOrderContacts({ phone: data.phone, name: data.name, surname: data.surname }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <Container correct={done}>
      <StepWrapper>
        <Step done={done}>{done ? <IoCheckmarkOutline /> : 1}</Step>
        <Title>
          Контактні дані<span>*</span>
        </Title>
      </StepWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Прізвище<span>*</span>
          <Input
            type="text"
            placeholder="Введіть ваше прізвище"
            {...register('surname', {
              required: "Поле обов'язкове до заповнення",
              pattern: /^[\p{L}\s]+$/u,
              minLength: { value: 2, message: 'Введіть мінімум 2 символи' },
            })}
            style={{ border: errors.surname ? '1px solid #FF2400' : '1px solid #B6B6B6' }}
          />
          <Error>
            {errors?.surname && (
              <>
                <IoWarningOutline /> <p>{errors?.surname?.message || 'Допустимі лише літери кирилиці або латиниці'}</p>
              </>
            )}
          </Error>
        </Label>
        <Label>
          Ім&apos;я<span>*</span>
          <Input
            type="text"
            placeholder="Введіть ваше ім'я"
            {...register('name', {
              required: "Поле обов'язкове до заповнення",
              pattern: /^[\p{L}\s]+$/u,
              minLength: { value: 2, message: 'Введіть мінімум 2 символи' },
            })}
            style={{ border: errors.name ? '1px solid #FF2400' : '1px solid #B6B6B6' }}
          />
          <Error>
            {errors?.name && (
              <>
                <IoWarningOutline /> <p>{errors?.name?.message || 'Допустимі лише літери кирилиці або латиниці'}</p>
              </>
            )}
          </Error>
        </Label>
        <Label>
          Телефон<span>*</span>
          <Input
            type="tel"
            placeholder="Введіть ваш телефон"
            {...register('phone', {
              required: "Поле обов'язкове до заповнення",
              pattern: /^\d+$/,
              minLength: { value: 10, message: 'Введіть мінімум 10 символів' },
              maxLength: { value: 10, message: 'Максимум 10 символів' },
            })}
            style={{ border: errors.phone ? '1px solid #FF2400' : '1px solid #B6B6B6' }}
          />
          <Error>
            {errors?.phone && (
              <>
                <IoWarningOutline /> <p>{errors?.phone?.message || 'Допустимий формат вводу "0631234567"'}</p>
              </>
            )}
          </Error>
        </Label>

        <Btn
          type="submit"
          disabled={!isValid}
        >
          Продовжити
        </Btn>
      </Form>
    </Container>
  );
};

export default ContactsInfo;
