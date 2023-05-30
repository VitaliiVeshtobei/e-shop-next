import { useState } from 'react';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

import {
  Form,
  Input,
  Label,
  Title,
  EyeBtn,
  Btn,
  OrLine,
  ScndText,
  GoogleBtn,
  SwitchBtn,
  ErrorMessage,
  InputMaskPhone,
} from '../AuthModals.styled';
import { useDispatch } from 'react-redux';
import { registration } from '@/redux/user/operations';
import { useForm } from 'react-hook-form';

const RegistrationModal = ({ modalChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const dispatch = useDispatch();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onLoginClick = () => {
    modalChange('login');
  };

  const onSubmit = (value) => {
    const data = {
      name: value.name,
      lastName: value.surname,
      phone: `+${value.tel.replace(/\D/g, '')}`,
      email: value.email,
      password: value.password,
    };

    dispatch(registration(data));
  };
  return (
    <>
      <Title>Реєстрація</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Ім&apos;я</Label>
        <Input
          id="name"
          type="text"
          {...register('name', {
            required: { value: true, message: "Необхідно вказати ім'я" },
            pattern: { value: /^[A-Za-z]+$/, message: 'Імʼя має містити лише букви' },
          })}
        />
        {errors?.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <Label htmlFor="surname">Призвіще</Label>
        <Input
          id="surname"
          type="text"
          {...register('surname', {
            required: { value: true, message: "Прізвище обов'язкове" },
            pattern: { value: /^[A-Za-z]+$/, message: 'Прізвище має містити лише букви' },
          })}
        />
        {errors?.surname && <ErrorMessage>{errors.surname.message}</ErrorMessage>}
        <Label htmlFor="phone">Номер телефону</Label>
        <InputMaskPhone
          mask="+380 (99) 999-99-99"
          maskChar="_"
          id="phone"
          type="tel"
          name="phoneNumber"
          placeholder="+380 (__) ___-__-__"
          {...register('tel', {
            required: { value: true, message: "Номер телефону обов'язковий" },
            pattern: { value: /^\+380 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/, message: 'Недійсний номер телефону' },
          })}
        />
        {errors?.tel && <ErrorMessage>{errors.tel.message}</ErrorMessage>}

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email', {
            required: { value: true, message: 'Потрібна електронна пошта' },
            pattern: { value: /.+@.+/, message: 'Недійсна електронна адреса' },
          })}
        />
        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Label htmlFor="password">Придумайте пароль</Label>
        <div style={{ position: 'relative' }}>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: { value: true, message: 'Необхідно ввести пароль' },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                minLength: {
                  value: 8,
                  message: 'Пароль має бути не менше 8 символів',
                },
                message: 'Пароль має містити принаймні одну велику літеру, одну малу літеру та одну цифру',
              },
            })}
          />

          <EyeBtn
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </EyeBtn>
        </div>
        {errors?.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Btn place="register">Зареєструватися</Btn>
      </Form>
      <SwitchBtn
        type="button"
        onClick={onLoginClick}
        place="register"
      >
        Вже зареєстровані? Увійти
      </SwitchBtn>
      <OrLine place="register">або</OrLine>
      <ScndText place="register">Увійти як користувач</ScndText>
      <GoogleBtn
        place="register"
        href={`${
          process.env.NODE_ENV === 'development' ? process.env.BACKEND_URL_DEV : process.env.BACKEND_URL_PROD
        }/api/auth/google`}
      >
        <FcGoogle />
        Goolge
      </GoogleBtn>
    </>
  );
};

export default RegistrationModal;
