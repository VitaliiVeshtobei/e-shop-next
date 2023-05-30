import { useState } from 'react';
import getConfig from 'next/config';
import { useForm } from 'react-hook-form';

import { FcGoogle } from 'react-icons/fc';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import {
  Title,
  Form,
  Label,
  Input,
  Btn,
  SwitchBtn,
  GoogleBtn,
  ForgetPassword,
  EyeBtn,
  ScndText,
  OrLine,
  ErrorMessage,
} from '../AuthModals.styled';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/user/operations';

const LoginModal = ({ modalChange, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onBlur' });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onRegisterClick = () => {
    modalChange('register');
  };

  // const admin = (e) => {
  //   e.preventDefault();
  //   router.push('/admin');
  // };
  const onSubmit = (value) => {
    // e.preventDefault();
    const data = {
      email: value.email,
      password: value.password,
    };
    dispatch(login(data));
    // onClose();
  };

  return (
    <>
      <Title>Вхід</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <Label htmlFor="password">Пароль</Label>
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
        <ForgetPassword>Забули пароль? </ForgetPassword>
        <Btn
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Увійти
        </Btn>
      </Form>
      <SwitchBtn
        type="button"
        onClick={onRegisterClick}
      >
        Зареєструватися
      </SwitchBtn>
      <OrLine>або</OrLine>
      <ScndText>Увійти як користувач</ScndText>
      <GoogleBtn
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

export default LoginModal;
