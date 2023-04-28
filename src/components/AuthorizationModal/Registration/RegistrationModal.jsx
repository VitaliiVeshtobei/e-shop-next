import { useState } from 'react';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

import { Form, Input, Label, Title, EyeBtn, Btn, OrLine, ScndText, GoogleBtn, SwitchBtn } from '../AuthModals.styled';

const RegistrationModal = ({ modalChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onLoginClick = () => {
    modalChange('login');
  };

  const handleChange = (event) => {
    const rawPhoneNumber = event.target.value;
    const formattedPhoneNumber = rawPhoneNumber
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    const formattedPhoneNumberString = !formattedPhoneNumber[2]
      ? '+38'
      : `+38 ${formattedPhoneNumber[2]}${formattedPhoneNumber[3] ? ` ${formattedPhoneNumber[3]}` : ''}${
          formattedPhoneNumber[4] ? ` ${formattedPhoneNumber[4]}` : ''
        }${formattedPhoneNumber[5] ? ` ${formattedPhoneNumber[5]}` : ''}`;
    setPhoneNumber(formattedPhoneNumberString);
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
          value={phoneNumber}
          placeholder="+38 "
          onChange={handleChange}
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
      <GoogleBtn place="register">
        <FcGoogle />
        Goolge
      </GoogleBtn>
    </>
  );
};

export default RegistrationModal;
