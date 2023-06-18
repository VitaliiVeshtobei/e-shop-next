import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Backdrop, CloseBtn } from './ImageModal.styled';
import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';

const ImageModal = ({ onClose, img }) => {
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

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CloseBtn
          type="button"
          onClick={onClose}
        >
          <IoCloseSharp />
        </CloseBtn>
        <Image
          src={img}
          width={640}
          height={640}
          alt="image"
        />
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

export default ImageModal;
