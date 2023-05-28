import { useState } from 'react';
import getConfig from 'next/config';

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
} from '../AuthModals.styled';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/user/operations';

const LoginModal = ({ modalChange, onClose }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onRegisterClick = () => {
    modalChange('register');
  };

  const admin = (e) => {
    e.preventDefault();
    router.push('/admin');
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(login(data));
    onClose();
  };

  return (
    <>
      <Title>Вхід</Title>
      <Form onSubmit={handlerSubmit}>
        <Label htmlFor="email">Email або номер телефону </Label>
        <Input
          id="email"
          type="email"
        />

        <Label htmlFor="password">Пароль</Label>
        <div style={{ position: 'relative' }}>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
          />
          <EyeBtn
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </EyeBtn>
        </div>
        <ForgetPassword>Забули пароль? </ForgetPassword>
        <Btn onClick={admin}>Увійти</Btn>
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
