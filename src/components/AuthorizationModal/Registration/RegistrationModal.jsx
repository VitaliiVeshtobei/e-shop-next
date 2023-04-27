import { useState } from 'react';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

import { Form, Input, Label, Title, EyeBtn, Btn, OrLine, ScndText, GoogleBtn } from '../LogIn/LoginModal.styled';
import { LoginBtn } from './RegistrationModal.styled';

const RegistrationModal = ({ modalChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onLoginClick = () => {
    modalChange('login');
  };
  return (
    <>
      <Title>Реєстрація</Title>
      <Form>
        <Label htmlFor="name">Ім&apos;я</Label>
        <Input
          id="name"
          type="text"
        />
        <Label htmlFor="surname">Призвіще</Label>
        <Input
          id="surname"
          type="text"
        />
        <Label htmlFor="phone">Номер телефону</Label>
        <Input
          type="tel"
          id="phone"
          pattern="[0-9]{10}"
        />
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
        />
        <Label htmlFor="password">Придумайте пароль</Label>
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
        <Btn>Зареєструватися</Btn>
      </Form>
      <LoginBtn
        type="button"
        onClick={onLoginClick}
      >
        Вже зареєстровані? Увійти
      </LoginBtn>
      <OrLine>або</OrLine>
      <ScndText>Увійти як користувач</ScndText>
      <GoogleBtn>
        <FcGoogle />
        Goolge
      </GoogleBtn>
    </>
  );
};

export default RegistrationModal;
