import { createPortal } from 'react-dom';
import { Backdrop, Button, Modal } from './ModelWrapper.styled';
import { IoCloseSharp } from 'react-icons/io5';
import { Graphics } from '../Graphics/Graphics';
import { Location } from '../Location/Location';
import { useEffect } from 'react';

export const ModalWrapper = (props) => {
  const hendleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };
  const hendlerKeydown = (e) => {
    if (e.code === 'Escape') {
      props.onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', hendlerKeydown);
    return () => {
      window.removeEventListener('keydown', hendlerKeydown);
    };
  });

  return createPortal(
    <Backdrop onClick={hendleBackdropClick}>
      <Modal>
        <Button
          type="button"
          onClick={() => props.onClose()}
        >
          <IoCloseSharp />
        </Button>
        {props.component === 'graphics' ? <Graphics /> : <Location />}
      </Modal>
    </Backdrop>,
    document.getElementById('root-backdrop')
  );
};
