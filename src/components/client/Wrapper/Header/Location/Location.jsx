import React from 'react';
import { useState } from 'react';

import { CiLocationOn, CiCalendar } from 'react-icons/ci';
import { ModalWrapper } from '../../../Modal/ModalWrapper/ModelWrapper';
import { Container, ListLocation, ItemLocation, LocationBtn } from './LocationStyled';

const Location = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [component, setComponent] = useState(null);

  const openModal = (e) => {
    setIsOpenModal(true);
    setComponent(e);
  };
  const toggleModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
    setComponent(null);
  };

  return (
    <Container>
      <a href="tel:+380666125324">
        <span>Потрібна допомога? Зателефонуйте: </span>+380 (66) 612-53-24
      </a>

      <ListLocation>
        <ItemLocation>
          <LocationBtn
            type="button"
            onClick={() => openModal('location')}
          >
            <CiLocationOn />
            <span>Наш магазин</span>
          </LocationBtn>
        </ItemLocation>
        <ItemLocation>
          <LocationBtn
            type="button"
            onClick={() => openModal('graphics')}
          >
            <CiCalendar style={{ width: 24, height: 24 }} />
            <span>Графік роботи</span>
          </LocationBtn>
        </ItemLocation>
      </ListLocation>
      {isOpenModal && (
        <ModalWrapper
          component={component}
          onClose={toggleModal}
        />
      )}
    </Container>
  );
};

export default Location;
