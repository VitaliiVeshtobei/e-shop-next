import { useState } from 'react';

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

const LoginModal = ({ modalChange }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <>
      <Title>Вхід</Title>
      <Form>
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
      <GoogleBtn>
        <FcGoogle />
        Goolge
      </GoogleBtn>
    </>
  );
};

export default LoginModal;
