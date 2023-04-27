import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import { IoCloseSharp } from 'react-icons/io5';

import { Backdrop } from '../ProductInfo/ProductImages/ImageModal/ImageModal.styled';
import LoginModal from './LogIn/LoginModal';
import RegistrationModal from './Registration/RegistrationModal';

import { Container, CloseBtn } from './Authorization.styled';

const Authorization = ({ onClose }) => {
  const [modalType, setModalType] = useState('login');

  const modalRoot = document.getElementById('root-backdrop');

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handlerKeydown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handlerKeydown);
    return () => {
      window.removeEventListener('keydown', handlerKeydown);
    };
  });

  const modalTypeChange = (type) => {
    setModalType(type);
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Container modalType={modalType}>
        <CloseBtn onClick={onClose}>
          <IoCloseSharp />
        </CloseBtn>
        {modalType === 'login' ? (
          <LoginModal modalChange={modalTypeChange} />
        ) : (
          <RegistrationModal modalChange={modalTypeChange} />
        )}
      </Container>
    </Backdrop>,
    modalRoot
  );
};
export default Authorization;
