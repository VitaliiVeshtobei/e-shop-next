import React from 'react';
import { Backdrop, ModalContainerConfirmationOrder, TextModalConfirmation } from './OrderConfirmationModal.styled';
import { OptionBtnStyled } from '@/components/ADMIN/OptionButtons/OptionButtons.styled';
import { useRouter } from 'next/router';

export const OrderConfirmationModal = () => {
  const router = useRouter();
  return (
    <Backdrop>
      <ModalContainerConfirmationOrder>
        <TextModalConfirmation>
          Дякуюємо Вам за замовлення, найблжчим часом з вами зʼєднається наш менеджер!
        </TextModalConfirmation>
        <OptionBtnStyled
          type="OptionBtnStyled"
          onClick={() => router.push('/')}
        >
          На головну
        </OptionBtnStyled>
      </ModalContainerConfirmationOrder>
    </Backdrop>
  );
};
